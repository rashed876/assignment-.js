
// https://github.com/rashed876/gnment-.js

function kilometerToMeter(num){
    var result = num * 1000;
    return result;
}  
var first = kilometerToMeter(15);
console.log(first);





function budgetCalculator(ghori,mobail,laptop){
    var dam = ghori* 50;
    var dam = mobail * 100;
     var dam = laptop * 500;       
}
var mobail = budgetCalculator(3);
var ghori = budgetCalculator(3);
var laptop = budgetCalculator(1);
console.log(mobail,ghori,laptop);





function hotelCost(rom){
    var vara = 10;
    if(rom <=10){
        rom = vara *100;
    }
    else if(rom <=20){
        var firstPart = 10 * 100;
        var remining = rom  - 10;
        var secondPart = remining * 80;
        rom = firstPart + secondPart;
    }
    else{
         var  firstPart = 10 * 100;
         var  secondPart = 10 * 80;
        var  remining  = rom -20;
        var  thirtPart = remining * 50;
        rom = firstPart + secondPart + thirtPart;

    }
    return rom;
}
var count = hotelCost(25);
console.log(count);








var nems = ["habeb","kalam","rofik khan","nabela"];
var max = nems[0];
for(var u = 0; u < nems.length; u++){
    var element = nems [u];
    if(element > max){
        max = element;
    }
}

console.log(max);
















