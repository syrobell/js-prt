let userName = prompt("Kullanici Bilginizi Yazınız")
let info = document.querySelector("#info")

// short if ternary:
// kosul ? dogruysa : yanlışsa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilginiz Boş Olamaz "}`