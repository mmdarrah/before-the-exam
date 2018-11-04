

let personNumer = prompt("sitt födelsedatum i detta format ÅÅÅÅ-MM-DD.","ÅÅÅÅ-MM-DD");

function inPut() {
    let år = personNumer.slice(0,4);
    let månad = personNumer.slice(5,7);
    let dag = personNumer.slice(8,10);
    //return document.write(år+"mmmm"+månad+"zzzz"+dag);
    
    let år2 = new Date();
    let år3 = år2.getUTCFullYear();
    let årSum = år3 - år;
    //return document.write(årSum);
    

    let månad2 = new Date ();
    let månad3 = månad2.getMonth()+1;
    if (månad3 === månad){
    let månadSum = 0;
    return månadSum;
    };
    if (månad3 > månad){
    let månadSum = månad3 - månad
    return månadSum;
    };
    if( månad3 < månad){
    let  månadSum = månad - månad3
    return månadSum;
    };
    


    let dag2 = new Date ();
    let dag3 = dag2.getDate();
    //return document.write(dag3);
    
    if (dag3 === dag){
    let dagSum = 0;
    };
    if (dag3 > dag){
    let dagSum = dag3 - dag;
    return dagSum;
    };
    if (dag3 < dag){
    let dagSum = dag - dag3;
    return dagSum;
    };
    return document.write(årSum)
     /* return document.write("Du har angett följande födelsedatum 1973-12-02\nDu är "
     +årSum+ "år,"+ månadSum+ " månader och "+dagSum+ " dagar gammal."); */
    
  }
  (inPut());
  