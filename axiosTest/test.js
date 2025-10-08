import generateTicket from "../snippets/generateTicket.js";
import createTicket from "./service/createTicket.js";

const accs = {
  "acc_test_1@test.pl": {
    password: "HfxEE:04nk",
    sessionId:
      "0dd06edd-97a8-2d91-4f0f-de5273543eb6.873144a118042afcf8eeddfd9a205cc420f15746.c3Ry.wb",
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
