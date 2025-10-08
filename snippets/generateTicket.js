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
    "https://www.tiktok.com/@19_mloda_06/live?enter_from_merge=pc_share&enter_method=pc_share&is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@mrs.bl44ck/live?enter_from_merge=pc_share&enter_method=pc_share&is_from_webapp=1&sender_device=pc",
  ],
  TIKTOK: [
    "https://www.tiktok.com/@ame._.ae/video/7558014213386505483?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@zurnalista.pl/video/7525733201604611350?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@getmesomeburger/video/7548265535570562312?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@naatalisaa/video/7557719829642235158?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@ame._.ae/video/7553188623202405688?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@userv1hmq08pe3/video/7558127142270176534?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@laaaurkaaa/video/7558188911625817377?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@evviissss/video/7554390145013730561?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@naatalisaa/video/7528777797418880278?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@manualhot/video/7557582357390314759?is_from_webapp=1&sender_device=pc",
    "https://www.tiktok.com/@_estefanija/video/7541073568856116502?is_from_webapp=1&sender_device=pc",
  ],
};

const PRODUCT_ID = "121";

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
