const phone = "212604258552";

const colorLabels = {
  fr: { grey: "Gris", black: "Noir", blue: "Bleu", brown: "Marron" },
  ar: { grey: "رمادي", black: "أسود", blue: "أزرق", brown: "بني" },
  en: { grey: "Grey", black: "Black", blue: "Blue", brown: "Brown" },
  nl: { grey: "Grijs", black: "Zwart", blue: "Blauw", brown: "Bruin" },
  de: { grey: "Grau", black: "Schwarz", blue: "Blau", brown: "Braun" }
};

const featureLabels = {
  fr: { seats5: "5 places", suv: "SUV", premium: "Premium" },
  ar: { seats5: "5 مقاعد", suv: "SUV", premium: "بريميوم" },
  en: { seats5: "5 seats", suv: "SUV", premium: "Premium" },
  nl: { seats5: "5 zitplaatsen", suv: "SUV", premium: "Premium" },
  de: { seats5: "5 Sitze", suv: "SUV", premium: "Premium" }
};

const cars = [
  { model: "Dacia Sandero Stepway 2023", color: "grey", feature: "seats5", photo: "/assets/photos/sandero_stepway_2023_gris.jpg", fallback: "/assets/cars/car_01.svg" },
  { model: "Dacia Sandero Stepway 2023", color: "black", feature: "seats5", photo: "/assets/photos/sandero_stepway_2023_noir.jpg", fallback: "/assets/cars/car_02.svg" },
  { model: "Renault Clio 5 2023", color: "black", feature: "seats5", photo: "/assets/photos/clio5_2023_noir.jpg", fallback: "/assets/cars/car_03.svg" },
  { model: "Renault Clio 5 2023", color: "grey", feature: "seats5", photo: "/assets/photos/clio5_2023_gris.jpg", fallback: "/assets/cars/car_04.svg" },
  { model: "Hyundai Accent 2024", color: "brown", feature: "seats5", photo: "/assets/photos/accent_2024_marron.jpg", fallback: "/assets/cars/car_05.svg" },
  { model: "Hyundai Tucson 2025", color: "black", feature: "suv", photo: "/assets/photos/tucson_2025_noir.jpg", fallback: "/assets/cars/car_06.svg" },
  { model: "VW Golf 8.5 2025", color: "blue", feature: "premium", photo: "/assets/photos/golf85_2025_bleu.jpg", fallback: "/assets/cars/car_07.svg" },
  { model: "Seat Ibiza FR 2025", color: "grey", feature: "seats5", photo: "/assets/photos/ibiza_fr_2025_gris.jpg", fallback: "/assets/cars/car_08.svg" },
  { model: "Opel Corsa 2026", color: "black", feature: "seats5", photo: "/assets/photos/corsa_2026_noir.jpg", fallback: "/assets/cars/car_09.svg" },
  { model: "Opel Corsa 2026", color: "grey", feature: "seats5", photo: "/assets/photos/corsa_2026_gris.jpg", fallback: "/assets/cars/car_10.svg" }
];

