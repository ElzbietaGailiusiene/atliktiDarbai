//  while
// 1. Nuo
// 2. Iki
// 3. Žingsnis
//let a = 1;
//while (a < 6) {
//console.log("Justina");
//a++; // a = a + 1;
//}
// sakiniai
// 1. 1 < 6, 2
// 2. 2 < 6, 3
// 3. 3 < 6, 4
// 4. 4 < 6, 5
// 5. 5 < 6, 6
// 6. 6 < 6 -> false


// Sumos skaičiavimo algoritmas
//let sald=+prompt("Martynas rado saldainiu");
//let suma = 0;
//let a=0;
//console.log("Kiek saldainiu suvalge"+sald);
//while (suma<sald) {
//console.log(a);
//suma = suma + a;
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// ...
// a++;
//}
//console.log(a-1);


let bakoTalpa=+prompt("Kiek kuro isipyle");
let kuroSanaudos=+prompt("Kuro sanaudos");
let diena=1;

console.log("Kiek dienu keliavo:" +bakoTalpa);
while(bakoTalpa>0){
if(diena%2==0){
bakoTalpa=bakoTalpa-kuroSanaudos;
diena++;
}
else{
bakoTalpa=bakoTalpa-2*kuroSanaudos;
diena++ ;
}

}
diena=diena-1;

console.log("dienu skaicius" + diena);




let veiksmas = prompt("Iveskite veiksmo simboli");
let skaicius;
let suma = 0;
let max = 0;
let min=Number.MAX_VALUE;

switch (veiksmas) {
    case "1":
        while (true) {
            skaicius = +prompt("Iveskite skaiciu");
            console.log(skaicius);
            suma = suma + skaicius;
            if (skaicius == 0) {
                break;
            }
            console.log("Suma: " + suma);
        }

    case "2":
        while (true) {
            skaicius = +prompt("Iveskite skaiciu");
            suma = suma - skaicius;
            if (skaicius == 0) {
                break;
            }
            console.log("Suma: " + suma);
        }

    case "3":
        while (true) {
            skaicius = +prompt("Iveskite skaiciu");
            suma = suma * skaicius;
            if (skaicius == 0) {
                break;
            }
            console.log("Suma: " + suma);
        }

    case "4":
        while (true) {
            skaicius = +prompt("Iveskite skaiciu");
            console.log(+max);
            max = Math.max(max, skaicius);
            if (skaicius == 0) {
                break;
            }

        }

    case "5":
        while (true) {
            skaicius = +prompt("Iveskite skaiciu");
            console.log(+min);
            min = Math.min(min, skaicius);
            if (skaicius == 0) {
                break;
            }

        }
}
//console.log("atsakymas"+suma);
