(() => {
  const root = document.documentElement;
  const storage = window.localStorage;
  const defaultLanguage = "es";
  const defaultLanguageMigrationKey = "diez42-default-lang-v72";
  const languageLabels = {
    en: "🇬🇧",
    es: "🇪🇸"
  };
  const themeIcons = {
    day: "☀",
    night: "☾"
  };
  const themeLabels = {
    en: {
      day: "Day",
      night: "Night"
    },
    es: {
      day: "Dia",
      night: "Noche"
    }
  };
  const translations = {
    "Skip to content": "Saltar al contenido",
    "Mock draft": "Borrador",
    "Five V1 homepage directions for Diez 42. Copy is adapted from public notes and should be verified before launch.": "Cinco direcciones de pagina principal para Diez 42. El texto esta adaptado de notas publicas y debe verificarse antes de publicar.",
    "Concept 1": "Concepto 1",
    "Concept 2": "Concepto 2",
    "Concept 3": "Concepto 3",
    "Concept 4": "Concepto 4",
    "Concept 5": "Concepto 5",
    "All concepts": "Todos los conceptos",
    "Back to selector": "Volver al selector",
    "No donation flow in V1": "Sin donaciones en V1",
    "Diez 42 concept board": "Panel de conceptos Diez 42",
    "Choose the first impression.": "Elige la primera impresion.",
    "These are five different main-page directions for a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, and community.": "Cinco direcciones de pagina principal para una asociacion de accion social en Malaga que sirve a inmigrantes, refugiados y otros recien llegados con apoyo practico, educacion y comunidad.",
    "1. Cup of Cold Water": "1. Vaso de Agua Fria",
    "2. Neighbor Hands": "2. Manos Vecinas",
    "3. Field Notes": "3. Notas de Campo",
    "4. Quiet Foundation": "4. Base Serena",
    "5. Open Table": "5. Mesa Abierta",
    "Warm, faith-rooted, direct. Best if the Matthew 10:42 origin should frame the work with migrants and refugees.": "Calido, directo y arraigado en la fe. Ideal si Mateo 10:42 debe enmarcar el trabajo con migrantes y refugiados.",
    "Practical and local. Best if the first screen should explain classes, food support, training, and family activities.": "Practico y local. Ideal si la primera pantalla debe explicar clases, apoyo alimentario, formacion y actividades familiares.",
    "Photo-journal style. Best if future updates will highlight programs, volunteers, partner projects, and participant stories.": "Estilo fotoperiodistico. Ideal si las actualizaciones futuras destacaran programas, voluntarios, proyectos aliados e historias de participantes.",
    "Calm and institutional. Best if the site should foreground the formal association identity and transparency.": "Sereno e institucional. Ideal si el sitio debe destacar la identidad formal de la asociacion y la transparencia.",
    "Welcoming and communal. Best if Diez42 should feel like a place of belonging for newcomers in Málaga.": "Acogedor y comunitario. Ideal si Diez42 debe sentirse como un lugar de pertenencia para recien llegados a Malaga.",
    "Málaga": "Malaga",
    "Warm": "Calido",
    "Refugee support": "Apoyo a refugiados",
    "Services": "Servicios",
    "Community center": "Centro comunitario",
    "Story-first": "Historias primero",
    "Programs": "Programas",
    "Partners": "Aliados",
    "Registry": "Registro",
    "Trust": "Confianza",
    "Structured": "Estructurado",
    "Welcome": "Acogida",
    "Integration": "Integracion",
    "Belonging": "Pertenencia",
    "Concept 1 of 5. Adapted around Diez42's Matthew 10:42 roots and Málaga social-action work.": "Concepto 1 de 5. Adaptado a las raices de Mateo 10:42 y al trabajo de accion social de Diez42 en Malaga.",
    "Matthew 10:42 in Málaga": "Mateo 10:42 en Malaga",
    "A cup of cold water for newcomers.": "Un vaso de agua fria para los recien llegados.",
    "Diez42 is a local social-action association serving immigrants, refugees, and other newcomers in Málaga through practical help, education, family activities, and community support.": "Diez42 es una asociacion local de accion social que sirve a inmigrantes, refugiados y otros recien llegados en Malaga mediante ayuda practica, educacion, actividades familiares y apoyo comunitario.",
    "Get in touch": "Contactar",
    "Read the mission": "Leer la mision",
    "Christian-rooted service, offered through practical welcome.": "Servicio de raiz cristiana ofrecido mediante una acogida practica.",
    "Why Diez 42": "Por que Diez 42",
    "The name points to practical mercy, not spectacle.": "El nombre apunta a misericordia practica, no a espectaculo.",
    "The name points to Matthew 10:42: the cup of cold water given in care. In Málaga, that spirit becomes language classes, job training, food support, children's activities, and steady help for families building a new life.": "El nombre apunta a Mateo 10:42: el vaso de agua fria dado con cuidado. En Malaga, ese espiritu se convierte en clases de idiomas, formacion laboral, apoyo alimentario, actividades infantiles y ayuda constante para familias que construyen una nueva vida.",
    "The verse behind the name": "El versiculo detras del nombre",
    "\"And whosoever shall give to drink unto one of these little ones a cup of cold water only in the name of a disciple, verily I say unto you, he shall in no wise lose his reward.\"": "\"Y cualquiera que diere á uno de estos pequeñitos un vaso de agua fría solamente, en nombre de discípulo, de cierto os digo, que no perderá su recompensa.\"",
    "Matthew 10:42, King James Version. Spanish shown from Reina-Valera 1909.": "Mateo 10:42, Reina-Valera 1909. Ingles disponible desde King James Version.",
    "KJV source": "Fuente KJV",
    "RV1909 source": "Fuente RV1909",
    "Welcome newcomers with dignity.": "Acoger a recien llegados con dignidad.",
    "Offer education, training, and activities.": "Ofrecer educacion, formacion y actividades.",
    "Build community around practical care.": "Construir comunidad alrededor del cuidado practico.",
    "What V1 can show": "Lo que puede mostrar V1",
    "Simple sections for real programs and photos.": "Secciones sencillas para programas y fotos reales.",
    "Food and Practical Help": "Alimentos y Ayuda Practica",
    "Education and Training": "Educacion y Formacion",
    "Community Presence": "Presencia Comunitaria",
    "Concept 2 of 5. Adapted around practical support, classes, training, and family activities.": "Concepto 2 de 5. Adaptado al apoyo practico, clases, formacion y actividades familiares.",
    "Social action in Málaga": "Accion social en Malaga",
    "Practical support for starting again.": "Apoyo practico para empezar de nuevo.",
    "Diez42 helps immigrants, refugees, and other newcomers integrate through language classes, job training, food support, parent and family activities, exercise, art, and community connection.": "Diez42 ayuda a inmigrantes, refugiados y otros recien llegados a integrarse mediante clases de idiomas, formacion laboral, apoyo alimentario, actividades para padres y familias, ejercicio, arte y conexion comunitaria.",
    "See how we help": "Ver como ayudamos",
    "Contact us": "Contactanos",
    "How it works": "Como funciona",
    "Connect with Diez42 Málaga.": "Conecta con Diez42 Malaga.",
    "Contact": "Contacto",
    "Stories": "Historias",
    "Mission": "Mision",
    "Work": "Trabajo",
    "About": "Acerca de",
    "Transparency": "Transparencia",
    "Rhythm": "Ritmo",
    "Help": "Ayuda",
    "Process": "Proceso",
    "Learn more": "Saber mas",
    "Reach out": "Contactar",
    "Contact Diez 42": "Contactar con Diez 42",
    "Compare concepts": "Comparar conceptos",
    "Concept 3 of 5. Adapted around real program updates, volunteers, partners, and participant stories.": "Concepto 3 de 5. Adaptado a actualizaciones reales de programas, voluntarios, aliados e historias de participantes.",
    "Field notes from Diez42 Málaga": "Notas de campo de Diez42 Malaga",
    "Stories from a community center for newcomers.": "Historias de un centro comunitario para recien llegados.",
    "This direction treats the homepage like a living notebook: food bank updates, language activities, training programs, partner projects, and stories from immigrants and refugees finding community in Málaga.": "Esta direccion trata la pagina principal como un cuaderno vivo: actualizaciones del banco de alimentos, actividades de idiomas, programas de formacion, proyectos aliados e historias de inmigrantes y refugiados encontrando comunidad en Malaga.",
    "Read latest notes": "Leer ultimas notas",
    "Share a story": "Compartir una historia",
    "Photo-led pages can grow with every class, activity, and project.": "Las paginas guiadas por fotos pueden crecer con cada clase, actividad y proyecto.",
    "Latest notes": "Ultimas notas",
    "Use real updates instead of big claims.": "Usar actualizaciones reales en lugar de grandes promesas.",
    "Food support and family connection": "Apoyo alimentario y conexion familiar",
    "A short update can show how food distribution, conversation, and practical guidance support refugee and migrant families.": "Una breve actualizacion puede mostrar como la distribucion de alimentos, la conversacion y la orientacion practica apoyan a familias refugiadas y migrantes.",
    "Food bank / community center note": "Nota de banco de alimentos / centro comunitario",
    "Classes that open doors": "Clases que abren puertas",
    "Language practice, children's English activities, job training, and parent programs can each become simple photo stories.": "La practica de idiomas, actividades de ingles para ninos, formacion laboral y programas para padres pueden convertirse en historias fotograficas sencillas.",
    "Education and training note": "Nota de educacion y formacion",
    "Women making, earning, and leading": "Mujeres creando, generando ingresos y liderando",
    "The Elevāt artisan/co-op project gives women from different countries a way to make bracelets, scarves, accessories, and income for their families.": "El proyecto artesanal/cooperativo con Elevat ofrece a mujeres de distintos paises una forma de hacer pulseras, bufandas, accesorios e ingresos para sus familias.",
    "Partner project note": "Nota de proyecto aliado",
    "Mission through documented work.": "Mision a traves de trabajo documentado.",
    "The editorial approach is good if Diez42 can share real photos and short updates over time.": "El enfoque editorial funciona bien si Diez42 puede compartir fotos reales y breves actualizaciones con el tiempo.",
    "Concept 4 of 5. Adapted around the formal Málaga association identity and transparency.": "Concepto 4 de 5. Adaptado a la identidad formal de la asociacion en Malaga y la transparencia.",
    "Asociación para el Desarrollo e Integración Diez 42": "Asociacion para el Desarrollo e Integracion Diez 42",
    "Social action, clearly explained.": "Accion social, explicada con claridad.",
    "Diez42 is registered in Málaga as a social-action association with provincial scope, serving immigrants, refugees, and other newcomers through assistance, education, information, culture, training, and the promotion of the common good.": "Diez42 esta registrada en Malaga como asociacion de accion social de ambito provincial, sirviendo a inmigrantes, refugiados y otros recien llegados mediante asistencia, educacion, informacion, cultura, formacion y promocion del bien comun.",
    "About the work": "Sobre el trabajo",
    "How we operate": "Como operamos",
    "A small charity built for accountable service": "Una pequena entidad construida para servir con responsabilidad",
    "Practical care, clearly explained.": "Cuidado practico, explicado con claridad.",
    "Trust first, emotion second.": "Confianza primero, emocion despues.",
    "Formal name": "Nombre formal",
    "Registry notes": "Datos de registro",
    "Public presence": "Presencia publica",
    "What this site can say now": "Lo que este sitio puede decir ahora",
    "What can wait for V2": "Lo que puede esperar a V2",
    "Concept 5 of 5. Adapted around welcome, belonging, family activities, and community support.": "Concepto 5 de 5. Adaptado a acogida, pertenencia, actividades familiares y apoyo comunitario.",
    "A place at the table in Málaga": "Un lugar en la mesa en Malaga",
    "Welcome that becomes belonging.": "Acogida que se convierte en pertenencia.",
    "Diez42 is a community center for immigrants, refugees, and newcomers: a place for food support, classes, family activities, art, exercise, and the steady work of integration.": "Diez42 es un centro comunitario para inmigrantes, refugiados y recien llegados: un lugar para apoyo alimentario, clases, actividades familiares, arte, ejercicio y el trabajo constante de integracion.",
    "Less institution, more invitation.": "Menos institucion, mas invitacion.",
    "This option is softer and more relational. It works if Diez42 should feel like an open door for families who are new to Málaga and looking for support, friendship, and direction.": "Esta opcion es mas suave y relacional. Funciona si Diez42 debe sentirse como una puerta abierta para familias nuevas en Malaga que buscan apoyo, amistad y orientacion.",
    "Possible homepage rhythm": "Ritmo posible de la pagina principal",
    "Warm sections, no heavy machinery.": "Secciones calidas, sin maquinaria pesada.",
    "Gather": "Reunir",
    "Notice": "Observar",
    "Respond": "Responder",
    "An open door needs clear contact details.": "Una puerta abierta necesita datos de contacto claros.",
    "Day": "Dia",
    "Night": "Noche"
  };

  const applyLanguage = (lang) => {
    const next = lang === "es" ? "es" : "en";
    root.lang = next;
    storage.setItem("diez42-lang", next);
    document.querySelectorAll("body *").forEach((element) => {
      if (element.matches("script, style")) return;
      if (element.children.length > 0) return;
      if (!element.dataset.autoEn) element.dataset.autoEn = element.textContent.trim();
      const en = element.dataset.en || element.dataset.autoEn;
      const es = element.dataset.es || translations[en];
      if (!es) return;
      element.textContent = next === "es" ? es : en;
    });
    document.querySelectorAll("[data-lang-control]").forEach((button) => {
      const isActive = button.dataset.langControl === next;
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.textContent = languageLabels[next];
      button.setAttribute("aria-label", next === "es" ? "Idioma: espanol" : "Language: English");
    });
    updateThemeToggle(root.dataset.theme || "day", next);
  };

  const updateThemeToggle = (theme, lang = root.lang === "es" ? "es" : "en") => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = themeIcons[theme];
      button.setAttribute("aria-label", lang === "es" ? `Tema: ${themeLabels.es[theme].toLowerCase()}` : `Theme: ${themeLabels.en[theme]}`);
    });
  };

  const applyTheme = (theme) => {
    const next = theme === "night" ? "night" : "day";
    root.dataset.theme = next;
    storage.setItem("diez42-theme", next);
    document.querySelectorAll("[data-theme-control]").forEach((button) => {
      const isActive = button.dataset.themeControl === next;
      button.setAttribute("aria-pressed", String(isActive));
    });
    updateThemeToggle(next);
  };

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const langToggle = target?.closest("[data-lang-toggle]");
    if (langToggle) applyLanguage(root.lang === "es" ? "en" : "es");

    const themeToggle = target?.closest("[data-theme-toggle]");
    if (themeToggle) applyTheme(root.dataset.theme === "night" ? "day" : "night");

    const langButton = target?.closest("[data-lang-control]");
    if (langButton) applyLanguage(langButton.dataset.langControl);

    const themeButton = target?.closest("[data-theme-control]");
    if (themeButton) applyTheme(themeButton.dataset.themeControl);
  });

  const storedLanguage = storage.getItem("diez42-lang");
  if (storedLanguage === "en" && !storage.getItem(defaultLanguageMigrationKey)) {
    storage.removeItem("diez42-lang");
    storage.setItem(defaultLanguageMigrationKey, "1");
  }
  if (!storage.getItem(defaultLanguageMigrationKey)) {
    storage.setItem(defaultLanguageMigrationKey, "1");
  }

  applyTheme(storage.getItem("diez42-theme") || "day");
  applyLanguage(storage.getItem("diez42-lang") || defaultLanguage);
})();
