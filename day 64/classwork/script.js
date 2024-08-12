const form = document.getElementById("form");

const account = [];

const Account = function(username,password){
    this.username = username;
    this.password = password;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const UsernameValue = form.elements.name.value;
    const PasswordValue = form.elements.pass.value;
    if(UsernameValue.length > 5 && PasswordValue.length >= 8) {
        const acc = new Account(UsernameValue,PasswordValue)
        account.push(acc)

        console.log(account);
    }else{
        alert("name's length must be more then 5 and password's length must be more then 8")
    }
})
