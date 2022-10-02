let loginfromid = document.querySelector(".login-from");
let singfromid = document.querySelector(".singup-from");
let forgetpassowerd = document.querySelector(".ForgetPassowerdFrom");
let SingUP1 = document.querySelector(".SingUp1");
let SingUP2 = document.querySelector(".SingUp2");
let SingUP3 = document.querySelector(".SingUp3");

singfromid.style.display = "none";
forgetpassowerd.style.display = "none";
SingUP2.style.display = "none";
SingUP3.style.display = "none";

let isValid = true;
let idforgetclick = true;
let Singup1to2 = true;
let Singup2to3 = true;

function fromhideshow (){
    if(isValid){
        singfromid.style.display = "none";
        loginfromid.style.display = "block";
        isValid = false;
    }else{
        loginfromid.style.display = "none";
        singfromid.style.display = "block";
        isValid = true;
    }
}

function frogetonclick (){
    if(idforgetclick){
        forgetpassowerd.style.display = "none";
        loginfromid.style.display = "block";
        idforgetclick = false;
    }else{
        loginfromid.style.display = "none";
        forgetpassowerd.style.display = "block";
        idforgetclick = true;
    }
}

function singuponetotow (){
    if(Singup1to2){
        SingUP2.style.display = "none";
        SingUP1.style.display = "block";
        Singup1to2 = false;
    }else{
        SingUP1.style.display = "none";
        SingUP2.style.display = "block";
        Singup1to2 = true;
    }
}

function singuptowtotheree (){
    if(Singup2to3){
        SingUP3.style.display = "none";
        SingUP2.style.display = "block";
        Singup2to3 = false;
    }else{
        SingUP2.style.display = "none";
        SingUP3.style.display = "block";
        Singup2to3 = true;
    }
}