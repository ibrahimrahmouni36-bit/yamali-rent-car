const phone = "212604258552"; // WhatsApp agence (sans +)

const cars = [
  { name: "Dacia Sandero Stepway 2023 — Gris", photo: "/assets/photos/sandero_stepway_2023_gris.jpg", fallback: "/assets/cars/car_01.svg", meta_fr: "Stepway 2023 • Gris • 5 places", meta_ar: "سانديرو ستيبواي 2023 • رمادي • 5 مقاعد" },
  { name: "Dacia Sandero Stepway 2023 — Noir", photo: "/assets/photos/sandero_stepway_2023_noir.jpg", fallback: "/assets/cars/car_02.svg", meta_fr: "Stepway 2023 • Noir • 5 places", meta_ar: "سانديرو ستيبواي 2023 • أسود • 5 مقاعد" },
  { name: "Renault Clio 5 2023 — Noir", photo: "/assets/photos/clio5_2023_noir.jpg", fallback: "/assets/cars/car_03.svg", meta_fr: "Clio 5 2023 • Noir • 5 places", meta_ar: "كليو 5 2023 • أسود • 5 مقاعد" },
  { name: "Renault Clio 5 2023 — Gris", photo: "/assets/photos/clio5_2023_gris.jpg", fallback: "/assets/cars/car_04.svg", meta_fr: "Clio 5 2023 • Gris • 5 places", meta_ar: "كليو 5 2023 • رمادي • 5 مقاعد" },
  { name: "Hyundai Accent 2024 — Marron", photo: "/assets/photos/accent_2024_marron.jpg", fallback: "/assets/cars/car_05.svg", meta_fr: "Accent 2024 • Marron • 5 places", meta_ar: "أكسنت 2024 • بني • 5 مقاعد" },
  { name: "Hyundai Tucson 2025 — Noir", photo: "/assets/photos/tucson_2025_noir.jpg", fallback: "/assets/cars/car_06.svg", meta_fr: "Tucson 2025 • Noir • SUV", meta_ar: "توسان 2025 • أسود • SUV" },
  { name: "VW Golf 8.5 2025 — Bleu", photo: "/assets/photos/golf85_2025_bleu.jpg", fallback: "/assets/cars/car_07.svg", meta_fr: "Golf 8.5 2025 • Bleu • Premium", meta_ar: "غولف 8.5 2025 • أزرق • بريميوم" },
  { name: "Seat Ibiza 2025 FR — Gris", photo: "/assets/photos/ibiza_fr_2025_gris.jpg", fallback: "/assets/cars/car_08.svg", meta_fr: "Ibiza FR 2025 • Gris • 5 places", meta_ar: "إيبيزا FR 2025 • رمادي • 5 مقاعد" },
  { name: "Opel Corsa 2026 — Noir", photo: "/assets/photos/corsa_2026_noir.jpg", fallback: "/assets/cars/car_09.svg", meta_fr: "Corsa 2026 • Noir • 5 places", meta_ar: "كورسا 2026 • أسود • 5 مقاعد" },
  { name: "Opel Corsa 2026 — Gris", photo: "/assets/photos/corsa_2026_gris.jpg", fallback: "/assets/cars/car_10.svg", meta_fr: "Corsa 2026 • Gris • 5 places", meta_ar: "كورسا 2026 • رمادي • 5 مقاعد" },
];

const i18n = {
  fr: {
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
    photo_note: "Images showroom illustratives. Modèles & couleurs respectés.",
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
    cars_title: "Nos voitures",
    cars_sub: "Modèles 2023–2026. Choisissez un modèle + couleur, puis réservez via WhatsApp.",
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
    car_btn: "Réserver"
  },
  ar: {
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
    photo_note: "صور توضيحية (Showroom) مع احترام الموديل واللون.",
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
    cars_title: "سياراتنا",
    cars_sub: "موديلات 2023–2026. اختر السيارة واللون ثم احجز عبر واتساب.",
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
    car_btn: "احجز"
  }
};

let lang = "fr";

