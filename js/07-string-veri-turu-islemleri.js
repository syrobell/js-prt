// String Veri Türü İşlemleri

let email = "adnandedeoglu@iskurboya.com"
let firstName = "adnan"
let lastName = "Dedeoglu"

// String karakter sayısı -> length
console.log(email.length)

// ilk karakteri bulmak -> [0]
console.log(email[0])
console.log(firstName.charAt(0))

// büyük harf / küçük harf:
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi search etmek

console.log(email.search("@"))
console.log(email[13])

email.search('olmayan') // -1

// Bellir bir yere kadar olanı almak
console.log(email.slice(0,13))
console.log(email.slice(14)) //domain bilgisi 

let domain = email.slice(email.search('@') + 1)
console.log(domain)

console.log(domain.slice(0, domain.indexOf('.')))

// Değiştirme Replace
email = email.replace('iskurboya.com' , 'kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı? Includes?
email.includes('krfghkdfkh') //false
email.includes('@') //true

// istedigim bilgiyle başlayıp bitti mi? endswith
email.endsWith(".org") // true

// ilk harflerini büyük yapmak
firstName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`
console.log(firstName)