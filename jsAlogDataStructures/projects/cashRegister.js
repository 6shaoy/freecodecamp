function checkCashRegister(price, cash, cid) {
  var res = [];
  var diff = cash - price;
  var total = cid.reduce((carry, item)=>{return carry + item[1]*100;},0)/100;

  if (diff > total) return {status: "INSUFFICIENT_FUNDS", change: []};
  if (diff == total) return {status: "CLOSED", change: cid};

  var a = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var nb;
  for (var i=8; i>=0; i--){
    nb = nbBillet(diff, i);
    diff -= nb*a[i];
    diff = Math.round(diff*100)/100;
    if (diff == 0) break;
  }
  function nbBillet(diff, i){
    var nb = 0;
    if (diff > a[i] && cid[i][1]>0) {
      nb = Math.min(Math.floor(diff/a[i]), cid[i][1]/a[i]);
      res.push([cid[i][0],a[i]*nb]);     
    }
    return nb;
  }

  if (diff > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
  return {status: "OPEN", change: res};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
