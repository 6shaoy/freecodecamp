function spinalCase(str) {
  var newStr = str.replaceAll(/([A-Z])/g, "-$1").toLowerCase().replaceAll(/[^a-z]/g, '-').replaceAll(/[-]+/g, '-').replace(/^-/, '');
  return newStr;
}

spinalCase('This Is Spinal Tap');