const i18n = {
  fr: {
    html_lang: "fr",
    dir: "ltr",
    nav_cars: "Voitures",
    nav_how: "Comment réserver",
    nav_contact: "Contact",
    cta_whatsapp: "WhatsApp",
    hero_title: "Location de voiture à Nador",
    hero_sub: "Simple, rapide et haut de gamme. Récupération et retour jusqu’à 250 km autour de Nador.",
    cta_reserve: "Réserver maintenant",
    cta_reserve_whatsapp: "Réserver via WhatsApp",
    badge_1: "✅ Assurance incluse",
    badge_2: "📍 Livraison 250 km",
    badge_3: "⚡ WhatsApp rapide",
    card_title: "Demande de réservation",
    card_sub: "Remplissez et envoyez sur WhatsApp. Le prix sera confirmé par vous.",
    f_whatsapp: "Votre numéro WhatsApp",
    f_car: "Voiture",
    f_pickup_date: "Date de prise",
    f_return_date: "Date de retour",
    f_pickup_city: "Ville de récupération",
    f_return_city: "Ville de retour",
    f_send: "Envoyer sur WhatsApp",
    f_hint: "Le prix est confirmé par WhatsApp.",
    why_eyebrow: "Service premium à Nador",
    why_title: "Pourquoi choisir YAMALI RENT CAR ?",
    why_sub: "Une expérience plus simple, plus rapide et plus rassurante pour vos locations à Nador et autour.",
    why_lead_title: "Une location claire, rapide et sans stress",
    why_lead_text: "Nous misons sur la réactivité, la transparence et un service local sérieux pour vous faire gagner du temps dès le premier message.",
    why_stat_1: "zone de livraison",
    why_stat_2: "assistance",
    why_stat_3: "réponse rapide",
    why_1: "Assurance incluse",
    why_1_desc: "Une couverture déjà prévue pour rouler avec plus de sérénité.",
    why_2: "Livraison 250 km autour de Nador",
    why_2_desc: "Récupération et retour facilités autour de Nador selon votre besoin.",
    why_3: "Assistance 24/7",
    why_3_desc: "Une présence continue pour répondre rapidement en cas de besoin.",
    why_4: "WhatsApp rapide",
    why_4_desc: "Réservation simple et échange direct sans étapes compliquées.",
    cars_title: "Notre galerie de voitures",
    cars_sub: "Parcourez les modèles disponibles, choisissez votre voiture puis réservez en quelques secondes.",
    how_title: "Comment réserver",
    how_1_t: "Choisissez la voiture",
    how_1_s: "Modèle + couleur disponibles.",
    how_2_t: "Envoyez votre demande",
    how_2_s: "Via la réservation rapide ou WhatsApp.",
    how_3_t: "Confirmation & prix",
    how_3_s: "Vous confirmez disponibilité et prix en MAD.",
    contact_title: "Contact",
    contact_sub: "Réponse rapide sur WhatsApp.",
    contact_city: "Ville :",
    contact_area: "Zone :",
    contact_area_val: "jusqu’à 250 km autour de Nador",
    contact_currency: "Devise :",
    contact_phone: "WhatsApp :",
    cta_copy: "Copier le numéro",
    car_btn: "Réserver",
    car_secondary_btn: "Formulaire",
    footer_note: "Site vitrine — réservation via WhatsApp",
    copy_success: "✅ Copié",
    copy_error: "Copie impossible",
    preview_alt: "Aperçu voiture",
    wa_hero_text: "Bonjour YAMALI RENT CAR, je souhaite réserver une voiture.",
    wa_short: (carName) => `Bonjour YAMALI RENT CAR, je souhaite réserver : ${carName}.`,
    booking_message: ({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }) =>
      `Bonjour YAMALI RENT CAR,\nJe souhaite réserver :\n- Voiture : ${carName}\n- Mon WhatsApp : ${clientPhone}\n- Date prise : ${pickupDate}\n- Date retour : ${returnDate}\n- Ville prise : ${pickupCity}\n- Ville retour : ${returnCity}\nMerci de confirmer la disponibilité et le prix.`
  },
  ar: {
    html_lang: "ar",
    dir: "rtl",
    nav_cars: "السيارات",
    nav_how: "كيفية الحجز",
    nav_contact: "اتصل بنا",
    cta_whatsapp: "واتساب",
    hero_title: "كراء السيارات بالناظور",
    hero_sub: "سهل، سريع وبخدمة ممتازة. الاستلام والإرجاع حتى 250 كم حول الناظور.",
    cta_reserve: "احجز الآن",
    cta_reserve_whatsapp: "احجز عبر واتساب",
    badge_1: "✅ تأمين شامل",
    badge_2: "📍 توصيل 250 كم",
    badge_3: "⚡ واتساب سريع",
    card_title: "طلب حجز",
    card_sub: "املأ البيانات ثم أرسلها عبر واتساب. سيتم تأكيد السعر من طرفك.",
    f_whatsapp: "رقم واتساب ديالك",
    f_car: "السيارة",
    f_pickup_date: "تاريخ الاستلام",
    f_return_date: "تاريخ الإرجاع",
    f_pickup_city: "مدينة الاستلام",
    f_return_city: "مدينة الإرجاع",
    f_send: "إرسال عبر واتساب",
    f_hint: "السعر يتم تأكيده عبر واتساب.",
    why_eyebrow: "خدمة بريميوم بالناظور",
    why_title: "لماذا تختار YAMALI RENT CAR؟",
    why_sub: "تجربة كراء أسهل وأسرع وأكثر راحة لطلباتك في الناظور وما حولها.",
    why_lead_title: "كراء واضح، سريع وبدون تعقيد",
    why_lead_text: "نعتمد على السرعة والوضوح وخدمة محلية جدية باش تربح الوقت من أول رسالة.",
    why_stat_1: "منطقة التوصيل",
    why_stat_2: "المساعدة",
    why_stat_3: "رد سريع",
    why_1: "تأمين شامل",
    why_1_desc: "تغطية مدمجة باش تسوق براحة بال أكثر.",
    why_2: "توصيل حتى 250 كم حول الناظور",
    why_2_desc: "الاستلام والإرجاع متاحان حول الناظور حسب الحاجة ديالك.",
    why_3: "مساعدة 24/7",
    why_3_desc: "متواجدون باستمرار للرد بسرعة وقت الحاجة.",
    why_4: "واتساب سريع",
    why_4_desc: "حجز بسيط وتواصل مباشر بلا خطوات معقدة.",
    cars_title: "معرض السيارات",
    cars_sub: "تصفح السيارات المتوفرة، اختر الموديل المناسب ثم احجز بسرعة.",
    how_title: "كيفية الحجز",
    how_1_t: "اختر السيارة",
    how_1_s: "الموديل واللون المتوفران.",
    how_2_t: "أرسل طلبك",
    how_2_s: "باستعمال الاستمارة أو واتساب.",
    how_3_t: "تأكيد السعر",
    how_3_s: "أنت تؤكد التوفر والسعر بالدرهم المغربي.",
    contact_title: "اتصل بنا",
    contact_sub: "نرد بسرعة عبر واتساب.",
    contact_city: "المدينة:",
    contact_area: "المنطقة:",
    contact_area_val: "حتى 250 كم حول الناظور",
    contact_currency: "العملة:",
    contact_phone: "واتساب:",
    cta_copy: "نسخ الرقم",
    car_btn: "احجز",
    car_secondary_btn: "الاستمارة",
    footer_note: "موقع تعريفي — الحجز عبر واتساب",
    copy_success: "✅ تم النسخ",
    copy_error: "تعذر النسخ",
    preview_alt: "معاينة السيارة",
    wa_hero_text: "السلام عليكم، أريد حجز سيارة من YAMALI RENT CAR.",
    wa_short: (carName) => `السلام عليكم، أريد حجز: ${carName}`,
    booking_message: ({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }) =>
      `السلام عليكم YAMALI RENT CAR\nأريد حجز:\n- السيارة: ${carName}\n- واتساب ديالي: ${clientPhone}\n- تاريخ الاستلام: ${pickupDate}\n- تاريخ الإرجاع: ${returnDate}\n- مدينة الاستلام: ${pickupCity}\n- مدينة الإرجاع: ${returnCity}\nالمرجو تأكيد التوفر والسعر.`
  },
  en: {
    html_lang: "en",
    dir: "ltr",
    nav_cars: "Cars",
    nav_how: "How to book",
    nav_contact: "Contact",
    cta_whatsapp: "WhatsApp",
    hero_title: "Car rental in Nador",
    hero_sub: "Simple, fast and premium. Pick-up and return available within 250 km around Nador.",
    cta_reserve: "Book now",
    cta_reserve_whatsapp: "Book via WhatsApp",
    badge_1: "✅ Insurance included",
    badge_2: "📍 250 km delivery",
    badge_3: "⚡ Fast WhatsApp",
    card_title: "Booking request",
    card_sub: "Fill in the form and send it on WhatsApp. The price will be confirmed with you.",
    f_whatsapp: "Your WhatsApp number",
    f_car: "Car",
    f_pickup_date: "Pick-up date",
    f_return_date: "Return date",
    f_pickup_city: "Pick-up city",
    f_return_city: "Return city",
    f_send: "Send on WhatsApp",
    f_hint: "The price is confirmed on WhatsApp.",
    why_eyebrow: "Premium service in Nador",
    why_title: "Why choose YAMALI RENT CAR?",
    why_sub: "A simpler, faster and more reassuring rental experience in Nador and nearby.",
    why_lead_title: "Clear, fast and stress-free rental",
    why_lead_text: "We focus on responsiveness, transparency and reliable local service to save you time from the very first message.",
    why_stat_1: "delivery area",
    why_stat_2: "support",
    why_stat_3: "quick reply",
    why_1: "Insurance included",
    why_1_desc: "Built-in coverage for a smoother and safer drive.",
    why_2: "Delivery within 250 km of Nador",
    why_2_desc: "Easy pick-up and return around Nador according to your needs.",
    why_3: "24/7 assistance",
    why_3_desc: "Continuous support to answer quickly whenever needed.",
    why_4: "Fast WhatsApp",
    why_4_desc: "Simple booking and direct contact without complicated steps.",
    cars_title: "Our car gallery",
    cars_sub: "Browse the available models, choose your car and book in seconds.",
    how_title: "How to book",
    how_1_t: "Choose the car",
    how_1_s: "Available model and color.",
    how_2_t: "Send your request",
    how_2_s: "Using the quick form or WhatsApp.",
    how_3_t: "Confirmation & price",
    how_3_s: "You confirm availability and price in MAD.",
    contact_title: "Contact",
    contact_sub: "Fast reply on WhatsApp.",
    contact_city: "City:",
    contact_area: "Area:",
    contact_area_val: "up to 250 km around Nador",
    contact_currency: "Currency:",
    contact_phone: "WhatsApp:",
    cta_copy: "Copy number",
    car_btn: "Book",
    car_secondary_btn: "Form",
    footer_note: "Showcase website — booking via WhatsApp",
    copy_success: "✅ Copied",
    copy_error: "Copy failed",
    preview_alt: "Car preview",
    wa_hero_text: "Hello YAMALI RENT CAR, I would like to book a car.",
    wa_short: (carName) => `Hello YAMALI RENT CAR, I would like to book: ${carName}.`,
    booking_message: ({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }) =>
      `Hello YAMALI RENT CAR,\nI would like to book:\n- Car: ${carName}\n- My WhatsApp: ${clientPhone}\n- Pick-up date: ${pickupDate}\n- Return date: ${returnDate}\n- Pick-up city: ${pickupCity}\n- Return city: ${returnCity}\nPlease confirm availability and price.`
  },
  nl: {
    html_lang: "nl",
    dir: "ltr",
    nav_cars: "Auto's",
    nav_how: "Hoe reserveren",
    nav_contact: "Contact",
    cta_whatsapp: "WhatsApp",
    hero_title: "Autoverhuur in Nador",
    hero_sub: "Eenvoudig, snel en premium. Ophalen en terugbrengen mogelijk binnen 250 km rond Nador.",
    cta_reserve: "Nu reserveren",
    cta_reserve_whatsapp: "Reserveren via WhatsApp",
    badge_1: "✅ Verzekering inbegrepen",
    badge_2: "📍 250 km levering",
    badge_3: "⚡ Snelle WhatsApp",
    card_title: "Reserveringsaanvraag",
    card_sub: "Vul het formulier in en verstuur het via WhatsApp. De prijs wordt met u bevestigd.",
    f_whatsapp: "Uw WhatsApp-nummer",
    f_car: "Auto",
    f_pickup_date: "Ophaaldatum",
    f_return_date: "Retourdatum",
    f_pickup_city: "Ophaalstad",
    f_return_city: "Retourstad",
    f_send: "Versturen via WhatsApp",
    f_hint: "De prijs wordt bevestigd via WhatsApp.",
    why_eyebrow: "Premium service in Nador",
    why_title: "Waarom kiezen voor YAMALI RENT CAR?",
    why_sub: "Een eenvoudigere, snellere en geruststellende huurervaring in Nador en omgeving.",
    why_lead_title: "Duidelijke, snelle en zorgeloze verhuur",
    why_lead_text: "Wij zetten in op snelheid, transparantie en betrouwbare lokale service om u meteen tijd te besparen.",
    why_stat_1: "leveringszone",
    why_stat_2: "ondersteuning",
    why_stat_3: "snelle reactie",
    why_1: "Verzekering inbegrepen",
    why_1_desc: "Inbegrepen dekking voor meer gemoedsrust onderweg.",
    why_2: "Levering binnen 250 km rond Nador",
    why_2_desc: "Gemakkelijk ophalen en terugbrengen rond Nador volgens uw behoefte.",
    why_3: "24/7 assistentie",
    why_3_desc: "Voortdurende ondersteuning om snel te helpen wanneer nodig.",
    why_4: "Snelle WhatsApp",
    why_4_desc: "Eenvoudig reserveren en direct contact zonder ingewikkelde stappen.",
    cars_title: "Onze autogalerij",
    cars_sub: "Bekijk de beschikbare modellen, kies uw auto en reserveer in enkele seconden.",
    how_title: "Hoe reserveren",
    how_1_t: "Kies de auto",
    how_1_s: "Beschikbaar model en kleur.",
    how_2_t: "Stuur uw aanvraag",
    how_2_s: "Via het snelle formulier of WhatsApp.",
    how_3_t: "Bevestiging & prijs",
    how_3_s: "U bevestigt beschikbaarheid en prijs in MAD.",
    contact_title: "Contact",
    contact_sub: "Snelle reactie via WhatsApp.",
    contact_city: "Stad:",
    contact_area: "Zone:",
    contact_area_val: "tot 250 km rond Nador",
    contact_currency: "Valuta:",
    contact_phone: "WhatsApp:",
    cta_copy: "Nummer kopiëren",
    car_btn: "Reserveren",
    car_secondary_btn: "Formulier",
    footer_note: "Presentatiewebsite — reserveren via WhatsApp",
    copy_success: "✅ Gekopieerd",
    copy_error: "Kopiëren mislukt",
    preview_alt: "Auto voorbeeld",
    wa_hero_text: "Hallo YAMALI RENT CAR, ik wil graag een auto reserveren.",
    wa_short: (carName) => `Hallo YAMALI RENT CAR, ik wil graag reserveren: ${carName}.`,
    booking_message: ({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }) =>
      `Hallo YAMALI RENT CAR,\nIk wil graag reserveren:\n- Auto: ${carName}\n- Mijn WhatsApp: ${clientPhone}\n- Ophaaldatum: ${pickupDate}\n- Retourdatum: ${returnDate}\n- Ophaalstad: ${pickupCity}\n- Retourstad: ${returnCity}\nBevestig alstublieft de beschikbaarheid en prijs.`
  },
  de: {
    html_lang: "de",
    dir: "ltr",
    nav_cars: "Autos",
    nav_how: "So buchen Sie",
    nav_contact: "Kontakt",
    cta_whatsapp: "WhatsApp",
    hero_title: "Autovermietung in Nador",
    hero_sub: "Einfach, schnell und hochwertig. Abholung und Rückgabe bis 250 km rund um Nador.",
    cta_reserve: "Jetzt buchen",
    cta_reserve_whatsapp: "Per WhatsApp buchen",
    badge_1: "✅ Versicherung inklusive",
    badge_2: "📍 250 km Lieferung",
    badge_3: "⚡ Schnelles WhatsApp",
    card_title: "Buchungsanfrage",
    card_sub: "Füllen Sie das Formular aus und senden Sie es per WhatsApp. Der Preis wird mit Ihnen bestätigt.",
    f_whatsapp: "Ihre WhatsApp-Nummer",
    f_car: "Auto",
    f_pickup_date: "Abholdatum",
    f_return_date: "Rückgabedatum",
    f_pickup_city: "Abholort",
    f_return_city: "Rückgabeort",
    f_send: "Per WhatsApp senden",
    f_hint: "Der Preis wird über WhatsApp bestätigt.",
    why_eyebrow: "Premium-Service in Nador",
    why_title: "Warum YAMALI RENT CAR wählen?",
    why_sub: "Ein einfacheres, schnelleres und beruhigenderes Mieterlebnis in Nador und Umgebung.",
    why_lead_title: "Klare, schnelle und stressfreie Vermietung",
    why_lead_text: "Wir setzen auf Reaktionsschnelligkeit, Transparenz und zuverlässigen lokalen Service, damit Sie vom ersten Kontakt an Zeit sparen.",
    why_stat_1: "Liefergebiet",
    why_stat_2: "Support",
    why_stat_3: "schnelle Antwort",
    why_1: "Versicherung inklusive",
    why_1_desc: "Integrierter Schutz für mehr Ruhe unterwegs.",
    why_2: "Lieferung bis 250 km rund um Nador",
    why_2_desc: "Einfache Abholung und Rückgabe rund um Nador nach Ihrem Bedarf.",
    why_3: "24/7 Hilfe",
    why_3_desc: "Kontinuierliche Unterstützung, um bei Bedarf schnell zu reagieren.",
    why_4: "Schnelles WhatsApp",
    why_4_desc: "Einfache Buchung und direkter Kontakt ohne komplizierte Schritte.",
    cars_title: "Unsere Fahrzeuggalerie",
    cars_sub: "Sehen Sie sich die verfügbaren Modelle an, wählen Sie Ihr Auto und buchen Sie in wenigen Sekunden.",
    how_title: "So buchen Sie",
    how_1_t: "Auto auswählen",
    how_1_s: "Verfügbares Modell und Farbe.",
    how_2_t: "Anfrage senden",
    how_2_s: "Über das Schnellformular oder WhatsApp.",
    how_3_t: "Bestätigung & Preis",
    how_3_s: "Sie bestätigen Verfügbarkeit und Preis in MAD.",
    contact_title: "Kontakt",
    contact_sub: "Schnelle Antwort über WhatsApp.",
    contact_city: "Stadt:",
    contact_area: "Gebiet:",
    contact_area_val: "bis 250 km rund um Nador",
    contact_currency: "Währung:",
    contact_phone: "WhatsApp:",
    cta_copy: "Nummer kopieren",
    car_btn: "Buchen",
    car_secondary_btn: "Formular",
    footer_note: "Präsentationswebsite — Buchung per WhatsApp",
    copy_success: "✅ Kopiert",
    copy_error: "Kopieren fehlgeschlagen",
    preview_alt: "Fahrzeugvorschau",
    wa_hero_text: "Hallo YAMALI RENT CAR, ich möchte ein Auto buchen.",
    wa_short: (carName) => `Hallo YAMALI RENT CAR, ich möchte buchen: ${carName}.`,
    booking_message: ({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }) =>
      `Hallo YAMALI RENT CAR,\nich möchte buchen:\n- Auto: ${carName}\n- Mein WhatsApp: ${clientPhone}\n- Abholdatum: ${pickupDate}\n- Rückgabedatum: ${returnDate}\n- Abholort: ${pickupCity}\n- Rückgabeort: ${returnCity}\nBitte bestätigen Sie Verfügbarkeit und Preis.`
  }
};

