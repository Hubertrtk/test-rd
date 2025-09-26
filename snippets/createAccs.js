const { default: axios } = require("axios");

function generatePassword(length = 10) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

const emails = ["vojtamiks29@gmail.com", "sorryaboutthat001@gmail.com"];

const createAccs = async () => {
  let results = {};
  for (const email of emails) {
    const password = generatePassword();
    const res = await axios.post("http://10.0.11.242/users/register", {
      _nocp: 1,
      _nosr: 1,
      firstname: "",
      lastname: "",
      email: email,
      password: password,
      country: "PL",
    });
    if (!res.data.error) {
      results[email] = { password };
    } else {
      results[email] = { error: res.data.error };
    }
  }
  return results;
};

createAccs().then((r) => {
  console.log(r);
});
