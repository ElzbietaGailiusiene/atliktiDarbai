//*1. uzduotis*//

//*let A = +prompt("Iveskite trikampio krastine A:");
//*let B = +prompt("Iveskite trikampio krastine B:");
//*let C = +prompt("Iveskite trikampio krastine C:");

//*let trikampioPerimetras = A + B + C;

//*console.log("Trikampio perimetras:" +trikampioPerimetras);

//*2. uzduotis*//

//*let A=+prompt("Iveskite pirmo kampo dydi A:");
//*let B=+prompt("Ivekite antro kampo dydi B:");
//*let iekomoKampodydis=180-A-B;

//*console.log("Iskomo kampo dydis C:"+iekomoKampodydis);



//*let h=+prompt("Iveskite laika valandomis");
//*let min=+prompt("Iveskite laika minutemis");
//*let min=+prompt("Iveskite laika minutemis");

//*3. uzduotis*//

//*let A=+prompt("Ivekite atstuma kilometrais");
//*let atstumasmetrais=A*1000;
//*console.log("atstumas metrais"+atstumasmetrais);


//*4. uzduotis*//
//*let vandensKiekisPerVAL=18;
//*let vandensKiekisPerDIENA=vandensKiekisPerVAL*24;
//*let vandensKiekisPerSAVAITE=vandensKiekisPerDIENA*7;

//*console.log("Vandens isbega per diena"+vandensKiekisPerDIENA);
//*console.log("Vandens isbega per savaite"+vandensKiekisPerSAVAITE);



//*5. uzduotis*//
//*let D=+prompt("Iveskite kiek dienu praejo nuo metu pradzios");
//*let savaiciuSkaicius=Math.round (D/7);

//*console.log("nuo metu pradzios praejo tiek savaiciu:"+savaiciuSkaicius);


//*6. uzduotis*//

//*let m=+prompt("Iveskite kiek saldainiu nuoirko mokytoja:");
//*let n=+prompt("Iveskite mokiniu skaiciu:");
//*let kiekSaldaniuGavoKiekvienasMokinys=Math.round(m/n);

//*let kiekSaldainiuLikoMokytojai=m-(kiekSaldaniuGavoKiekvienasMokinys*n);

//*console.log("Kiekvienas moksleivis gavo po" +kiekSaldaniuGavoKiekvienasMokinys);
//*console.log("kiek saldaniu liko mokytojai:"+kiekSaldainiuLikoMokytojai);



//*7. uzduotis*//

//*let grazaCT=+prompt("Kasininke dave tiek centu:")
//*let grazaEG=Math.round (grazaCT/100);
//*let grazaCGT=Math.min (grazaCT/100-grazaEG)*100;

//*console.log("Kasininke dave tiek euru:"+grazaEG);
//*console.log("Kasininke dave tiek centu"+ grazaCGT);

//*8. uzduotis*//
//*let h=+prompt("Iveskite isskridimo laika valandomis");
//*let min=+prompt("Iveskite isskridimo laika minutemis");
//*let trukmeMIN=+prompt("Iveskite skrydzio trukme minutemis");
//*let nusileidimoLaikasVAL=Math.floor((h*60+min+trukmeMIN)/60);
//*let nusileidimoLaikasMIN=trukmeMIN%60;//                       *SIOJE VIETOJE NEAISKU?

//*console.log("Nusileidimo laikas VAL:" +nusileidimoLaikasVAL);
//*console.log("Nusileidimo laikas MIN:"+nusileidimoLaikasMIN);

//*SALYGINIAI//
//*1 uzduotis*//
//*let a=+prompt("Iveskite skaiciu");
//*if(a>=1){

//*console.log("Kvadratine saknis:"+Math.sqrt(a));

//*}
//*else{
    //*console.log("Saknies paskaiciuoti negalima, nes ivestas neigiamas skaicius");
//*}
//*2 uzduotis*//
//*let n=+prompt("Iveskite degtuku skaiciu")
//*if(n%4==0){
   //* console.log("Kvadrata galima padaryti")
//*}
//*else{
    //*console.log("Ngalima padaryti kvadrato")
//*}

//*3 uzduotis*//

//*let k=+prompt("Iveskite prekiu kaina");
//*let n=+prompt("iveskite prekiu skaiciu");
//*let kainasunuolaida=k*0.8*n;
//*let kainabenuolaidos=k*n;
//*if(n>=3){
    //*console.log("Prekiu kaina su 20 proc.nuolaida:"+kainasunuolaida);
//*}
//*if(n<3){
    //*console.log("Prekiu kaina be nuolaidos:"+k*n);
//*}

//*5 uzduotis*//

//*let paz=+prompt("Iveskite ivertinima");
//*if (paz==10){
    //*console.log("Puikiai");
    //*break;
//*}
//*if(paz==9){
    //*console.log("Labai gerai");
//*break;
//*}
//*if(paz==8){
    //*console.log("Gerai");
//*break;
//*}
//*else {
    //*console.log("tokio ivertinimo nera")
//*}


//*6 uzduotis*//

//*let sk=+prompt("Iveskite skaiciu");
//*if(sk>0){
    //*console.log("Teigiamas skacius");

//*}
//*if(sk<0){
    //*console.log("Neigiamas skacius");
    
//*}
//*if(sk==0){
    //*console.log("Nulis");
    
//*}
//*12 uzduotis*//

//*let kodas=+prompt("Iveskite koda");
//*switch(kodas){
    //*case 1://*
//*console.log("Lietinga");
//*break;
//*case 2://*
    //*console.log("Sauleta");
    //*break;
    //*case 3://*
        //*console.log("Sniegas");
        //*break;  
//*default:
    //*console.log("Klaida");
//*}

//*12 uzduotis*//

//*let pirmasSK=+prompt("Iveskite skaiciu");
//*let antrasSK=+prompt("Iveskite antra skaiciu");
//*let simbolis=+prompt("Iveskite simboli:+,-, *,/");
//*let ats;                                            //*ar taip reikia isikirti//
//*switch(simbolis){
    //*case "+":
    //*console.log(ats)
    //*ats=pirmasSK+antrasSK;
    //*break;
    //*case "-":
        //*console.log(pirmasSK-antrasSK);             //*ar uztenka taip/
        //*break;

         //*case "*":
    //*console.log(pirmasSK*antrasSK);
    //*break;
    //*case "/":
        //*console.log(pirmasSK/antrasSK);
        //*break;
        

//*}


//console.log("dienu skaicius" + diena);
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

//*let a=1;
//*while(a<=10){
    //*console.log(a);
    //*a++;

//*}

