console.log ("Kohta A")
let arvo1 = -43
let arvo2 = 55
if (arvo1 < arvo2) console.log(arvo2)
if (arvo2 < arvo1) console.log(arvo1)

console.log ("Kohta B")
if (arvo1 === arvo2) console.log("luvut omat samat")

console.log("Kohta C")
let s1  
let s2 
let s3
s1 = -3
s2 = -56
s3 = -54
if (s1 < s2 && s2 > s3) console.log (s2)
if (s2 < s1 && s1 > s2) console.log (s1)
if (s1 < s3 && s3 > s2) console.log (s3)

console.log ("Kohta D")
let a1 
let a2 
a1 = 56000
a2 = 61000
if (a1 < a2) console.log("Tappio")
let a3 
let a4
a3 = 54000
a4 = 50000
if (a3 > a4) console.log("Voittoa")
console.log("Kohta E")
let vastaus =prompt("oletko kissa- vai koiraihminen");
if(vastaus == "koira") console.log("Olet väärässä.")
if(vastaus == "kissa") console.log("Täysin oikein! <3")
console.log("Kohta F")
let numerot =prompt("Anna ensimmäinen luku")
let numerot2 =prompt("Anna toinen luku")
let laskutoimitus =prompt("Anna laskutoimitus mitä haluat käyttää, +, -+ /, *")
numerot = Number(numerot)
numerot2 = Number(numerot2)
if(laskutoimitus =="+"){
    console.log(numerot+numerot2);
}
 
else if(laskutoimitus =="/"){
    console.log(numerot/numerot2);
}
 
else if(laskutoimitus =="-"){
    console.log(numerot-numerot2);
}
else if(laskutoimitus =="*"){
    console.log(numerot*numerot2);
}