//int tanımlama
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Ürünün fiyatı:", price, 
    " KDV Oranı:", tax, 
    " KDV Tutarı:", priceTax,
    " KDV Dahil:", total
    )

// Arttırma Azaltma

let counter = 320 
counter = counter + 1
console.log(counter)
counter += +1
console.log(counter)
counter ++
console.log(counter)

counter --
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

//işlem önceliği mevcuttur
console.log((2+3)*10)

// mod (kalan) alma %;
console.log( 3 % 2)

// 8 ürün alan kutuya hepsi sığacak mı?
console.log(25 % 8 )

// Üs alma **
console.log(2*2*2*2)
console.log(2 ** 4)

// asagi yuvarlama Math.floor
console.log("Aşağı Yuvarlama " + Math.floor(1.9))

// yukarı yuvarlama Math.ceil
console.log("Yukarı Yuvarlama " + Math.ceil(1.9))

// normal yuvarlama
console.log("Yakına Yuvarlama " + Math.round(1.4)
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor içine bilgi gönderildi ", Number("111"))