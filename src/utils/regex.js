const cyrillicRegex = /[а-яА-ЯёЁ]/;

function checkCyrillic(string) {
  return cyrillicRegex.test(string);
}

function getCyrillicCount(string) {
  return string.match(cyrillicRegex).length;
}

export { checkCyrillic, getCyrillicCount };
