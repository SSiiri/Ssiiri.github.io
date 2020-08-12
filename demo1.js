console.log ("kohta A")

let admin; //muuttujan esittely
let name //muuttujan esittely
name ="Juha" // muuttujalle arvo
admin = name // muuttujan arvo sijoitetaan toiselle muuttujalle
console.log(admin) // tulostetaan konsoliin muuttujan admin arvo


console.log ("kohta B")
let planeetta;
let guest;

console.log ("kohta C")
let sade;
let piiri;
let ala;
let halkaisija = 3;

sade = halkaisija/2;
piiri = 2 * Math.PI * sade;
ala = Math.PI * sade * sade 
console.log(" ympyrän säde on " + sade + " piiri on " + piiri + " ja pinta-ala on " + ala)

console.log ("kohta D")
let matka = 370; 
let matkanhinta;
let bensanhinta = 1.56;
let kulutus = 5.5;

matkanhinta = kulutus * matka/100 * bensanhinta
// bensaa kuluu 5.5*370/100 ja se maksaa kulutus * bensanhinta//
console.log(" Matka maksaa " + matkanhinta + " euroa ");
