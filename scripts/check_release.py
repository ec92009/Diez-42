"""Check static ES/EN content, navigation, program joins and media."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote,parse_qs
import json,re
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.nodes=[];self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):self.nodes.append((tag,dict(attrs)))
def check():
 v=(ROOT/'VERSION').read_text().strip()
 assert json.loads((ROOT/'package.json').read_text())['version']==v+'.0'
 files=[p for p in ROOT.glob('*.html') if p.name!='banner-preview.html']
 pages={p.name:Page(p) for p in files}
 for name,page in pages.items():
  nodes=page.nodes
  assert sum(tag=='h1' for tag,a in nodes)==1,(name,'h1')
  ids=[a['id'] for tag,a in nodes if 'id' in a];assert len(ids)==len(set(ids)),(name,'duplicate IDs')
  assert {a['data-language-option'] for tag,a in nodes if 'data-language-option' in a}=={'es','en'},(name,'ES/EN')
  assert any('floating-whatsapp' in a.get('class','') for tag,a in nodes),(name,'floating WhatsApp')
  for tag,a in nodes:
   if tag=='img':assert 'alt' in a,(name,'image alt')
   for key in ['href','src','poster']:
    if key not in a:continue
    u=urlsplit(a[key])
    if u.scheme or u.netloc:continue
    target=ROOT/unquote(u.path.lstrip('/')) if u.path else ROOT/name
    if target.is_dir():target=target/'index.html'
    assert target.is_file(),(name,'missing file',a[key])
    if u.fragment and target.suffix=='.html':assert any(aa.get('id')==unquote(u.fragment) for tt,aa in Page(target).nodes),(name,'anchor',a[key])
    if 'v' in parse_qs(u.query):assert parse_qs(u.query)['v']==[v],(name,'version')
 programs=json.loads((ROOT/'data/programs.json').read_text());assert len(programs)==14
 for p in programs:
  nodes=pages['programa-'+p['id']+'.html'].nodes
  if p['group']:
   assert any(a.get('href')=='https://chat.whatsapp.com/'+p['group'] for tag,a in nodes)
   assert (ROOT/'assets/qr'/ (p['id']+'.png')).is_file()
 for name in ['index.html','programa-futbol.html']:
  assert any(tag=='video' and 'muted' in a and 'controls' in a and 'autoplay' not in a for tag,a in pages[name].nodes)
 assert (ROOT/'assets/videos/Diez42-Futbol-Sala.mp4').stat().st_size<100*1024*1024
 assert not any('wst-beacon' in a.get('src','') for page in pages.values() for tag,a in page.nodes)
 print(f'Release QA passed: v{v}, {len(files)} public pages, 14 programs, ES/EN, QR links, local media and navigation.')
if __name__=='__main__':check()
