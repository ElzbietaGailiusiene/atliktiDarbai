
// for (let i = 1; i <= 9; i++) {
//     console.log(i + "-" + Math.pow(a, 2));
// }


// for(let i = 1; i <= 9; i++){
//     //     if ( i == 5 ){
//     //         continue;
//     //     }
//     console.log(i);
//     }
//     //1. uzduotis

//     for(let i = 1; i <= 9; i=i*i){
//         console.log(i);
//         }


// for(let i = 1; i <= 9; i++){
//     console.log(i);
//     }




// let T=+prompt("Bako talpa");
// let K=+prompt("Kuro sanaudos");

// let dienos=1;

// console.log("Kiek isipyle kuro" +T);
// while(T>0){
//     if(dienos%2==0){
//     T=T-K;
//     dienos++;}
//     else{

//         T=T-2*K;
//         dienos++;

//     }
//     dienos=dienos-1;
// }
//     console.log("Dienu skaicius" +dienos);
// /let bakoTalpa=+prompt("Kiek kuro isipyle");
//let kuroSanaudos=+prompt("Kuro sanaudos");
//let diena=1;

//console.log("Kiek dienu keliavo:" +bakoTalpa);
//while(bakoTalpa>0){
//if(diena%2==0){
//bakoTalpa=bakoTalpa-kuroSanaudos;
//diena++;
//}
//else{
//bakoTalpa=bakoTalpa-2*kuroSanaudos;
//diena++ ;
//}

//}
//diena=diena-1;



let saldSK = +prompt("Iveskite rastu saldainiu skaiciu");
let saldSKcopy = saldSK;
let suma = 0;
let a = 3;
let n = 1;
console.log("Kiek saldaniu suvalge" + saldSK);
while (suma < saldSK) {
    console.log(a);
    suma = suma + a;
    a = a + 5;
    n++;
}

// while (saldSKcopy > 0) {
//     saldSKcopy = saldSKcopy - a;
//     console.log(a);
//     a++;
// }
console.log("dienos" + (n - 1));





//let skaicius = + prompt("Iveskite skaiciu");

//if (skaicius == 0) {
// console.log("Nulis");
//} else if (skaicius > 0) {
//console.log("Teigiamas");
//} else if (skaicius < 0) {
//console.log("Neigiamas");
//} else {
//console.log("Kita");
//}

// let orai = + prompt("Orų prognozė nuo sk, 1 iki 4");

// switch (orai) {
//     case 1:
//         console.log("Saulėta");
//         break;
//     case 2:
//         console.log("Lietinga");
//         break;
//     case 3:
//         console.log("Vėjuota");
//         break;
//     case 4:
//         console.log("Sniegas");
//         break;
//     default:
//         console.log("tokio kodo nera");

// }


// let kampas = + prompt("Iveskite kampo dydi");
// if (kampas > 0) {
//     switch (kampas) {
//         case 90:
//             console.log("status");
//             break;
//         case 180:
//             console.log("istiestinis");
//             break;
//         case 360:
//             console.log("pilnutinis");
//             break;

//         default:
//             console.log("tokio pavadinimo nera");
//     }
// } else if (kampas <= 0) {
//     console.log("Kampo dydis t.b. teigiams skaicius");
// }








// let h=+prompt("Iveskite laika valandomis");
// let min=+prompt("Iveskite laika minutemis");
// let min=+prompt("Iveskite laika minutemis");




// let dabartinisLaikas=Math.round((h*60*60+min*60+trukmeMIN)/60);
// let nusileidimoLaikasMIN=trukmeMIN%60;

// console.log("Nusileidimo laikas VAL:" +nusileidimoLaikasVAL);
// console.log("Nusileidimo laikas MIN:"+nusileidimoLaikasMIN);





// let h=+prompt("Iveskite skrydzio pradzia valandomis");
// let min=+prompt("Iveskite skrydzio pradzia minutemis")
// let trukmeMIN=+prompt("Iveskite skrydzio trukme minutemis");

// let nusileidimoLaikasVAL=Math.round((h*60+min+trukmeMIN)/60);
// let nusileidimoLaikasMIN=trukmeMIN%60;

// console.log("Nusileidimo laikas VAL:" +nusileidimoLaikasVAL);
// console.log("Nusileidimo laikas MIN:"+nusileidimoLaikasMIN);