function setWhatsAppLinks(){
  document.getElementById("waTop").href = `https://wa.me/${phone}`;
  document.getElementById("waBottom").href = `https://wa.me/${phone}`;
  document.getElementById("waHero").href = `https://wa.me/${phone}?text=${encodeURIComponent("Bonjour YAMALI RENT CAR, je souhaite réserver une voiture.")}`;
  const phoneText = document.getElementById("phoneText");
  if(phoneText) phoneText.textContent = "+" + phone;
}
setWhatsAppLinks();

const applyLang = () => {
  const dict = i18n[lang];
  document.documentElement.lang = lang === "fr" ? "fr" : "ar";
  document.documentElement.dir = lang === "fr" ? "ltr" : "rtl";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  renderCarsGrid();
  updateCarPreview();
};

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "fr" ? "ar" : "fr";
  applyLang();
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("+" + phone);
    document.getElementById("copyHint").textContent = "✅ Copié";
    setTimeout(()=> document.getElementById("copyHint").textContent="", 1200);
  } catch {
    document.getElementById("copyHint").textContent = "Copie impossible";
  }
});

// Populate select
const carSelect = document.getElementById("carSelect");
cars.forEach((c, idx) => {
  const opt = document.createElement("option");
  opt.value = String(idx);
  opt.textContent = c.name;
  carSelect.appendChild(opt);
});
carSelect.addEventListener("change", updateCarPreview);

function updateCarPreview(){
  const idx = parseInt(carSelect.value || "0", 10);
  const c = cars[idx] || cars[0];
  const img = document.getElementById("carPreview");
  img.onerror = () => { img.onerror = null; img.src = c.fallback; };
  img.src = c.photo;
  const meta = document.getElementById("carMeta");
  meta.textContent = (lang === "fr") ? c.meta_fr : c.meta_ar;
}

function makeMsg(carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity){
  if(lang === "fr"){
    return `Bonjour YAMALI RENT CAR,\nJe souhaite réserver :\n- Voiture : ${carName}\n- Mon WhatsApp : ${clientPhone}\n- Date prise : ${pickupDate}\n- Date retour : ${returnDate}\n- Ville prise : ${pickupCity}\n- Ville retour : ${returnCity}\nMerci de confirmer la disponibilité et le prix.`;
  }
  return `السلام عليكم YAMALI RENT CAR\nأريد حجز:\n- السيارة: ${carName}\n- واتساب ديالي: ${clientPhone}\n- تاريخ الاستلام: ${pickupDate}\n- تاريخ الإرجاع: ${returnDate}\n- مدينة الاستلام: ${pickupCity}\n- مدينة الإرجاع: ${returnCity}\nالمرجو تأكيد التوفر والسعر.`;
}

function renderCarsGrid(){
  const dict = i18n[lang];
  const grid = document.getElementById("carsGrid");
  if(!grid) return;
  grid.innerHTML = "";
  cars.forEach((c) => {
    const card = document.createElement("div");
    card.className = "car";
    card.innerHTML = `
      <div class="car__img"><img src="${c.photo}" onerror="this.onerror=null;this.src=\'${c.fallback}\';" alt="${c.name}"></div>
      <div>
        <div class="car__name">${c.name}</div>
        <div class="car__sub">${(lang==="fr") ? c.meta_fr : c.meta_ar}</div>
        <div class="car__actions">
          <a class="btn btn--primary" target="_blank" rel="noopener"
             href="https://wa.me/${phone}?text=${encodeURIComponent((lang==='fr' ? `Bonjour YAMALI RENT CAR, je souhaite réserver : ${c.name}.` : `السلام عليكم، أريد حجز: ${c.name}`))}">${dict.car_btn}</a>
          <a class="btn btn--ghost" href="#reserve">${lang==="fr" ? "Réserver ici" : "احجز هنا"}</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.getElementById("quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const idx = parseInt(carSelect.value || "0", 10);
  const carName = cars[idx]?.name || cars[0].name;

  const clientPhone = document.getElementById("clientPhone").value.trim();
  const pickupDate = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;
  const pickupCity = document.getElementById("pickupCity").value || "Nador";
  const returnCity = document.getElementById("returnCity").value || "Nador";

  const msg = makeMsg(carName, clientPhone, pickupDate, returnDate, pickupCity, returnCity);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener");
});

applyLang();
