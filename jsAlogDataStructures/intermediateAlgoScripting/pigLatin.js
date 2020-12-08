function translatePigLatin(str) {
  var i;
  var head = '';
  for (i=0; i<str.length; i++){
    if (['a','e','i','o','u'].indexOf(str.charAt(i)) >= 0){
      break;
    }
    head += str.charAt(i);
  }
  if (i == 0) return str + 'way';

  return str.substring(i) + head + 'ay';
}

translatePigLatin("consonant");
