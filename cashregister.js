  
    function checkCashRegister(price, cash, cid) {
        let cashArr= cid.map(e => e[1]*100);
        console.log(cashArr);
        let converted= [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
        let rawchange= ((cash-price)*100);
        let result=[["PENNY", 0],  ["NICKEL", 0],  ["DIME", 0],  ["QUARTER", 0],  ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]];
        let change= {status:"", change:[]};

        for(let i=cashArr.length-1; i>=0; i--){
          while(cashArr[i]>0){
            if(rawchange - converted[i]>=0){
              result[i][1] += converted[i];
              rawchange -= converted[i];
              cashArr[i][1] -= converted[i];
            } else { break;}
          }
          if (rawchange === 0){break;}
        }

        for(let i=result.length-1; i>=0; i--){
          if(result[i][1]!==0){
            result[i][1] = result[i][1]/100;
          }
        }

        if(rawchange !=0){
          change.status= "INSUFFICIENT_FUNDS";
          console.log(change);
          return change;
        }

        if(rawchange==0 && JSON.stringify(result)== JSON.stringify(cid)){
          result= result.filter(e => e[1]!==0). reverse();
          change.status="CLOSED";
          change.change= result;
          console.log(change);
          return change;
        }
        else {
          result= result.filter(e => e[1]!==0). reverse();
          change.status= "OPEN";
          change.change= result;
          console.log(change);
          return change;
        }

        console.log(change);
        
        // Here is your change, ma'am.
        
      }
      
      // Example cash-in-drawer array:
      // [["PENNY", 1.01],
      // ["NICKEL", 2.05],
      // ["DIME", 3.1],
      // ["QUARTER", 4.25],
      // ["ONE", 90],
      // ["FIVE", 55],
      // ["TEN", 20],
      // ["TWENTY", 60],
      // ["ONE HUNDRED", 100]]
      
     checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);