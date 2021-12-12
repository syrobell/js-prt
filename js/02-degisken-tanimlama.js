/* 

var serverName = "kodluyoruz.org";
console.log(serverName , "Adoslovakya") 

*/
// Verisiz Tanımlama Undefined olur
let serverName;
console.log(serverName)

// Veri atama değişkene eşittir kullanarak yapılıyor
serverName = "https://syrobell.com"
console.log(serverName)

// let ile direkt değişken de atanabilir
let password = "1234";
console.log(password)

// Let sıra tabanlı çalışırken var sıra tabanlı çalışmaz
// aşağıda ki kullanım hata verirken
/*

console.log(fullName)
let fullName = "Adnan Dedeoglu"

*/
// var ile kullanılan aynı kod undefined verir
var fullName = "Adnan Dedeoglu";
console.log(fullName)

console.log(fullName + " BABA OLUYOR")

fullName = fullName + "Yeni Bilgi";

console.log(fullName)

fullName += "yeni içerik";

console.log(fullName)

// const içeriği dışarıdan değişemez çünkü constant
const serverPassword = "1234" ;  //sadece değişken tanımlanamaz içi dolu olması gerek.
console.log(serverPassword)
