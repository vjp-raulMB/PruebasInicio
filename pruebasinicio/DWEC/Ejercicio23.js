let arrayValores = ["t",4,89,"asd",true];

function funcionConRest(arg1,arg2,...restoArgs){
    console.log("Argumento 1: "+arg1);
    console.log("Argumento 2: "+arg2);
    console.log("Resto de argumentos: "+restoArgs);
};

function funcionConSpread(...arrayValores){
    console.log("Argumentos con spread: "+arrayValores);
};

funcionConRest(...arrayValores);
funcionConSpread(arrayValores);