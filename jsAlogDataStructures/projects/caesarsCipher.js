function rot13(str) {
  var res = '';
  var k;
  for (var i=0; i<str.length; i++){
    var c = str.charCodeAt(i);
    if (c>90 || c<65) {
      res += str.charAt(i);
      continue;
    }
    k = str.charCodeAt(i)-13;
    if (k<65) {
      k += 26;
    }
    res += String.fromCharCode(k);
  }
  return res;
}

rot13("SERR PBQR PNZC");
