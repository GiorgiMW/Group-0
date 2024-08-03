const gmail = document.querySelector("#gmail");
const password = document.querySelector("#pass");
const submit = document.querySelector("#submit");

function Register(gmail,password){
    this.gmail = gmail
    this.password = password

}
submit.addEventListener("click", function(e){
    e.preventDefault();
    const datas = new Register(gmail.value,password.value)
    console.log(datas);
})

