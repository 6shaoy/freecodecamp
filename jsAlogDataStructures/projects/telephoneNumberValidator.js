function telephoneCheck(str) {
  var newStr = str.replaceAll(' ', '');
  var regEx = /(^\d{3}[-]?\d{3}[-]?\d{4}$)|(^\(\d{3}\)[-]?\d{3}[-]?\d{4}$)|(^1\(\d{3}\)[-]?\d{3}[-]?\d{4}$)|(^1\d{3}[-]?\d{3}[-]?\d{4}$)/;
  return regEx.test(newStr);
}

telephoneCheck("555-555-5555");