// let ct=+prompt("Iveskite graza centais");
// let eg=Math.round(ct/100);
// let ctg=ct-eg*100;
// console.log("Kiek graza eurais:" +eg);
// console.log("Kiek graza centais:"+ctg);



// let saldainiSK=+prompt("Iveskite saldaniu skaiciu");
// let mokiniuSK=+prompt("Iveskite mokiniu skaiciu");
// let poKiekKiekvienam=Math.round(saldainiSK/mokiniuSK);
// let likoMokytojai=Math.round(saldainiSK-mokiniuSK*poKiekKiekvienam);

// console.log("Kiek saldaniu kiekvienam:" +poKiekKiekvienam);
// console.log("Kiek liko mokytojai:"+likoMokytojai);



// let dienuSK=+prompt("Iveskite dienu skaiciu");
// let savaiciuSK=Math.round(dienuSK/7);
// console.log("Kiek savaiciu praejo nuo metu pradzios:" +savaiciuSK);



// let kiekisperVAL=18;
// let bendrasKiekisPerDiena=kiekisperVAL*24;
// let bendrasKiekisPerSAV=kiekisperVAL*24*7;
// console.log("Kiekis per valanda:" +bendrasKiekisPerDiena);
// console.log("Kiekis per savaite:" +bendrasKiekisPerSAV);



// let atstumasKM=+prompt("Iveskite atstuma km")
// let atstumasM=+prompt("Iveskite atstuma m")
// let bendrasAtstumasM=atstumasKM*1000+atstumasM;
// console.log("Atstumas metrais:" +bendrasAtstumasM)



// let kampas1 = +prompt("Įveskite kampo 1 dydį");
// let kampas2 = +prompt("Įveskite kampo 2 dydį");
// let Ieskomaskampas3 = 180 - kampas1 - kampas2;
// console.log("Nežinomo kampo didumas: " + Ieskomaskampas3);


// let krastine1 = +prompt("Iveskite krastines 1 dydi");
// let krastine2 = +prompt("Iveskite krastines 2 dydi");
// let krastine3 = +prompt("Iveskite krastines 3 dydi");
// let perimetras = krastine1 + krastine2 + krastine3;
// console.log(`Trikampio perimetras${perimetras}`);

// let kvadSaknis = Math.sqrt(a); // 2


// //let atstumasKM = +prompt("Įveskite atstumas 1 dydį");
// //let IeskomasatstumasM = 1000 * atstumasKM;
// //console.log("Nežinomo atstumas metrais: " + IeskomasatstumasM);


// let studentuSK = 135;
// let grupiuSK = 25;
// let visoAsmenu = studentuSK * grupiuSK;

// console.log("Studentu skaicius fakultete:" + visoAsmenu);



// let dalyviuSK = 20;
// let saldainiuSK = 143;
// let Kiekivienasgavopo = saldainiuSK / dalyviuSK;
// console.log("Kiekivienas gavo po:" + Kiekivienasgavopo);

// let likoSaldainiuMokytojai = Math.floor(saldainiuSK - Kiekivienasgavopo * dalyviuSK);

// console.log("Mokytojai liko saldainiu:" + likoSaldainiuMokytojai);


// //let kampas1 = +prompt("Įveskite kampo 1 dydį");
// //let kampas2 = +prompt("Įveskite kampo 2 dydį");

// //let Ieskomaskampas3 = 180 - kampas1 - kampas2;
// //console.log("Nežinomok kampo didumas: " + Ieskomaskampas3);



// //let sveikasSkaicius=+prompt("Iveskite skaiciu");

// //console.log("Sveikas skaicius:"+sveikasSkaicius);

// //if (sveikasSkaicius > 0) { 
//     //console.log("Kvadratine saknis:" +Math.sqrt(sveikasSkaicius));
// //} else {
//     //console.log("Klaida");
// //}


// let kaina=+prompt("Iveskite prekes kaina");
// let kiekis=+prompt("Iveskite prekiu kieki");
// let suma= kaina*kiekis;
// //console.log("Mokejimo suma:"+ suma);
// if(kiekis>3){
//     console.log("suma su nuolaida:"+suma/1.2)
// }
// else if(kiekis<3){
//     console.log("suma be nuolaidos:"+suma)
// }

// let 