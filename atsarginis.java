//*1 uzduotis*//
for (let a = 0; a<=10; a++){
    console.log(a);
    }
    
    /1


    //2
    for (let i = 1; i < 10; i++) {
        console.log(i + "-" + Math.pow(i, 2));
    }
    //3.
    for (let a = 10; a <= 99; a++) {
        if (a % 2 == 0)
            console.log(a);
    }
    //4.
    let x = +prompt("Iveskite   skaiciu");
    for (let a = 1; a <= x; a++); {
        console.log(a);
    }
    //5.
    let a = +prompt("Iveskite  pirma skaiciu");
    let b = +prompt("Iveskite  antra skaiciu");
    for (let c = a; c <= b; c++); {
        console.log(c);
    }
    //6.
    let a = +prompt("Iveskite skaiciu");
    for (let i = 3; i <= a; i++) {
        console.log("Elzbieta");
    }
    //7.
    let x = +prompt("Iveskite skaiciu");
    
    for (let i = 1; i <= 10; i++) {
        suma = x * i;
        console.log(x + "*" + i + "=" + suma);
    }
    //8.
    let y = +prompt("Iveskite skaiciu");
    let y = 7x2 + 5x – 3;
    for (let x = -10; x <= 10; x++) {
        console.log(+y);
    }
    //9.
    let a = +prompt("Iveskite pirma intervalo skaiciu");
    let b = +prompt("iveskite antra intervalo skaiciu");
    
    let marskineliuSkaicius = 0;
    for (let i = a; i <= b; i++) {
        if (i % 6 == 0) {
            marskineliuSkaicius = marskineliuSkaicius + 1;
        }
        console.log("marskineliu skaicius" + marskineliuSkaicius);
    }
    console.log("Intervalas: " + a, "-", +b);
    //10.
    let egluciuSk = +prompt("iveskite atveztu egluciu skaiciu");
    let egluciuAukstis;
    let vidurkis = 0;
    for (let i = 1; i <= egluciuSk; i++) {
    }
    
    
    
    
      //  WHILE
    // 1. Nuo
    // 2. Iki
    // 3. Žingsnis
    // atspausdinti 10 skaičių [1; 10]
    // console.log("WHILE");
    // let a = 1;
    // while( a <= 10){
    //     console.log(a);
    //     a++;
    // }
    // console.log("FOR");
    // for(let i = 1; i <= 10; i++){
    //     if ( i == 5 ){
    //         continue;
    //     }
    //     console.log(i);
    // }
    // ciklas cikle
    // išorinis ciklas
    // for(let i = 1; i < 5; i++){
    //     // vidinis ciklas
    //     for (let j = 10; j < 15; j++){
    //         console.log(i, j);
    //     }
    // }
    // for(let i = 1; i < 10; i = i + 2){
    //     console.log(i);
    // }
    // atspausdinti visus lyginius dviženklius skaičius
    // 10
    // 98
    // for(let i=10; i<99; i++){
    //     if (i % 2 == 0){
    //         console.log(i);
    //     }
    // }
    // for(let i=10; i<99; i = i + 2){
    //    console.log(i);
    // }          