let lang = "fr";

const langSelect = document.getElementById("langSelect");
const carSelect = document.getElementById("carSelect");
const carPreview = document.getElementById("carPreview");
const carMeta = document.getElementById("carMeta");

function getColorLabel(color){
  return (colorLabels[lang] && colorLabels[lang][color]) || colorLabels.fr[color] || color;
}

function getFeatureLabel(feature){
  return (featureLabels[lang] && featureLabels[lang][feature]) || featureLabels.fr[feature] || feature;
}

function getCarName(car){
  return `${car.model} — ${getColorLabel(car.color)}`;
}

function getCarMetaText(car){
  return `${car.model} • ${getColorLabel(car.color)} • ${getFeatureLabel(car.feature)}`;
}

function setWhatsAppLinks(){
  const dict = i18n[lang];
  document.getElementById("waTop").href = `https://wa.me/${phone}`;
  document.getElementById("waBottom").href = `https://wa.me/${phone}`;
  document.getElementById("waHero").href = `https://wa.me/${phone}?text=${encodeURIComponent(dict.wa_hero_text)}`;
  const phoneText = document.getElementById("phoneText");
  if (phoneText) phoneText.textContent = "+" + phone;
}

function populateCarSelect(){
  const selectedValue = carSelect.value || "0";
  carSelect.innerHTML = "";
  cars.forEach((car, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = getCarName(car);
    carSelect.appendChild(opt);
  });
  carSelect.value = selectedValue;
  if (!carSelect.value) carSelect.value = "0";
}

