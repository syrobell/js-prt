// Template literals

let username = "adnan"
const DOMAIN = "iskurboya.com"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hoş geldin", " mail adresin:", email)

let info = `Merhaba ${username} sitemize hoş geldin.. mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
`
console.log(info)