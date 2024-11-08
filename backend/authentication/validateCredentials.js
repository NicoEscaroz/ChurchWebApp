const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const validateCredentials = (inputEmail, inputPassword) => {
  // Ensure input is provided
  if (!inputEmail || !inputPassword) {
    console.log("Missing input credentials");
    return false;
  }

  const pairs = [
    { email: process.env.EMAIL1, password: process.env.PASSWORD1 },
    { email: process.env.EMAIL2, password: process.env.PASSWORD2 },
    { email: process.env.EMAIL3, password: process.env.PASSWORD3 },
  ];

  // Filter out any pairs with undefined values
  const validPairs = pairs.filter((pair) => pair.email && pair.password);

  if (validPairs.length === 0) {
    console.log("No valid credential pairs found in environment variables");
    return false;
  }

  const isValid = validPairs.some((pair) => {
    const emailMatch =
      pair.email.trim().toLowerCase() === inputEmail.trim().toLowerCase();
    const passwordMatch = pair.password === inputPassword;
    return emailMatch && passwordMatch;
  });

  return isValid;
};

module.exports = validateCredentials;
