import axios from "axios";

function buildSessionString(data) {
  if (!data || !data.id || !data.token || !data.pk || !data.dt) {
    throw new Error("Brakuje wymaganych pól w obiekcie!");
  }

  return `${data.id}.${data.token}.${data.pk}.${data.dt}`;
}
export default buildSessionString;

let emailsLogin = {
  "acc_test_1@test.pl": {
    password: "HfxEE:04nk",
    sessionId:
      "34f3ec68-b4a6-d25c-9b4c-a36a3917af1e.57891ed1236273bb98c6cc894e3ab443cbe5357a.YWNj.wb",
  },
  "hubert.rutkowski.test@gmail.com": {
    password: "Pirat123!",
    sessionId:
      "5e1e4aaa-97d7-68f3-790b-df0431502545.d575951e002182baf85a8419f0e4776af74ad42b.aHVi.wb",
  },
};

const loginUser = async (email, password) => {
  const res = await axios.post(
    "https://restreamdesk-playlive-dhescvhdd3etbjdz.northeurope-01.azurewebsites.net/users/login",
    {
      _nocp: 1,
      _nosr: 1,
      firstname: "",
      lastname: "",
      email: email,
      password: password,
      country: "PL",
    }
  );
  return res;
};

const run = async () => {
  for (const email of Object.keys(emailsLogin)) {
    const password = emailsLogin[email].password;
    const res = await loginUser(email, password);
    console.log();
    if (!res.data.error) {
      if (res.data.data.session) {
        emailsLogin[email].sessionId = buildSessionString(
          res.data.data.session
        );
      }
    } else {
    }
  }
  console.log(emailsLogin);
};

run();
