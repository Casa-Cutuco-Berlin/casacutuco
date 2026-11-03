// Transcribed from the owner's screenshot. Ellipses preserve text cut off in the source.
// Spanish is a site-provided translation, not the guests' original wording.
const josueText = {
  en: "Excellent experience during our stay in Berlin. The place is very nice, ideal for resting and enjoying a peaceful stay. The service was very friendly and welcoming, which made the ...",
  es: "Excelente experiencia durante nuestra estancia en Berlín. El lugar es muy bonito, ideal para descansar y disfrutar de una estancia tranquila. El servicio fue muy amable y acogedor, lo que hizo que ...",
};

export const reviews = [
  {
    id: "josue-recent",
    name: "Josué Neftalí",
    profile: { en: "1 month on Airbnb", es: "1 mes en Airbnb" },
    date: { en: "3 weeks ago (in the original screenshot)", es: "Hace 3 semanas (en la captura original)" },
    stay: { en: "Stayed one night", es: "Estancia de una noche" },
    text: josueText,
    excerpt: true,
  },
  {
    id: "josue-october",
    name: "Josué Neftalí",
    profile: { en: "1 month on Airbnb", es: "1 mes en Airbnb" },
    date: { en: "October 2026", es: "Octubre de 2026" },
    stay: { en: "Stayed one night", es: "Estancia de una noche" },
    text: josueText,
    excerpt: true,
  },
  {
    id: "txell",
    name: "Txell",
    profile: { en: "11 years on Airbnb", es: "11 años en Airbnb" },
    date: { en: "July 2026", es: "Julio de 2026" },
    stay: { en: "Stayed a few nights", es: "Estancia de varias noches" },
    text: {
      en: "A good place to explore the Alegria area. The cottage is fine, with a kitchenette that's more or less equipped for cooking. The terrace is very nice.",
      es: "Un buen lugar para explorar la zona de Alegría. La casita está bien, con una pequeña cocina más o menos equipada para cocinar. La terraza es muy bonita.",
    },
    excerpt: false,
  },
  {
    id: "charles",
    name: "Charles",
    profile: { en: "3 years on Airbnb", es: "3 años en Airbnb" },
    date: { en: "September 2026", es: "Septiembre de 2026" },
    stay: { en: "Stayed a few nights", es: "Estancia de varias noches" },
    text: {
      en: "Everything was good. Easy to find.",
      es: "Todo estuvo bien. Fácil de encontrar.",
    },
    excerpt: false,
  },
  {
    id: "wendy",
    name: "Wendy Ramírez",
    profile: { en: "San Salvador, El Salvador", es: "San Salvador, El Salvador" },
    date: { en: "May 2026", es: "Mayo de 2026" },
    stay: { en: "Stayed one night", es: "Estancia de una noche" },
    text: {
      en: "The accommodation is in a good location. Everything is in good condition for a carefree stay. The girl in charge of the place is very friendly and helpful. Thank you for all your ...",
      es: "El alojamiento está en una buena ubicación. Todo está en buenas condiciones para una estancia sin preocupaciones. La chica encargada del lugar es muy amable y servicial. Gracias por toda su ...",
    },
    excerpt: true,
  },
  {
    id: "jenny",
    name: "Jenny Carmelina",
    profile: { en: "Santa Tecla, El Salvador", es: "Santa Tecla, El Salvador" },
    date: { en: "May 2026", es: "Mayo de 2026" },
    stay: { en: "Stayed with kids", es: "Estancia con niños" },
    text: {
      en: "Beautiful. I felt right at home. I would say excellent. I'll be back soon.",
      es: "Hermoso. Me sentí como en casa. Diría que excelente. Volveré pronto.",
    },
    excerpt: false,
  },
];

export const reviewCategories = [
  { en: "Cleanliness", es: "Limpieza", score: "4.8" },
  { en: "Accuracy", es: "Exactitud", score: "5.0" },
  { en: "Check-in", es: "Llegada", score: "5.0" },
  { en: "Communication", es: "Comunicación", score: "5.0" },
  { en: "Location", es: "Ubicación", score: "4.9" },
  { en: "Value", es: "Calidad-precio", score: "4.9" },
];

export const reviewMentions = [
  { en: "Location", es: "Ubicación", count: 5 },
  { en: "Hospitality", es: "Hospitalidad", count: 4 },
  { en: "Cleanliness", es: "Limpieza", count: 2 },
];
