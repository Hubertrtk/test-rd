import generateTicket from "../snippets/generateTicket.js";
import createTicket from "./service/createTicket.js";

const accs = {
  "acc_test_1@test.pl": {
    password: "HfxEE:04nk",
    sessionId:
      "34f3ec68-b4a6-d25c-9b4c-a36a3917af1e.721c6a42a363d7ccc68c317f7019917fd02c3b6c.YWNj.wb",
  },
};

let errrors = [];

const responseHandler = (response, email, meth) => {
  if (response.data.error) {
    errrors.push({ error: response.data.error, email, meth });
    return;
  }
};

const run = async () => {
  const res = await createTicket(
    generateTicket(),
    accs["acc_test_1@test.pl"].sessionId
  );
  responseHandler(res, "acc_test_1@test.pl", "createTicket");
  console.log(errrors);
};

run();
