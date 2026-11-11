(() => {
  const storage = {get(key){try{return localStorage.getItem(key);}catch{return null;}},set(key,value){try{localStorage.setItem(key,value);}catch{}}};
  const apply = (language) => {
    const lang = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-text-es][data-text-en]').forEach(node => { node.textContent = node.getAttribute('data-text-' + lang); });
    document.querySelectorAll('[data-language-option]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.languageOption === lang)));
    const heading = document.querySelector('h1');
    document.title = heading?.textContent === 'Diez42' ? (lang === 'es' ? 'Diez42 | Un lugar para empezar de nuevo' : 'Diez42 | A place to start again') : (heading?.textContent || 'Diez42') + ' | Diez42';
    storage.set('diez42-content-language',lang);
  };
  document.querySelectorAll('[data-language-option]').forEach(button => button.addEventListener('click', () => apply(button.dataset.languageOption)));
  apply(storage.get('diez42-content-language') || 'es');
  const notice=document.querySelector('[data-cookie-notice]');
  if(notice) notice.hidden=storage.get('diez42-cookie-notice')==='read';
  document.querySelector('[data-cookie-dismiss]')?.addEventListener('click',()=>{notice.hidden=true;storage.set('diez42-cookie-notice','read');});
  document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
  document.querySelectorAll('[data-enquiry]').forEach(form=>form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const text=[form.dataset.enquiry,...['name','email','phone','languages','availability','interest'].map(key=>key+': '+String(data.get(key)||''))].join('\n');
    const target=form.querySelector('[data-form-result]');
    target.replaceChildren();
    const link=document.createElement('a');
    link.href='https://wa.me/34600339794?text='+encodeURIComponent(text);
    link.className='button whatsapp-join';
    link.textContent=document.documentElement.lang==='en'?'Review and send in WhatsApp':'Revisar y enviar en WhatsApp';
    target.append(link);
  }));
})();
