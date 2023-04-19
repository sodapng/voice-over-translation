function checkCyrillic(string) {
  const cyrillicRegex = /[а-яА-ЯёЁ]/;
  return cyrillicRegex.test(string);
}

module.exports = checkCyrillic;