function updateCarPreview(){
  const idx = parseInt(carSelect.value || "0", 10);
  const car = cars[idx] || cars[0];
  carPreview.onerror = () => {
    carPreview.onerror = null;
    carPreview.src = car.fallback;
  };
  carPreview.src = car.photo;
  carPreview.alt = i18n[lang].preview_alt;
  carMeta.textContent = getCarMetaText(car);
}

function renderCarsGrid(){
  const dict = i18n[lang];
  const grid = document.getElementById("carsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  cars.forEach((car, index) => {
    const card = document.createElement("article");
    card.className = "galleryCard";
    card.innerHTML = `
      <div class="galleryCard__imgWrap">
        <img class="galleryCard__img" src="${car.photo}" onerror="this.onerror=null;this.src='${car.fallback}';" alt="${getCarName(car)}">
      </div>
      <div class="galleryCard__overlay">
        <div class="galleryCard__topline">YAMALI RENT CAR</div>
        <div class="galleryCard__name">${getCarName(car)}</div>
        <div class="galleryCard__meta">${getCarMetaText(car)}</div>
        <div class="galleryCard__actions">
          <a class="btn btn--primary" target="_blank" rel="noopener" href="https://wa.me/${phone}?text=${encodeURIComponent(dict.wa_short(getCarName(car)))}">${dict.car_btn}</a>
          <a class="btn btn--ghost" href="#reserve" data-car-index="${index}">${dict.car_secondary_btn}</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('[data-car-index]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const idx = event.currentTarget.getAttribute('data-car-index');
      carSelect.value = idx;
      updateCarPreview();
    });
  });
}

function applyLang(){
  const dict = i18n[lang];
  document.documentElement.lang = dict.html_lang;
  document.documentElement.dir = dict.dir;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  setWhatsAppLinks();
  populateCarSelect();
  updateCarPreview();
  renderCarsGrid();
}

function makeMsg({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity }){
  return i18n[lang].booking_message({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity });
}

if (langSelect) {
  langSelect.addEventListener("change", (event) => {
    lang = event.target.value;
    applyLang();
  });
}

carSelect.addEventListener("change", updateCarPreview);

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("+" + phone);
    document.getElementById("copyHint").textContent = i18n[lang].copy_success;
    setTimeout(() => {
      document.getElementById("copyHint").textContent = "";
    }, 1200);
  } catch {
    document.getElementById("copyHint").textContent = i18n[lang].copy_error;
  }
});

document.getElementById("quickForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const idx = parseInt(carSelect.value || "0", 10);
  const carName = getCarName(cars[idx] || cars[0]);
  const clientPhone = document.getElementById("clientPhone").value.trim();
  const pickupDate = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;
  const pickupCity = document.getElementById("pickupCity").value.trim() || "Nador";
  const returnCity = document.getElementById("returnCity").value.trim() || "Nador";

  const msg = makeMsg({ carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity });
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener");
});

langSelect.value = lang;
applyLang();
