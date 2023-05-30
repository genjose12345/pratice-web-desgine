const form = Document.getElementById('form');
const username = Document.getElementById('firstname');
const lastname = Document.getElementById('lastname');
const email = Document.getElementById('email');
const password = Document.getElementById('password');
const cpassword = Document.getElementById('cpassword');

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    ValidityState();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}
const SuccessMsg = (usernameVal) =>{
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.legnth - 1;
    for(var i=0; i < formContr.length; i ++)
    {
        if(formContr[i].className === "form-control success")
            {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal,sRate,Count);
            }
    
        else
            {
            return false;
            }
    }
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //username
    if(usernameVal ===""){
        setErroMsg(username, 'username cannot be blank');
    }
    else if(usernameVal.length<=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
    }
    //lastName

    if(lastnameVal ===""){
        setErroMsg(lastname, 'lastname cannot be blank');
    }
    else if(lastnameVal.length<=2){
        setErrorMsg(lastname, 'min 3 char');
    }
    else{
        setSuccessMsg(lastname);
    }

    //email
    if(emailVal ===""){
        setErroMsg(email, 'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email not valid');
    }
    else{
        setSuccessMsg(email);
    }
    //password
    if(passwordVal ===""){
        setErroMsg(password, 'password cannot be blank');
    }
    else if(passwordVal.length<=7){
        setErrorMsg(password, 'min 8 char');
    }
    else{
        setSuccessMsg(password);
    }
    //cpassword
    if(cpasswordVal ===""){
        setErroMsg(cpassword, 'confirm password can not be blank');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    setSuccessMsg(usernameVal);
}

function setErroMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = erromsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}