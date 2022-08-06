const generateRandomString = function() {
  const chars = "0123456789";
  const randomArr = [];
  while (randomArr.length < 6) {
    randomArr.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return randomArr.join("");
};

module.exports = { generateRandomString }