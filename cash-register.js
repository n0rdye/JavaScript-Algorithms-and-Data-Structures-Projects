function checkCashRegister(price, cash, cid){
  const AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  var tCID = 0;
  for (var element of cid) {
    tCID += element[1];
  }
  tCID = tCID.toFixed(2);

  var chngive = cash - price;

  const changeArray = [];
  if (chngive > tCID) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (chngive.toFixed(2) == tCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (var elem of cid) {
      var temp = [elem[0], 0];
      while (chngive >= AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += AMOUNT[elem[0]];
        elem[1] -= AMOUNT[elem[0]];
        chngive -= AMOUNT[elem[0]];
        chngive = chngive.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  if (chngive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArray};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));