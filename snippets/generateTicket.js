const realSids = [
  "uujUAHP",
  "iXaddlM",
  "Jn+Pg3i",
  "JxrUmTT",
  "Huz/2Va",
  "Dxmqva",
  "XZn9xfe",
];
const realEmails = [
  "magda95rajek@onet.eu",
  "wory13@gmail.com",
  "annajarmolkiewicz@gmail.com",
  "srl89@interia.pl",
];

const RD_TICKET_MCTH = {
  STARTSWITH: "STARTSWITH",
  ENDSWITH: "ENDSWITH",
  CONTAIN: "CONTAIN",
  FULL: "FULL",
};

const URLS = {
  WEB: [
    // "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    // "https://www.twitch.tv/videos/123456789",
    // "https://vimeo.com/123456789",
    // "https://www.dailymotion.com/video/x7xyzabc",
    "https://www.tiktok.com/@brookemonk_/video/7485839714851769630",
    "https://www.tiktok.com/@co_mafit/video/7552570765481233686",
    "https://www.tiktok.com/@elevensportspl/video/7552638832114470166",
    "https://www.tiktok.com/@warszawskiikoks/video/7552610413548997910",
  ],
  TIKTOK: [
    "https://www.tiktok.com/@brookemonk_/video/7485839714851769630",
    "https://www.tiktok.com/@co_mafit/video/7552570765481233686",
    "https://www.tiktok.com/@elevensportspl/video/7552638832114470166",
    "https://www.tiktok.com/@warszawskiikoks/video/7552610413548997910",
  ],
};

const PRODUCT_ID = "291";

const getRandomUrl = () => {
  const categories = Object.values(URLS);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  return randomCategory[Math.floor(Math.random() * randomCategory.length)];
};

const generateSids = () => {
  const result = {};

  realSids.forEach((sid) => {
    // Losujemy typ dopasowania
    const matchTypes = Object.values(RD_TICKET_MCTH);
    const matchType = matchTypes[Math.floor(Math.random() * matchTypes.length)];

    let key;

    switch (matchType) {
      case RD_TICKET_MCTH.STARTSWITH:
        key = sid.substring(0, Math.floor(Math.random() * sid.length) + 1);
        break;
      case RD_TICKET_MCTH.ENDSWITH:
        const endLen = Math.floor(Math.random() * sid.length) + 1;
        key = sid.substring(sid.length - endLen);
        break;
      case RD_TICKET_MCTH.CONTAIN:
        const start = Math.floor(Math.random() * sid.length);
        const end = start + Math.floor(Math.random() * (sid.length - start));
        key = sid.substring(start, end + 1);
        break;
      case RD_TICKET_MCTH.FULL:
        key = sid;
        break;
    }

    result[key] = matchType;
  });

  return result;
};

const generateEmails = () => {
  const result = {};

  realEmails.forEach((sid) => {
    // Losujemy typ dopasowania
    const matchTypes = Object.values(RD_TICKET_MCTH);
    const matchType = matchTypes[Math.floor(Math.random() * matchTypes.length)];

    let key;

    switch (matchType) {
      case RD_TICKET_MCTH.STARTSWITH:
        key = sid.substring(0, Math.floor(Math.random() * sid.length) + 1);
        break;
      case RD_TICKET_MCTH.ENDSWITH:
        const endLen = Math.floor(Math.random() * sid.length) + 1;
        key = sid.substring(sid.length - endLen);
        break;
      case RD_TICKET_MCTH.CONTAIN:
        const start = Math.floor(Math.random() * sid.length);
        const end = start + Math.floor(Math.random() * (sid.length - start));
        key = sid.substring(start, end + 1);
        break;
      case RD_TICKET_MCTH.FULL:
        key = sid;
        break;
    }

    result[key] = matchType;
  });

  return result;
};

const generateTicket = () => {
  return {
    url: getRandomUrl(),
    viewerCount: 2137,
    description: "Przykładowy opis",
    codes: generateSids(),
    emails: generateEmails(),
    productId: PRODUCT_ID,
    imagesUrls: [
      "https://storage.googleapis.com/restreamdesk/testRestreamDesk/1adac690-ccd5-4ced-96c1-2ac8e33a18e3.png",
    ],
  };
};

export default generateTicket;
