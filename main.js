
let userInputName ="Ele";
let years = 25;
let message = "Hello, darling!";




//let kampas1 = +prompt("Įveskite kampo 1 dydį");
//let kampas2 = +prompt("Įveskite kampo 2 dydį");

//let Ieskomaskampas3 = 180 - kampas1 - kampas2;
//console.log("Nežinomok kampo didumas: " + Ieskomaskampas3);



//let atstumasKM = +prompt("Įveskite atstumas 1 dydį");

//let IeskomasatstumasM = 1000 * atstumasKM;
//console.log("Nežinomo atstumas metrais: " + IeskomasatstumasM);


    let dalyviuSK = 20;
    let saldainiuSK = 143;
    let Kiekivienasgavopo = saldainiuSK / dalyviuSK;
 console.log("Kiekivienas gavo po:" + Kiekivienasgavopo);

    let likoSaldainiuMokytojai =  Math.floor( saldainiuSK - Kiekivienasgavopo*dalyviuSK);
   
console.log("Mokytojai liko saldainiu:" + likoSaldainiuMokytojai);

    //  Kiek  skaičių po kablelio...
    console.log(savaites.toFixed(0));
    console.log(savaites);
    // Math pavyzdys
    let v1 = Math.round(3.4);
    console.log(v1);
    let v2 = Math.floor(3.99);
    console.log(v2);
    let v3 = Math.ceil(3.111);
    console.log(v3);

    9 pratimas:

    let h = 1;
    let min = 30;
    let trukme = 40;
    let trukmeMin = h * 60 + min + trukme;
    
    
    
    let h1 = Math.floor(trukmeMin / 60);
    let min1 = trukmeMin % 60;

    // Duomenų bazėje
let userNameDB = "Jonas";
let userPassDB = "123456789";
// Mūsų programa
let userInputName = prompt("Įveskite vardą");
let userInputPass = prompt("Įveskite slaptažodį: ");
if(userNameDB == userInputName && userPassDB == userInputPass) {
    // true blokas
    console.log("Pavyko prisijungti.");
} else {
    // false blokas
    console.log("Prisijungti nepavyko.");
}
// Taip - true
// Ne - false
// Palyginimo operatoriai
// >, <, >=, <=, ==
// = priskyrimas
// let a = 10;

// Patikrinti ar įvestas skaičius yra:
// neigiamas
// nulis
// teigimas
// -9, -8, 0, 1, 101...
// 1 var
let skaicius = "kkk";
if (skaicius < 0) { // kkk < 0
    console.log("Neigiamas");
} else if (skaicius == 0){ // kkk == 0
    console.log("Nulis");
} else if (skaicius > 0){ // kkk > 0
    console.log("Teigiamas");
} else {
    console.log("Klaida");
}
// 2 var
let skaicius = "kkk";
if (skaicius > 0) { // kkk < 0
    console.log("Teigiamas");
} else if (skaicius < 0){ // kkk == 0
    console.log("Neigiamas");
} else if (skaicius == 0){ // kkk > 0
    console.log("Nulis");
} else {
    console.log("Klaida");
}

// true 6 > 5
// false 9 < 0
// && and ir
// || or arba
if(true && true && true){
    // true blokas
    console.log("Viskas gerai.");
} else {
    // false blokas
}
if(false || false || false){
    // true blokas
    console.log("Viskas gerai.");
} else {
    //false blokas
    console.log("Viskas blogai :(.");
}



let menuo = 12;
switch(menuo){
    case 12:
        console.log("Gruodis");
        console.log("Gruodis");
        console.log("Gruodis");
        console.log("Gruodis");
        console.log("Gruodis");
        break;
    case 1:
        console.log("Sausis");
        break;
    case 2:
        console.log("Vasaris");
        break;
    default:
        console.log("Klaida");
}
console.log("kiti sakiniai...");
if (menuo == 12){
} else if (menuo == 1){
}


let menuo = 3;
//  koks metų laikas?
// 12, 1, 2 - žiema
// 3, 4, 5 - pavasaris
switch(menuo){
    case 12: case 1: case 2:
        console.log("Žiema.");
        break;
    case 3: case 4: case 5:
        console.log("Pavasaris.");
        break;
    default:
        console.log("Klaida");
}

let a = 4;

let kvadSaknis = Math.sqrt(a); // 2