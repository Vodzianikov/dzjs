// 1) Форма авторизации и регистрации - очень популярная и неотъемлемая часть многих вебсайтов. Сейчас вы разработаете ее на JavaScript...
let existedUserLogin = ("the_best_user")
let existedUserPassword = ("12345678")
let userLogin = prompt("Введите логин")

let userPassword = +prompt("Введите пароль")
        
function fpasd (login,pasword){
    let userLoginTrim = userLogin.trim()
    let userPasswordTrim = userPassword
               
    if(userLogin == login || userPassword == pasword){
    let yesLoginPassword = alert("Добро пожаловать, userLogin!")     
    console.log(yesLoginPassword)
    }else{
        let nan = alert("Логин и (или)Пароль введены неверно!")
        console.log(nan)
    }
    console.log(userLoginTrim)
console.log(userPasswordTrim)
}
fpasd("the_best_user","12345678")

// console.log(userPasswordTrim)