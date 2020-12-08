function telephoneCheck(str) {
  if (str.charAt(0) == '-') return false;
  var newStr = str.replaceAll('-', '').replaceAll(' ', '');
  var regEx = /(^\d{10}$)|(^\(\d{3}\)\d{7}$)|(^1\(\d{3}\)\d{7}$)|(^1\d{10}$)/;
  return regEx.test(newStr);
}

telephoneCheck("555-555-5555");
