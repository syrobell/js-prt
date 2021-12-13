// 0 ve 1'i anlamak ->
let isActive = false // 0
isActive = true // 1 
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // True
Boolean("0") // True
Boolean("") // False

userName = "user"
console.log("Kullanıcı Adı var mı? ",Boolean(userName))

// 0 , -0, null, false ,NaN, undefined, ("") ->
Boolean(0) //false
Boolean(-0) //false
Boolean(-0.1) //true
Boolean(0 === 0 ) //true

var w = false || 0; console.log(Boolean(w));