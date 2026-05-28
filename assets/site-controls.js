(() => {
  const root = document.documentElement;
  const storage = window.localStorage;
  const defaultLanguage = "es";
  const defaultLanguageMigrationKey = "diez42-default-lang-v72";
  const supportedLanguages = ["es", "en", "pt-BR", "it", "fr", "uk", "ru", "lt", "be", "ar-MA", "ar-DZ"];
  const languageLabels = {
    en: "🇬🇧",
    es: "🇪🇸",
    "pt-BR": "🇧🇷",
    it: "🇮🇹",
    fr: "🇫🇷",
    uk: "🇺🇦",
    ru: "🇷🇺",
    lt: "🇱🇹",
    be: "🇧🇾",
    "ar-MA": "🇲🇦",
    "ar-DZ": "🇩🇿"
  };
  const languageNames = {
    en: "English",
    es: "Español",
    "pt-BR": "Português (Brasil)",
    it: "Italiano",
    fr: "Français",
    uk: "Українська",
    ru: "Русский",
    lt: "Lietuvių",
    be: "Беларуская",
    "ar-MA": "العربية (المغرب)",
    "ar-DZ": "العربية (الجزائر)"
  };
  const languageSelectLabels = {
    en: "Language selector",
    es: "Selector de idioma",
    "pt-BR": "Seletor de idioma",
    it: "Selettore lingua",
    fr: "Sélecteur de langue",
    uk: "Вибір мови",
    ru: "Выбор языка",
    lt: "Kalbos pasirinkimas",
    be: "Выбар мовы",
    "ar-MA": "اختيار اللغة",
    "ar-DZ": "اختيار اللغة"
  };
  const languageDatasetKeys = {
    en: "en",
    es: "es",
    "pt-BR": "ptBr",
    it: "it",
    fr: "fr",
    uk: "uk",
    ru: "ru",
    lt: "lt",
    be: "be",
    "ar-MA": "arMa",
    "ar-DZ": "arDz"
  };
  const pageTitles = {
    en: "Diez42 | Social action in Malaga",
    es: "Diez42 | Accion social en Malaga",
    "pt-BR": "Diez42 | Ação social em Málaga",
    it: "Diez42 | Azione sociale a Malaga",
    fr: "Diez42 | Action sociale à Malaga",
    uk: "Diez42 | Соціальна дія в Малазі",
    ru: "Diez42 | Социальная помощь в Малаге",
    lt: "Diez42 | Socialinė veikla Malagoje",
    be: "Diez42 | Сацыяльная дапамога ў Малазе",
    "ar-MA": "Diez42 | العمل الاجتماعي في مالقة",
    "ar-DZ": "Diez42 | العمل الاجتماعي في مالقة"
  };
  const languageDirections = {
    "ar-MA": "rtl",
    "ar-DZ": "rtl"
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
    },
    "pt-BR": {
      day: "Dia",
      night: "Noite"
    },
    it: {
      day: "Giorno",
      night: "Notte"
    },
    fr: {
      day: "Jour",
      night: "Nuit"
    },
    uk: {
      day: "День",
      night: "Ніч"
    },
    ru: {
      day: "День",
      night: "Ночь"
    },
    lt: {
      day: "Diena",
      night: "Naktis"
    },
    be: {
      day: "Дзень",
      night: "Ноч"
    },
    "ar-MA": {
      day: "نهار",
      night: "ليل"
    },
    "ar-DZ": {
      day: "نهار",
      night: "ليل"
    }
  };
  const arabicTranslations = {
    "Skip to content": "الانتقال إلى المحتوى",
    "About": "من نحن",
    "Transparency": "الشفافية",
    "Contact": "اتصال",
    "Welcome and practical help in Málaga.": "ترحيب ومساعدة عملية في مالقة.",
    "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "ترافق Diez42 المهاجرين واللاجئين والوافدين الجدد عبر دعم غذائي، دروس، أنشطة عائلية، تدريب، وروابط مجتمعية.",
    "Contact Diez42": "تواصل مع Diez42",
    "See the work": "شاهد العمل",
    "AI placeholder image for direction only; not real Diez42 people.": "صورة مؤقتة مولدة بالذكاء الاصطناعي للاتجاه البصري فقط؛ لا تظهر أشخاصا حقيقيين من Diez42.",
    "Support that starts with welcome.": "دعم يبدأ بالترحيب.",
    "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "تخدم Diez42 الوافدين الجدد في مالقة عبر دعم عملي، تعليم، تدريب، أنشطة عائلية، دعم غذائي، وروابط مجتمعية.",
    "Practical support": "دعم عملي",
    "Food support, orientation, and everyday help for families finding their footing in Málaga.": "دعم غذائي، إرشاد، ومساعدة يومية للعائلات التي تبدأ الاستقرار في مالقة.",
    "Classes and training": "دروس وتدريب",
    "Language practice, job training, children's activities, and learning paths that open doors.": "ممارسة اللغة، تدريب مهني، أنشطة للأطفال، ومسارات تعلم تفتح الأبواب.",
    "Community connection": "رابط مجتمعي",
    "A local place for relationship, encouragement, family activities, and belonging.": "مكان محلي للعلاقات، التشجيع، الأنشطة العائلية، والشعور بالانتماء.",
    "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "صور البرامج الحالية مؤقتة ومولدة بالذكاء الاصطناعي ولا تظهر أشخاصا حقيقيين من Diez42.",
    "Formal name": "الاسم الرسمي",
    "Registry notes": "ملاحظات التسجيل",
    "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "مسجلة في 27 أبريل 2021، CIF G93613776، بنطاق إقليمي في مالقة.",
    "Public presence": "الحضور العام",
    "Social channels appear under diez42malaga / Diez42Malaga.": "تظهر القنوات الاجتماعية باسم diez42malaga / Diez42Malaga.",
    "What this site can say now": "ما يمكن لهذا الموقع قوله الآن",
    "Formal association name and CIF": "الاسم الرسمي للجمعية ورقم CIF",
    "Málaga district and provincial scope": "منطقة مالقة والنطاق الإقليمي",
    "Social-action purpose and public aims": "غرض العمل الاجتماعي والأهداف العامة",
    "How newcomers, volunteers, and partners can contact the team": "كيف يمكن للوافدين الجدد والمتطوعين والشركاء التواصل مع الفريق",
    "What can wait for V2": "ما يمكن أن ينتظر النسخة الثانية",
    "Donation flow": "مسار التبرعات",
    "Receipts and tax language": "الإيصالات والصياغة الضريبية",
    "Public reporting": "تقارير عامة",
    "Formal partner intake forms": "استمارات رسمية للشركاء",
    "Clear next step. No clutter.": "خطوة تالية واضحة. بلا ازدحام.",
    "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "العنوان البريدي: Avenida de Andalucía 27, 29006 Málaga",
    "Phone number: +34 600 33 97 94": "رقم الهاتف: +34 600 33 97 94",
    "Privacy": "الخصوصية",
    "Privacy Policy": "سياسة الخصوصية",
    "Diez42 | Privacy Policy": "Diez42 | سياسة الخصوصية",
    "Home": "الرئيسية",
    "Terms": "الشروط",
    "Terms of Service": "شروط الخدمة",
    "Diez42 | Terms of Service": "Diez42 | شروط الخدمة",
    "Data deletion": "حذف البيانات",
    "Data Deletion": "حذف البيانات",
    "Data Deletion Instructions": "تعليمات حذف البيانات",
    "Diez42 | Data Deletion": "Diez42 | حذف البيانات"
  };
  const translations = {
    es: {
      "Skip to content": "Saltar al contenido",
      "Mock draft": "Borrador",
      "V1 homepage draft for Diez42. Copy is adapted from public notes and should be verified before launch.": "Borrador de pagina principal V1 para Diez42. El texto esta adaptado de notas publicas y debe verificarse antes de publicar.",
      "Five V1 homepage directions for Diez42. Copy is adapted from public notes and should be verified before launch.": "Cinco direcciones de pagina principal para Diez42. El texto esta adaptado de notas publicas y debe verificarse antes de publicar.",
      "Concept 1": "Concepto 1",
      "Concept 2": "Concepto 2",
      "Concept 3": "Concepto 3",
      "Concept 5": "Concepto 5",
      "All concepts": "Todos los conceptos",
      "Diez42 concept board": "Panel de conceptos Diez42",
      "Choose the first impression.": "Elige la primera impresion.",
      "Archived concepts": "Conceptos archivados",
      "Open selected concept": "Abrir concepto elegido",
      "View archived concepts": "Ver conceptos archivados",
      "Selected": "Elegido",
      "Archive": "Archivo",
      "Reference directions": "Direcciones de referencia",
      "These earlier concepts remain available for comparison, language, sections, and visual ideas, but they are no longer active candidates.": "Estos conceptos anteriores siguen disponibles para comparar lenguaje, secciones e ideas visuales, pero ya no son candidatos activos.",
      "Archive: 1": "Archivo: 1",
      "Archive: 2": "Archivo: 2",
      "Archive: 3": "Archivo: 3",
      "Archive: 5": "Archivo: 5",
      "These are five different main-page directions for a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, and community.": "Cinco direcciones de pagina principal para una asociacion de accion social en Malaga que sirve a inmigrantes, refugiados y otros recien llegados con apoyo practico, educacion y comunidad.",
      "1. Cup of Cold Water": "1. Vaso de Agua Fria",
      "2. Neighbor Hands": "2. Manos Vecinas",
      "3. Field Notes": "3. Notas de Campo",
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
      "Why Diez42": "Por que Diez42",
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
      "Contact Diez42": "Contactar con Diez42",
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
      "Asociación para el Desarrollo e Integración Diez42": "Asociacion para el Desarrollo e Integracion Diez42",
      "Social action, clearly explained.": "Accion social, explicada con claridad.",
      "Welcome and practical help in Málaga.": "Acogida y ayuda practica en Malaga.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 acompaña a inmigrantes, refugiados y otros recien llegados mediante apoyo alimentario, clases, actividades familiares, formacion y conexion comunitaria.",
      "AI placeholder image for direction only; not real Diez42 people.": "Imagen de marcador generada con IA solo para direccion visual; no son personas reales de Diez42.",
      "Diez42 is registered in Málaga as a social-action association with provincial scope, serving immigrants, refugees, and other newcomers through assistance, education, information, culture, training, and the promotion of the common good.": "Diez42 esta registrada en Malaga como asociacion de accion social de ambito provincial, sirviendo a inmigrantes, refugiados y otros recien llegados mediante asistencia, educacion, informacion, cultura, formacion y promocion del bien comun.",
      "About the work": "Sobre el trabajo",
      "How we operate": "Como operamos",
      "See the work": "Ver el trabajo",
      "A small charity built for accountable service": "Una pequena entidad construida para servir con responsabilidad",
      "Practical care, clearly explained.": "Cuidado practico, explicado con claridad.",
      "Trust first, emotion second.": "Confianza primero, emocion despues.",
      "Support that starts with welcome.": "Apoyo que empieza con acogida.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection. This first version keeps the message clear while final copy, contact details, and real photos are confirmed.": "Diez42 sirve a recien llegados en Malaga mediante apoyo practico, educacion, formacion, actividades familiares, apoyo alimentario y conexion comunitaria. Esta primera version mantiene el mensaje claro mientras se confirman el texto final, los datos de contacto y las fotos reales.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 sirve a recien llegados en Malaga mediante apoyo practico, educacion, formacion, actividades familiares, apoyo alimentario y conexion comunitaria.",
      "Practical support": "Apoyo practico",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Apoyo alimentario, orientacion y ayuda cotidiana para familias que empiezan de nuevo en Malaga.",
      "Classes and training": "Clases y formacion",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Practica de idiomas, formacion laboral, actividades infantiles y caminos de aprendizaje que abren puertas.",
      "Community connection": "Conexion comunitaria",
      "A local place for relationship, encouragement, family activities, and belonging.": "Un lugar local para relacion, animo, actividades familiares y pertenencia.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Las fotos actuales de programas son marcadores generados con IA y no muestran personas reales de Diez42.",
      "Formal name": "Nombre formal",
      "Registry notes": "Datos de registro",
      "Public presence": "Presencia publica",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Registrada el 27 de abril de 2021, CIF G93613776, ambito provincial de Malaga.",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Los canales sociales aparecen como diez42malaga / Diez42Malaga.",
      "What this site can say now": "Lo que este sitio puede decir ahora",
      "Formal association name and CIF": "Nombre formal de la asociacion y CIF",
      "What can wait for V2": "Lo que puede esperar a V2",
      "Málaga district and provincial scope": "Distrito de Malaga y ambito provincial",
      "Social-action purpose and public aims": "Objeto social y fines publicos",
      "How newcomers, volunteers, and partners can contact the team": "Como pueden contactar recien llegados, voluntarios y aliados",
      "Donation flow": "Flujo de donaciones",
      "Receipts and tax language": "Recibos y lenguaje fiscal",
      "Public reporting": "Informes publicos",
      "Formal partner intake forms": "Formularios formales para aliados",
      "Clear next step. No clutter.": "Siguiente paso claro. Sin ruido.",
      "Contact Diez42 by WhatsApp or phone. Social links and any additional contact details can be added once confirmed.": "Contacta con Diez42 por WhatsApp o telefono. Los enlaces sociales y otros datos de contacto se pueden anadir cuando esten confirmados.",
      "Contact Diez42 by WhatsApp, phone, Instagram, or Facebook. The mailing address is available below.": "Contacta con Diez42 por WhatsApp, telefono, Instagram o Facebook. La direccion postal aparece abajo.",
      "Mailing address:": "Direccion postal:",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Direccion postal: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Numero de telefono: +34 600 33 97 94",
      "Privacy": "Privacidad",
      "Privacy Policy": "Politica de privacidad",
      "Diez42 | Privacy Policy": "Diez42 | Politica de privacidad",
      "Home": "Inicio",
      "Terms": "Terminos",
      "Terms of Service": "Terminos de servicio",
      "Diez42 | Terms of Service": "Diez42 | Terminos de servicio",
      "Data deletion": "Eliminacion de datos",
      "Data Deletion": "Eliminacion de datos",
      "Data Deletion Instructions": "Instrucciones de eliminacion de datos",
      "Diez42 | Data Deletion": "Diez42 | Eliminacion de datos",
      "WhatsApp": "WhatsApp",
      "Instagram": "Instagram",
      "Facebook": "Facebook",
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
    },
    fr: {
      "Skip to content": "Aller au contenu",
      "About": "À propos",
      "Transparency": "Transparence",
      "Contact": "Contact",
      "Welcome and practical help in Málaga.": "Accueil et aide pratique à Malaga.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 accompagne les personnes immigrées, réfugiées et nouvellement arrivées avec de l'aide alimentaire, des cours, des activités familiales, de la formation et des liens communautaires.",
      "Contact Diez42": "Contacter Diez42",
      "See the work": "Voir l'action",
      "AI placeholder image for direction only; not real Diez42 people.": "Image de remplacement générée par IA pour l'orientation visuelle ; elle ne montre pas de vraies personnes de Diez42.",
      "Support that starts with welcome.": "Un soutien qui commence par l'accueil.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 sert les nouveaux arrivants à Malaga par un soutien pratique, l'éducation, la formation, des activités familiales, l'aide alimentaire et le lien communautaire.",
      "Practical support": "Soutien pratique",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Aide alimentaire, orientation et soutien quotidien pour les familles qui prennent leurs repères à Malaga.",
      "Classes and training": "Cours et formation",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Pratique des langues, formation professionnelle, activités pour enfants et parcours d'apprentissage qui ouvrent des portes.",
      "Community connection": "Lien communautaire",
      "A local place for relationship, encouragement, family activities, and belonging.": "Un lieu local pour les relations, l'encouragement, les activités familiales et l'appartenance.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Les photos actuelles des programmes sont des images de remplacement générées par IA et ne représentent pas de vraies personnes de Diez42.",
      "Formal name": "Nom officiel",
      "Registry notes": "Notes d'enregistrement",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Enregistrée le 27 avril 2021, CIF G93613776, champ provincial de Malaga.",
      "Public presence": "Présence publique",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Les réseaux sociaux semblent utiliser diez42malaga / Diez42Malaga.",
      "What this site can say now": "Ce que ce site peut dire maintenant",
      "Formal association name and CIF": "Nom officiel de l'association et CIF",
      "Málaga district and provincial scope": "District de Malaga et champ provincial",
      "Social-action purpose and public aims": "Objet d'action sociale et objectifs publics",
      "How newcomers, volunteers, and partners can contact the team": "Comment les nouveaux arrivants, bénévoles et partenaires peuvent contacter l'équipe",
      "What can wait for V2": "Ce qui peut attendre la V2",
      "Donation flow": "Parcours de don",
      "Receipts and tax language": "Reçus et mentions fiscales",
      "Public reporting": "Rapports publics",
      "Formal partner intake forms": "Formulaires officiels pour partenaires",
      "Clear next step. No clutter.": "Une prochaine étape claire. Sans encombrement.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Adresse postale : Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Téléphone : +34 600 33 97 94",
      "Privacy": "Confidentialité",
      "Privacy Policy": "Politique de confidentialité",
      "Diez42 | Privacy Policy": "Diez42 | Politique de confidentialité",
      "Home": "Accueil",
      "Terms": "Conditions",
      "Terms of Service": "Conditions d'utilisation",
      "Diez42 | Terms of Service": "Diez42 | Conditions d'utilisation",
      "Data deletion": "Suppression des données",
      "Data Deletion": "Suppression des données",
      "Data Deletion Instructions": "Instructions de suppression des données",
      "Diez42 | Data Deletion": "Diez42 | Suppression des données"
    },
    "pt-BR": {
      "Skip to content": "Pular para o conteúdo",
      "About": "Sobre",
      "Transparency": "Transparência",
      "Contact": "Contato",
      "Welcome and practical help in Málaga.": "Acolhimento e ajuda prática em Málaga.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "A Diez42 caminha com imigrantes, refugiados e outros recém-chegados por meio de apoio alimentar, aulas, atividades familiares, formação e conexão comunitária.",
      "Contact Diez42": "Fale com a Diez42",
      "See the work": "Ver o trabalho",
      "AI placeholder image for direction only; not real Diez42 people.": "Imagem temporária gerada por IA apenas para direção visual; não mostra pessoas reais da Diez42.",
      "Support that starts with welcome.": "Apoio que começa com acolhimento.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "A Diez42 atende recém-chegados em Málaga com apoio prático, educação, formação, atividades familiares, apoio alimentar e conexão comunitária.",
      "Practical support": "Apoio prático",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Apoio alimentar, orientação e ajuda cotidiana para famílias que estão se estabelecendo em Málaga.",
      "Classes and training": "Aulas e formação",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Prática de idiomas, formação profissional, atividades infantis e caminhos de aprendizagem que abrem portas.",
      "Community connection": "Conexão comunitária",
      "A local place for relationship, encouragement, family activities, and belonging.": "Um espaço local para relacionamento, encorajamento, atividades familiares e pertencimento.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "As fotos atuais dos programas são imagens temporárias geradas por IA e não retratam pessoas reais da Diez42.",
      "Formal name": "Nome formal",
      "Registry notes": "Dados de registro",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Registrada em 27 de abril de 2021, CIF G93613776, âmbito provincial de Málaga.",
      "Public presence": "Presença pública",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Os canais sociais aparecem como diez42malaga / Diez42Malaga.",
      "What this site can say now": "O que este site pode dizer agora",
      "Formal association name and CIF": "Nome formal da associação e CIF",
      "Málaga district and provincial scope": "Distrito de Málaga e âmbito provincial",
      "Social-action purpose and public aims": "Finalidade de ação social e objetivos públicos",
      "How newcomers, volunteers, and partners can contact the team": "Como recém-chegados, voluntários e parceiros podem falar com a equipe",
      "What can wait for V2": "O que pode esperar pela V2",
      "Donation flow": "Fluxo de doações",
      "Receipts and tax language": "Recibos e linguagem fiscal",
      "Public reporting": "Relatórios públicos",
      "Formal partner intake forms": "Formulários formais para parceiros",
      "Clear next step. No clutter.": "Próximo passo claro. Sem excesso.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Endereço postal: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Telefone: +34 600 33 97 94",
      "Privacy": "Privacidade",
      "Privacy Policy": "Política de privacidade",
      "Diez42 | Privacy Policy": "Diez42 | Política de privacidade",
      "Home": "Início",
      "Terms": "Termos",
      "Terms of Service": "Termos de serviço",
      "Diez42 | Terms of Service": "Diez42 | Termos de serviço",
      "Data deletion": "Exclusão de dados",
      "Data Deletion": "Exclusão de dados",
      "Data Deletion Instructions": "Instruções de exclusão de dados",
      "Diez42 | Data Deletion": "Diez42 | Exclusão de dados"
    },
    it: {
      "Skip to content": "Vai al contenuto",
      "About": "Chi siamo",
      "Transparency": "Trasparenza",
      "Contact": "Contatto",
      "Welcome and practical help in Málaga.": "Accoglienza e aiuto pratico a Malaga.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 accompagna immigrati, rifugiati e altre persone appena arrivate con sostegno alimentare, corsi, attività per famiglie, formazione e connessione comunitaria.",
      "Contact Diez42": "Contatta Diez42",
      "See the work": "Vedi il lavoro",
      "AI placeholder image for direction only; not real Diez42 people.": "Immagine temporanea generata con IA solo per orientamento visivo; non mostra persone reali di Diez42.",
      "Support that starts with welcome.": "Sostegno che inizia con l'accoglienza.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 serve le persone appena arrivate a Malaga con sostegno pratico, educazione, formazione, attività per famiglie, sostegno alimentare e connessione comunitaria.",
      "Practical support": "Sostegno pratico",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Sostegno alimentare, orientamento e aiuto quotidiano per famiglie che stanno trovando stabilità a Malaga.",
      "Classes and training": "Corsi e formazione",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Pratica linguistica, formazione professionale, attività per bambini e percorsi di apprendimento che aprono porte.",
      "Community connection": "Connessione comunitaria",
      "A local place for relationship, encouragement, family activities, and belonging.": "Uno spazio locale per relazioni, incoraggiamento, attività familiari e appartenenza.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Le foto attuali dei programmi sono immagini temporanee generate con IA e non raffigurano persone reali di Diez42.",
      "Formal name": "Nome ufficiale",
      "Registry notes": "Dati di registrazione",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Registrata il 27 aprile 2021, CIF G93613776, ambito provinciale di Malaga.",
      "Public presence": "Presenza pubblica",
      "Social channels appear under diez42malaga / Diez42Malaga.": "I canali social appaiono come diez42malaga / Diez42Malaga.",
      "What this site can say now": "Cosa questo sito può dire ora",
      "Formal association name and CIF": "Nome ufficiale dell'associazione e CIF",
      "Málaga district and provincial scope": "Distretto di Malaga e ambito provinciale",
      "Social-action purpose and public aims": "Finalità di azione sociale e obiettivi pubblici",
      "How newcomers, volunteers, and partners can contact the team": "Come nuovi arrivati, volontari e partner possono contattare il team",
      "What can wait for V2": "Cosa può aspettare la V2",
      "Donation flow": "Flusso delle donazioni",
      "Receipts and tax language": "Ricevute e linguaggio fiscale",
      "Public reporting": "Rendicontazione pubblica",
      "Formal partner intake forms": "Moduli formali per partner",
      "Clear next step. No clutter.": "Prossimo passo chiaro. Senza confusione.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Indirizzo postale: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Telefono: +34 600 33 97 94",
      "Privacy": "Privacy",
      "Privacy Policy": "Informativa privacy",
      "Diez42 | Privacy Policy": "Diez42 | Informativa privacy",
      "Home": "Home",
      "Terms": "Termini",
      "Terms of Service": "Termini di servizio",
      "Diez42 | Terms of Service": "Diez42 | Termini di servizio",
      "Data deletion": "Eliminazione dati",
      "Data Deletion": "Eliminazione dati",
      "Data Deletion Instructions": "Istruzioni per eliminare i dati",
      "Diez42 | Data Deletion": "Diez42 | Eliminazione dei dati"
    },
    uk: {
      "Skip to content": "Перейти до вмісту",
      "About": "Про нас",
      "Transparency": "Прозорість",
      "Contact": "Контакт",
      "Welcome and practical help in Málaga.": "Гостинність і практична допомога в Малазі.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 супроводжує іммігрантів, біженців та інших новоприбулих через продовольчу підтримку, заняття, сімейні активності, навчання та зв'язок із громадою.",
      "Contact Diez42": "Зв'язатися з Diez42",
      "See the work": "Переглянути роботу",
      "AI placeholder image for direction only; not real Diez42 people.": "Зображення-заповнювач, створене ШІ, лише для візуального напряму; це не реальні люди Diez42.",
      "Support that starts with welcome.": "Підтримка, що починається з гостинності.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 служить новоприбулим у Малазі через практичну підтримку, освіту, навчання, сімейні активності, продовольчу допомогу та зв'язок із громадою.",
      "Practical support": "Практична підтримка",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Продовольча підтримка, орієнтація та щоденна допомога сім'ям, які облаштовуються в Малазі.",
      "Classes and training": "Заняття та навчання",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Мовна практика, професійне навчання, дитячі активності та освітні шляхи, що відкривають двері.",
      "Community connection": "Зв'язок із громадою",
      "A local place for relationship, encouragement, family activities, and belonging.": "Місцевий простір для стосунків, підтримки, сімейних активностей і відчуття приналежності.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Поточні фото програм є зображеннями-заповнювачами, створеними ШІ, і не зображають реальних людей Diez42.",
      "Formal name": "Офіційна назва",
      "Registry notes": "Реєстраційні відомості",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Зареєстрована 27 квітня 2021 року, CIF G93613776, провінційний масштаб Малаги.",
      "Public presence": "Публічна присутність",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Соціальні канали, схоже, використовують diez42malaga / Diez42Malaga.",
      "What this site can say now": "Що цей сайт може сказати зараз",
      "Formal association name and CIF": "Офіційна назва асоціації та CIF",
      "Málaga district and provincial scope": "Район Малаги та провінційний масштаб",
      "Social-action purpose and public aims": "Соціальна мета та публічні цілі",
      "How newcomers, volunteers, and partners can contact the team": "Як новоприбулі, волонтери та партнери можуть зв'язатися з командою",
      "What can wait for V2": "Що може зачекати до V2",
      "Donation flow": "Процес пожертв",
      "Receipts and tax language": "Квитанції та податкова інформація",
      "Public reporting": "Публічна звітність",
      "Formal partner intake forms": "Офіційні форми для партнерів",
      "Clear next step. No clutter.": "Чіткий наступний крок. Без зайвого.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Поштова адреса: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Номер телефону: +34 600 33 97 94",
      "Privacy": "Приватність",
      "Privacy Policy": "Політика приватності",
      "Diez42 | Privacy Policy": "Diez42 | Політика приватності",
      "Home": "Головна",
      "Terms": "Умови",
      "Terms of Service": "Умови користування",
      "Diez42 | Terms of Service": "Diez42 | Умови користування",
      "Data deletion": "Видалення даних",
      "Data Deletion": "Видалення даних",
      "Data Deletion Instructions": "Інструкції з видалення даних",
      "Diez42 | Data Deletion": "Diez42 | Видалення даних"
    },
    ru: {
      "Skip to content": "Перейти к содержанию",
      "About": "О нас",
      "Transparency": "Прозрачность",
      "Contact": "Контакты",
      "Welcome and practical help in Málaga.": "Теплый прием и практическая помощь в Малаге.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 сопровождает иммигрантов, беженцев и других новоприбывших через продовольственную поддержку, занятия, семейные мероприятия, обучение и связь с сообществом.",
      "Contact Diez42": "Связаться с Diez42",
      "See the work": "Посмотреть работу",
      "AI placeholder image for direction only; not real Diez42 people.": "Изображение-заполнитель, созданное ИИ, только для визуального направления; это не реальные люди Diez42.",
      "Support that starts with welcome.": "Поддержка, которая начинается с приветствия.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 служит новоприбывшим в Малаге через практическую поддержку, образование, обучение, семейные мероприятия, продовольственную помощь и связь с сообществом.",
      "Practical support": "Практическая поддержка",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Продовольственная помощь, ориентация и повседневная поддержка для семей, которые обустраиваются в Малаге.",
      "Classes and training": "Занятия и обучение",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Языковая практика, профессиональное обучение, детские мероприятия и учебные пути, открывающие двери.",
      "Community connection": "Связь с сообществом",
      "A local place for relationship, encouragement, family activities, and belonging.": "Местное пространство для отношений, поддержки, семейных мероприятий и чувства принадлежности.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Текущие фотографии программ являются изображениями-заполнителями, созданными ИИ, и не изображают реальных людей Diez42.",
      "Formal name": "Официальное название",
      "Registry notes": "Регистрационные сведения",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Зарегистрирована 27 апреля 2021 года, CIF G93613776, провинциальный охват Малаги.",
      "Public presence": "Публичное присутствие",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Социальные каналы, похоже, используют diez42malaga / Diez42Malaga.",
      "What this site can say now": "Что этот сайт может сказать сейчас",
      "Formal association name and CIF": "Официальное название ассоциации и CIF",
      "Málaga district and provincial scope": "Район Малаги и провинциальный охват",
      "Social-action purpose and public aims": "Социальная цель и общественные задачи",
      "How newcomers, volunteers, and partners can contact the team": "Как новоприбывшие, волонтеры и партнеры могут связаться с командой",
      "What can wait for V2": "Что может подождать до V2",
      "Donation flow": "Процесс пожертвований",
      "Receipts and tax language": "Квитанции и налоговые формулировки",
      "Public reporting": "Публичная отчетность",
      "Formal partner intake forms": "Официальные формы для партнеров",
      "Clear next step. No clutter.": "Четкий следующий шаг. Без лишнего.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Почтовый адрес: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Номер телефона: +34 600 33 97 94",
      "Privacy": "Конфиденциальность",
      "Privacy Policy": "Политика конфиденциальности",
      "Diez42 | Privacy Policy": "Diez42 | Политика конфиденциальности",
      "Home": "Главная",
      "Terms": "Условия",
      "Terms of Service": "Условия использования",
      "Diez42 | Terms of Service": "Diez42 | Условия использования",
      "Data deletion": "Удаление данных",
      "Data Deletion": "Удаление данных",
      "Data Deletion Instructions": "Инструкции по удалению данных",
      "Diez42 | Data Deletion": "Diez42 | Удаление данных"
    },
    lt: {
      "Skip to content": "Pereiti prie turinio",
      "About": "Apie",
      "Transparency": "Skaidrumas",
      "Contact": "Kontaktai",
      "Welcome and practical help in Málaga.": "Priėmimas ir praktinė pagalba Malagoje.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 lydi imigrantus, pabėgėlius ir kitus naujai atvykusius žmones teikdama maisto paramą, užsiėmimus, šeimos veiklas, mokymus ir bendruomenės ryšį.",
      "Contact Diez42": "Susisiekti su Diez42",
      "See the work": "Peržiūrėti veiklą",
      "AI placeholder image for direction only; not real Diez42 people.": "DI sukurta laikina iliustracija, skirta tik vizualinei krypčiai; joje nėra tikrų Diez42 žmonių.",
      "Support that starts with welcome.": "Parama, prasidedanti nuo priėmimo.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 tarnauja naujai atvykusiems Malagoje per praktinę paramą, švietimą, mokymus, šeimos veiklas, maisto paramą ir bendruomenės ryšį.",
      "Practical support": "Praktinė parama",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Maisto parama, orientavimas ir kasdienė pagalba šeimoms, kurios įsitvirtina Malagoje.",
      "Classes and training": "Užsiėmimai ir mokymai",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Kalbų praktika, profesinis mokymas, vaikų veiklos ir mokymosi keliai, atveriantys duris.",
      "Community connection": "Bendruomenės ryšys",
      "A local place for relationship, encouragement, family activities, and belonging.": "Vietinė erdvė ryšiams, padrąsinimui, šeimos veikloms ir priklausymo jausmui.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Dabartinės programų nuotraukos yra DI sukurtos laikinos iliustracijos ir jose nėra tikrų Diez42 žmonių.",
      "Formal name": "Oficialus pavadinimas",
      "Registry notes": "Registracijos duomenys",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Registruota 2021 m. balandžio 27 d., CIF G93613776, Malagos provincijos apimtis.",
      "Public presence": "Viešas matomumas",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Socialiniai kanalai, atrodo, naudojami kaip diez42malaga / Diez42Malaga.",
      "What this site can say now": "Ką ši svetainė gali pasakyti dabar",
      "Formal association name and CIF": "Oficialus asociacijos pavadinimas ir CIF",
      "Málaga district and provincial scope": "Malagos rajonas ir provincijos apimtis",
      "Social-action purpose and public aims": "Socialinės veiklos paskirtis ir viešieji tikslai",
      "How newcomers, volunteers, and partners can contact the team": "Kaip naujai atvykę žmonės, savanoriai ir partneriai gali susisiekti su komanda",
      "What can wait for V2": "Kas gali palaukti V2",
      "Donation flow": "Aukojimo eiga",
      "Receipts and tax language": "Kvitai ir mokesčių formuluotės",
      "Public reporting": "Viešos ataskaitos",
      "Formal partner intake forms": "Oficialios partnerių anketos",
      "Clear next step. No clutter.": "Aiškus kitas žingsnis. Be triukšmo.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Pašto adresas: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Telefono numeris: +34 600 33 97 94",
      "Privacy": "Privatumas",
      "Privacy Policy": "Privatumo politika",
      "Diez42 | Privacy Policy": "Diez42 | Privatumo politika",
      "Home": "Pradžia",
      "Terms": "Sąlygos",
      "Terms of Service": "Naudojimo sąlygos",
      "Diez42 | Terms of Service": "Diez42 | Naudojimo sąlygos",
      "Data deletion": "Duomenų ištrynimas",
      "Data Deletion": "Duomenų ištrynimas",
      "Data Deletion Instructions": "Duomenų ištrynimo instrukcijos",
      "Diez42 | Data Deletion": "Diez42 | Duomenų ištrynimas"
    },
    be: {
      "Skip to content": "Перайсці да зместу",
      "About": "Пра нас",
      "Transparency": "Празрыстасць",
      "Contact": "Кантакты",
      "Welcome and practical help in Málaga.": "Гасціннасць і практычная дапамога ў Малазе.",
      "Diez42 walks with immigrants, refugees, and other newcomers through food support, classes, family activities, training, and community connection.": "Diez42 суправаджае імігрантаў, бежанцаў і іншых новапрыбылых праз харчовую падтрымку, заняткі, сямейныя актыўнасці, навучанне і сувязь з супольнасцю.",
      "Contact Diez42": "Звязацца з Diez42",
      "See the work": "Паглядзець працу",
      "AI placeholder image for direction only; not real Diez42 people.": "Выява-запаўняльнік, створаная ШІ, толькі для візуальнага кірунку; гэта не рэальныя людзі Diez42.",
      "Support that starts with welcome.": "Падтрымка, якая пачынаецца з гасціннасці.",
      "Diez42 serves newcomers in Málaga through practical support, education, training, family activities, food support, and community connection.": "Diez42 служыць новапрыбылым у Малазе праз практычную падтрымку, адукацыю, навучанне, сямейныя актыўнасці, харчовую дапамогу і сувязь з супольнасцю.",
      "Practical support": "Практычная падтрымка",
      "Food support, orientation, and everyday help for families finding their footing in Málaga.": "Харчовая падтрымка, арыентацыя і штодзённая дапамога сем'ям, якія ўладкоўваюцца ў Малазе.",
      "Classes and training": "Заняткі і навучанне",
      "Language practice, job training, children's activities, and learning paths that open doors.": "Моўная практыка, прафесійнае навучанне, дзіцячыя актыўнасці і адукацыйныя шляхі, што адкрываюць дзверы.",
      "Community connection": "Сувязь з супольнасцю",
      "A local place for relationship, encouragement, family activities, and belonging.": "Мясцовая прастора для адносін, падтрымкі, сямейных актыўнасцей і пачуцця прыналежнасці.",
      "Current program photos are AI-generated placeholders and do not depict real Diez42 people.": "Цяперашнія фота праграм з'яўляюцца выявамі-запаўняльнікамі, створанымі ШІ, і не паказваюць рэальных людзей Diez42.",
      "Formal name": "Афіцыйная назва",
      "Registry notes": "Рэгістрацыйныя звесткі",
      "Registered 27 April 2021, CIF G93613776, Málaga provincial scope.": "Зарэгістравана 27 красавіка 2021 года, CIF G93613776, правінцыйны ахоп Малагі.",
      "Public presence": "Публічная прысутнасць",
      "Social channels appear under diez42malaga / Diez42Malaga.": "Сацыяльныя каналы, здаецца, выкарыстоўваюць diez42malaga / Diez42Malaga.",
      "What this site can say now": "Што гэты сайт можа сказаць цяпер",
      "Formal association name and CIF": "Афіцыйная назва асацыяцыі і CIF",
      "Málaga district and provincial scope": "Раён Малагі і правінцыйны ахоп",
      "Social-action purpose and public aims": "Мэта сацыяльнай дзейнасці і публічныя задачы",
      "How newcomers, volunteers, and partners can contact the team": "Як новапрыбылыя, валанцёры і партнёры могуць звязацца з камандай",
      "What can wait for V2": "Што можа пачакаць да V2",
      "Donation flow": "Працэс ахвяраванняў",
      "Receipts and tax language": "Квітанцыі і падатковыя фармулёўкі",
      "Public reporting": "Публічная справаздачнасць",
      "Formal partner intake forms": "Афіцыйныя формы для партнёраў",
      "Clear next step. No clutter.": "Ясны наступны крок. Без лішняга.",
      "Mailing address: Avenida de Andalucía 27, 29006 Málaga": "Паштовы адрас: Avenida de Andalucía 27, 29006 Málaga",
      "Phone number: +34 600 33 97 94": "Нумар тэлефона: +34 600 33 97 94",
      "Privacy": "Прыватнасць",
      "Privacy Policy": "Палітыка прыватнасці",
      "Diez42 | Privacy Policy": "Diez42 | Палітыка прыватнасці",
      "Home": "Галоўная",
      "Terms": "Умовы",
      "Terms of Service": "Умовы карыстання",
      "Diez42 | Terms of Service": "Diez42 | Умовы карыстання",
      "Data deletion": "Выдаленне даных",
      "Data Deletion": "Выдаленне даных",
      "Data Deletion Instructions": "Інструкцыі па выдаленні даных",
      "Diez42 | Data Deletion": "Diez42 | Выдаленне даных"
    },
    "ar-MA": arabicTranslations,
    "ar-DZ": arabicTranslations
  };

  const normalizeLanguage = (lang) => supportedLanguages.includes(lang) ? lang : defaultLanguage;
  const getDatasetKey = (lang) => languageDatasetKeys[lang] || lang;

  const getDatasetText = (element, lang) => element.dataset[getDatasetKey(lang)];

  const getPageDatasetKey = (prefix, lang) => {
    const suffix = getDatasetKey(lang);
    return `${prefix}${suffix.charAt(0).toUpperCase()}${suffix.slice(1)}`;
  };

  const getLanguageText = (element, lang, en) => {
    if (lang === "en") return en;
    return getDatasetText(element, lang) || translations[lang]?.[en] || en;
  };

  const getPageTitle = (lang) => {
    const en = document.body?.dataset.pageTitleEn;
    if (!en) return pageTitles[lang] || pageTitles.en;
    if (lang === "en") return en;
    return document.body.dataset[getPageDatasetKey("pageTitle", lang)] || translations[lang]?.[en] || en;
  };

  const getNextLanguage = (lang) => {
    const index = supportedLanguages.indexOf(normalizeLanguage(lang));
    return supportedLanguages[(index + 1) % supportedLanguages.length];
  };

  const applyLanguage = (lang) => {
    const next = normalizeLanguage(lang);
    root.lang = next;
    root.dir = languageDirections[next] || "ltr";
    document.title = getPageTitle(next);
    storage.setItem("diez42-lang", next);
    document.querySelectorAll("body *").forEach((element) => {
      if (element.matches("script, style, option")) return;
      if (element.children.length > 0) return;
      if (!element.dataset.autoEn) element.dataset.autoEn = element.textContent.trim();
      const en = element.dataset.en || element.dataset.autoEn;
      element.textContent = getLanguageText(element, next, en);
    });
    document.querySelectorAll("[data-lang-select]").forEach((select) => {
      select.value = next;
      select.setAttribute("aria-label", `${languageSelectLabels[next]}: ${languageNames[next]}`);
      select.title = languageNames[next];
    });
    document.querySelectorAll("[data-lang-control]").forEach((button) => {
      const isActive = button.dataset.langControl === next;
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.textContent = languageLabels[next];
      button.setAttribute("aria-label", `${languageSelectLabels[next]}: ${languageNames[next]}`);
      button.title = languageNames[next];
    });
    updateThemeToggle(root.dataset.theme || "day", next);
  };

  const updateThemeToggle = (theme, lang = normalizeLanguage(root.lang)) => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = themeIcons[theme];
      button.setAttribute("aria-label", `${themeLabels[lang]?.[theme] || themeLabels.en[theme]}`);
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
    if (langToggle) applyLanguage(getNextLanguage(root.lang));

    const themeToggle = target?.closest("[data-theme-toggle]");
    if (themeToggle) applyTheme(root.dataset.theme === "night" ? "day" : "night");

    const langButton = target?.closest("[data-lang-control]");
    if (langButton) applyLanguage(langButton.dataset.langControl);

    const themeButton = target?.closest("[data-theme-control]");
    if (themeButton) applyTheme(themeButton.dataset.themeControl);
  });

  document.addEventListener("change", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const langSelect = target?.closest("[data-lang-select]");
    if (langSelect) applyLanguage(langSelect.value);
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
  applyLanguage(normalizeLanguage(storage.getItem("diez42-lang") || defaultLanguage));
})();
