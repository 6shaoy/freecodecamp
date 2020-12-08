function pairElement(str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case 'A':
        res.push(['A','T']);
        break;
      case 'T':
        res.push(['T','A']);
        break;
      case 'C':
        res.push(['C','G']);
        break;
      case 'G':
        res.push(['G','C']);
        break;
    }
  }
  return res;
}

pairElement("GCG");
