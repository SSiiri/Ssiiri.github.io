let nimi = prompt("anna nimesi");
console.log(nimi);

console.log("kohta A")
let vuosi = prompt("Minä vuonna ECMAScript-2015 specifikaatio julkistettiin?"); // pyytää käyttäjältä arvon muuttujalle vuosi
if(vuosi < 2015) {
    console.log("Annoit vuoden" + vuosi);
    console.log("Vastaus on liian aikainen...");
}
else if(vuosi > 2015) {
    console.log("Annoit vuoden" + vuosi);
    console.log("Vastaus on liian myöhäinen...");
}
else console.log("Juuri niin, vuosi on totta kai" + vuosi);


console.log("kohta B")
let ika =prompt("anna ikäsi:");
if (ika >= 14 && ika <= 90) console.log("Ikä on välillä 14 - 90");
if(ika <= 14 || ika >= 90) console.log("Ikä ei ole välillä 14 - 90");

console.log("kohta C")
let luku1 = 0;
let luku2 = "0";
let luku3 = -1;
let luku4 = 1;
let luku5 = 100;

if(luku1 === 0) console.log("nolla");
if(luku2 === 0) console.log("nolla");
else console.log("luku 2 ei ole pienempi");
if(luku4 < luku1 && luku4 < luku5) console.log("välissä");
else if (luku4 < luku1 || luku4 > luku5) console.log("reunassa");
else console.log("ok");
/*jos luku1 on nolla, tulosta "nolla"
jos luku2 on nolla, tulosta "nolla"
jos luku2 on pienempi kuin luku 4, tulosta "luku 2 on pienempi", muuten tulosta "luku 2 ei ole pienempi"
jos luku4 on luku1:n ja luku5:n välissä, tulosta "välissä"
jos luku4 on pienempi kuin $luku1 tai suurempi kuin luku5, tulosta "reunassa", muuten tulosta "ok"*/