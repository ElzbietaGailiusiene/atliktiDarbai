
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

//2.uzduotis
for(let i = 0; i <= 10; i=i++){
    let square=i*i;
    console.log(i+);
    }

for(let i = 0; i <= 10; i=i++){
    console.log(i);
    }




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

// sudėti skaičius nuo 1 iki 10
// sumos algoritmas
// let suma = 0;
// for(let i = 1; i < 11; i++){
//     suma = suma + i;
// }
// kiekio skaičiavimo algoritmas
// kiek skaičių dalinasi iš 3
let count = 0;
for(let i = 1; i < 11; i++){
    if ( i % 3 == 0){
        console.log(i);
        count++;
        console.log("Tarpinis kiekis: " + count);
    }
}
console.log("Galutinis kiekis: " + count);