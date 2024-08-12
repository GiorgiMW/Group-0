const form = document.getElementById("form");

const account = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const repeatPassword = form.elements.password2.value;
    const password = form.elements.password.value;
    if(password.length >= 8){
        const Account = function(name,email,password){
            this.name = name;
            this.email = email;
            this.password = password;
        }
        if(password != repeatPassword){
            const p = document.createElement("p");
            p.innerHTML = "Password do not match"
            document.body.appendChild(p)
        } else{
            const p = document.createElement("p");
            p.innerHTML = "succesfully registered"
            document.body.appendChild(p)
            const acc = new Account(name, email, password)
            account.push(acc)
            console.log(account);
        }
    }else{
        alert("password must be greater then 8 character")
    }
})
