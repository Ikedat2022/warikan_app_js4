document.getElementById('calculator').addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止
    console.log('JavaScript呼び出し成功');
    let valueToA = document.getElementById('toA');
    let valueToB = document.getElementById('toB');
    let valueToC = document.getElementById('toC');
    let toBeAddingAmount = Number(document.getElementById("toBeAddingAmount").value);
    if (!valueToA.checked && !valueToB.checked && !valueToC.checked) {
      console.log('チェックが付いていません');
      alert('チェック外さないでよお…///');
    } else if (toBeAddingAmount == null || toBeAddingAmount == 0){
      alert('（追加する金額が）入ってねえんだよこの野郎');
    } else {
      let beforeAddedTotalAmount = Number(document.getElementById("totalAmount").value);
      let addTotalAmount = toBeAddingAmount + beforeAddedTotalAmount;
      console.log('合計金額：' + addTotalAmount);
      document.getElementById("totalAmount").value = addTotalAmount;
  
      let beforeAddedAPaymentToAAmount = Number(document.getElementById("aPaymentToAAmount").value);
      let beforeAddedAPaymentToBAmount = Number(document.getElementById("aPaymentToBAmount").value);
      let beforeAddedAPaymentToCAmount = Number(document.getElementById("aPaymentToCAmount").value);
      let beforeAddedBPaymentToAAmount = Number(document.getElementById("bPaymentToAAmount").value);
      let beforeAddedBPaymentToBAmount = Number(document.getElementById("bPaymentToBAmount").value);
      let beforeAddedBPaymentToCAmount = Number(document.getElementById("bPaymentToCAmount").value);
      let beforeAddedCPaymentToAAmount = Number(document.getElementById("cPaymentToAAmount").value);
      let beforeAddedCPaymentToBAmount = Number(document.getElementById("cPaymentToBAmount").value);
      let beforeAddedCPaymentToCAmount = Number(document.getElementById("cPaymentToCAmount").value);
  
      let beforeAddedAPaymentToAOgoriAmount = Number(document.getElementById("aPaymentToAOgoriAmount").value);
      let beforeAddedAPaymentToBOgoriAmount = Number(document.getElementById("aPaymentToBOgoriAmount").value);
      let beforeAddedAPaymentToCOgoriAmount = Number(document.getElementById("aPaymentToCOgoriAmount").value);
      let beforeAddedBPaymentToAOgoriAmount = Number(document.getElementById("bPaymentToAOgoriAmount").value);
      let beforeAddedBPaymentToBOgoriAmount = Number(document.getElementById("bPaymentToBOgoriAmount").value);
      let beforeAddedBPaymentToCOgoriAmount = Number(document.getElementById("bPaymentToCOgoriAmount").value);
      let beforeAddedCPaymentToAOgoriAmount = Number(document.getElementById("cPaymentToAOgoriAmount").value);
      let beforeAddedCPaymentToBOgoriAmount = Number(document.getElementById("cPaymentToBOgoriAmount").value);
      let beforeAddedCPaymentToCOgoriAmount = Number(document.getElementById("cPaymentToCOgoriAmount").value);

      if (document.getElementById("aPayment").checked && !document.getElementById("toA").checked) {
        console.log('Aが支払った金額' + toBeAddingAmount);
        if(document.getElementById("toB").checked && document.getElementById("toC").checked){
          let aToBPaymentAmount = Math.ceil((beforeAddedAPaymentToBAmount + toBeAddingAmount) / 2);
          let aToCPaymentAmount = Math.ceil((beforeAddedAPaymentToCAmount + toBeAddingAmount) / 2);
          console.log('AがBに支払った合計金額：' + aToBPaymentAmount);
          console.log('AがCに支払った合計金額：' + aToCPaymentAmount);
          document.getElementById("aPaymentToBAmount").value = aToBPaymentAmount;
          document.getElementById("aPaymentToCAmount").value = aToCPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedAPaymentToBOgoriAmount = Math.ceil((beforeAddedAPaymentToBOgoriAmount + toBeAddingAmount) /2 );
            let addedAPaymentToCOgoriAmount = Math.ceil((beforeAddedAPaymentToCOgoriAmount + toBeAddingAmount) /2 );
            console.log('AがBにおごった合計金額：' + addedAPaymentToBOgoriAmount);
            console.log('AがCにおごった合計金額：' + addedAPaymentToCOgoriAmount);
            document.getElementById("aPaymentToBOgoriAmount").value = addedAPaymentToBOgoriAmount;
            document.getElementById("aPaymentToCOgoriAmount").value = addedAPaymentToCOgoriAmount;
          }
        } else if(document.getElementById("toB").checked){
          let aToBPaymentAmount = beforeAddedAPaymentToBAmount + toBeAddingAmount;
          console.log('AがBに支払った合計金額：' + aToBPaymentAmount);
          document.getElementById("aPaymentToBAmount").value = aToBPaymentAmount;
          if(document.getElementById("ogori").checked && !document.getElementById("toA").checked){
            let addedAPaymentToBOgoriAmount = beforeAddedAPaymentToBOgoriAmount + toBeAddingAmount;
            console.log('AがBにおごった合計金額：' + addedAPaymentToBOgoriAmount);
            document.getElementById("aPaymentToBOgoriAmount").value = addedAPaymentToBOgoriAmount;
          }
        } else if(document.getElementById("toC").checked){
          let aToCPaymentAmount = beforeAddedAPaymentToCAmount + toBeAddingAmount;
          console.log('AがCに支払った合計金額：' + aToCPaymentAmount);
          document.getElementById("aPaymentToCAmount").value = aToCPaymentAmount;
          if(document.getElementById("ogori").checked && !document.getElementById("toA").checked){
            let addedAPaymentToCOgoriAmount = beforeAddedAPaymentToCOgoriAmount + toBeAddingAmount;
            console.log('AがCにおごった合計金額：' + addedAPaymentToCOgoriAmount);
            document.getElementById("aPaymentToCOgoriAmount").value = addedAPaymentToCOgoriAmount;
          }
        } else {
          alert('自分選んでて草');
        }
      } else if (document.getElementById("bPayment").checked && !document.getElementById("toB").checked) {
        console.log('Bが支払った金額' + toBeAddingAmount);
        if(document.getElementById("toA").checked && document.getElementById("toC").checked){
          let bToAPaymentAmount = Math.ceil((beforeAddedBPaymentToAAmount + toBeAddingAmount) / 2);
          let bToCPaymentAmount = Math.ceil((beforeAddedBPaymentToCAmount + toBeAddingAmount) / 2);
          console.log('BがAに支払った合計金額：' + bToAPaymentAmount);
          console.log('BがCに支払った合計金額：' + bToCPaymentAmount);
          document.getElementById("bPaymentToAAmount").value = bToAPaymentAmount;
          document.getElementById("bPaymentToCAmount").value = bToCPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedBPaymentToAOgoriAmount = Math.ceil((beforeAddedBPaymentToAOgoriAmount + toBeAddingAmount) /2 );
            let addedBPaymentToCOgoriAmount = Math.ceil((beforeAddedBPaymentToCOgoriAmount + toBeAddingAmount) /2 );
            console.log('BがAにおごった合計金額：' + addedBPaymentToAOgoriAmount);
            console.log('BがCにおごった合計金額：' + addedBPaymentToCOgoriAmount);
            document.getElementById("bPaymentToAOgoriAmount").value = addedBPaymentToAOgoriAmount;
            document.getElementById("bPaymentToCOgoriAmount").value = addedBPaymentToCOgoriAmount;
          }
        } else if(document.getElementById("toA").checked){
          let bToAPaymentAmount = beforeAddedBPaymentToAAmount + toBeAddingAmount;
          console.log('BがAに支払った合計金額：' + bToAPaymentAmount);
          document.getElementById("bPaymentToAAmount").value = bToAPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedBPaymentToAOgoriAmount = beforeAddedBPaymentToAOgoriAmount + toBeAddingAmount;
            console.log('AがBにおごった合計金額：' + addedBPaymentToAOgoriAmount);
            document.getElementById("bPaymentToAOgoriAmount").value = addedBPaymentToAOgoriAmount;
          }
        } else if(document.getElementById("toC").checked){
          let bToCPaymentAmount = beforeAddedBPaymentToCAmount + toBeAddingAmount;
          console.log('BがCに支払った合計金額：' + bToCPaymentAmount);
          document.getElementById("bPaymentToCAmount").value = bToCPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedBPaymentToCOgoriAmount = beforeAddedBPaymentToCOgoriAmount + toBeAddingAmount;
            console.log('AがCにおごった合計金額：' + addedBPaymentToCOgoriAmount);
            document.getElementById("bPaymentToCOgoriAmount").value = addedBPaymentToCOgoriAmount;
          }
        } else {
          alert('自分選んでて草');
        }
      } else if (document.getElementById("cPayment").checked && !document.getElementById("toC").checked) {
        console.log('Cが支払った金額' + toBeAddingAmount);
        if(document.getElementById("toA").checked && document.getElementById("toB").checked){
          let cToAPaymentAmount = Math.ceil((beforeAddedCPaymentToAAmount + toBeAddingAmount) / 2);
          let cToBPaymentAmount = Math.ceil((beforeAddedCPaymentToBAmount + toBeAddingAmount) / 2);
          console.log('CがAに支払った合計金額：' + cToAPaymentAmount);
          console.log('CがBに支払った合計金額：' + cToBPaymentAmount);
          document.getElementById("cPaymentToAAmount").value = cToAPaymentAmount;
          document.getElementById("cPaymentToBAmount").value = cToBPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedCPaymentToBOgoriAmount = Math.ceil((beforeAddedCPaymentToAOgoriAmount + toBeAddingAmount) /2 );
            let addedCPaymentToCOgoriAmount = Math.ceil((beforeAddedCPaymentToBgoriAmount + toBeAddingAmount) /2 );
            console.log('BがAにおごった合計金額：' + addedCPaymentToBOgoriAmount);
            console.log('BがCにおごった合計金額：' + addedCPaymentToCOgoriAmount);
            document.getElementById("cPaymentToAOgoriAmount").value = addedCPaymentToAOgoriAmount;
            document.getElementById("cPaymentToBOgoriAmount").value = addedCPaymentToCOgoriAmount;
          }
        } else if(document.getElementById("toA").checked){
          let cToAPaymentAmount = beforeAddedCPaymentToAAmount + toBeAddingAmount;
          console.log('CがAに支払った合計金額：' + cToAPaymentAmount);
          document.getElementById("cPaymentToAAmount").value = cToAPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedCPaymentToAOgoriAmount = beforeAddedCPaymentToAOgoriAmount + toBeAddingAmount;
            console.log('CがAにおごった合計金額：' + addedCPaymentToAOgoriAmount);
            document.getElementById("cPaymentToAOgoriAmount").value = addedCPaymentToAOgoriAmount;
          }
        } else if(document.getElementById("toB").checked){
          let cToBPaymentAmount = beforeAddedCPaymentToBAmount + toBeAddingAmount;
          console.log('CがBに支払った合計金額：' + cToBPaymentAmount);
          document.getElementById("cPaymentToBAmount").value = cToBPaymentAmount;
          if(document.getElementById("ogori").checked){
            let addedCPaymentToBOgoriAmount = beforeAddedCPaymentToBOgoriAmount + toBeAddingAmount;
            console.log('CがBにおごった合計金額：' + addedCPaymentToBOgoriAmount);
            document.getElementById("cPaymentToBOgoriAmount").value = addedCPaymentToBOgoriAmount;
          }
        } else {
          alert('自分選んでて草');
        }
      }
      // 処理終了のため、計算対象金額を削除する
      document.getElementById('toBeAddingAmount').value = "";
    }
    //  document.getElementById('result').style.display = 'block';
  });
  
  
  
