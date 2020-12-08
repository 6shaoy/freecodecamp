function convertToRoman(num) {
    var a = num.toString().split('');
    while (a.length<4) {
        a.unshift(0);
    }

    var res = '';
    res = 'M'.repeat(Number(a[0]));
    res += convert(Number(a[1]), 'C','D','M');
    res += convert(Number(a[2]), 'X','L','C');
    res += convert(Number(a[3]), 'I','V','X');
 return res;
}

function convert(num, i, v, x){
    switch (num) {
        case 1: return i;
        case 2: return i+i;
        case 3: return i+i+i;
        case 4: return i+v;
        case 5: return v;
        case 6: return v+i;
        case 7: return v+i+i;
        case 8: return v+i+i+i;
        case 9: return i+x;
        case 0: return '';
    }
}

convertToRoman(36);
