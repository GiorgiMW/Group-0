const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userPass = document.querySelector("#user-password");
const forms = document.querySelector("form");
const names = document.querySelector("#name");
const emails = document.querySelector("#email");
const pas = document.querySelector("#pass");
const subm = document.querySelector("#submit");

forms.addEventListener("submit", function(e){
    e.preventDefault();
    userName.textContent += names.value;
    userEmail.textContent += emails.value;
    userPass.textContent += pas.value;
    console.log(names.value + " " + emails.value + " " + pas.value);
})