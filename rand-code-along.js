const multiplier = 100 // defined outside the function (global scope)

function rand (){
    const decimal = Math.random(); // 
    const times10 = decimal * multiplier;
    const final = Math.floor(times10) // absolut value of times10 without decimal
   
   return final
}
   
    console.log(rand());
rand();

