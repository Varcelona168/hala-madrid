alert ( `5%2=2   `+  `Va qoldiq`+ 5 % 2 )

alert(Math.floor(Math.random() * 10) + 1); // 1 dan 10 gacha random son



let son = 12.510;
alert(`JAvob` + Math.floor(son)); 


function harfSanash() {
  let soz = "MARS IT SCHOOL";
  let harfSoni =  `Mars it school so'zida shunja harf bor:`+ soz.replace  (  /\s/g, "" ) .length; 
  alert(harfSoni); 
}
harfSanash();
  

function mars10marta() {
  for (let i = 0; i < 10; i++) {
    console.log("MARS IT SCHOOL");
   
  }
}
mars10marta( );


let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z"];
let ism = harflar[16] + harflar[19] + harflar[17] + harflar[18] +  harflar[0] + harflar[11]; // masalan: "mark"
console.log(ism);



let yosh = prompt(`Yoshingizni kiriting`)
if (yosh > 18) {
  console.log(`Siz balog'at yoshiga yetgansiz`);
}
else if (yosh == 18) {
  console.log(`Balog'at yoshi muborak`);
}
else{
  console.log(`Siz balog'at yoshiga yetmagansiz`);
  
}

let ism2= prompt(`Ismingizni kiriting`);
let teskari = ism2.split("").reverse().join("")
console.log(teskari)

let ismDom = prompt(`Ismingiz`)
let yoshDom = prompt (`yoshingiz`)
let p = document.createElement("p")
p.textContent = "Ismingiz: " + ismDom + ", Yoshingiz: " + yoshDom;

p.style.fontSize = "20px";
p.style.color = "blue";
p.style.fontWeight = "bold";

document.body.appendChild(p);
// let ismDom = prompt("Ismingiz:");
// let yoshDom = prompt("Yoshingiz:");
// let p = document.createElement("p");
// p.textContent = Ismingiz ${ismDom}, Yoshingiz: ${yoshDom};
// p.style.fontSize = "20px";
// p.style.color = "blue";
// p.style.fontWeight = "bold";
// document.body.appendChild(p);


let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let juftSonlar = sonlar.filter(son => son % 2 === 0);
console.log(juftSonlar);