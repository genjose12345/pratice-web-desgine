function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML = "Enter Usernamer*";
        return false;
    }
    else if(document.Formfill.Username.value.length < 6){
        document.getElementById("result").innerHTML = "Enter ateast 6 letter*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    }
    else if(document.Formfill.password.value==""){
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    }
    else if(document.Formfill.password.value.length<6){
        document.getElementById("result").innerHTML = "password must be 6-digits*";
        return false;
    }
    else if(document.Formfill.Cpassword.value!== document.Formfill.CPassword.value){
        document.getElementById("result").innerHTML = "Password does not match*";
        return false;
    }
    else if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML = "please confirm password*";
        return false;
    }
    

}