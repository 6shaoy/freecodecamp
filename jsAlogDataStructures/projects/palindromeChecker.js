function palindrome(str) {
  var newStr = str.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  var newStrRe = newStr.split('').reverse().join('');
  return newStr === newStrRe;
}



palindrome("eye");
