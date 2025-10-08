import http from "k6/http";
import { check, sleep } from "k6";
import generateTicket from "../snippets/generateTicket.js";

export const options = {
  vus: 1,
  duration: "10s",
};

const accs = {
  "acc_test_1@test.pl": {
    password: "HfxEE:04nk",
    sessionId:
      "34f3ec68-b4a6-d25c-9b4c-a36a3917af1e.f59da7a3a028926a8b7688fbf8cb47a26530c7f2.YWNj.wb",
  },
  "hubert.rutkowski.test@gmail.com": {
    password: "Pirat123!",
    sessionId:
      "5e1e4aaa-97d7-68f3-790b-df0431502545.d5ad71aac0719dd9c824faa21514d246eac45f61.aHVi.wb",
  },
};

export default function () {
  const url = "http://10.0.11.242/restreamdesk/createTicket";
  const payload = JSON.stringify({
    data: generateTicket(),
    _sessid:
      "0dd06edd-97a8-2d91-4f0f-de5273543eb6.873144a118042afcf8eeddfd9a205cc420f15746.c3Ry.wb",
  });

  const params = {
    headers: { "Content-Type": "application/json" },
  };

  const res = http.post(url, payload, params);

  check(res, {
    "status is 200 or 409": (r) => {
      if (r.error) {
        return false;
      }
      if (r.body) {
        const { data: ticketData } = JSON.parse(r.body);
        console.log("ticketData");
        console.log(ticketData);
        console.log("============================");
        if (ticketData) {
          return true;
        }
      }
      return r.status === 200 || r.status === 409;
    },
  });

  sleep(0.1); // lekka przerwa żeby symulować rzeczywiste obciążenie
}
