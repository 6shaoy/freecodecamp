function myReplace(str, before, after) {
  if (before.charAt(0).match(/[A-Z]/)) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.toLowerCase();
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
