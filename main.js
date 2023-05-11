var password =document.getElementById("pass");
var span = document.getElementById("strength");
var para= document.getElementById("message"); 
var show_onn= document.querySelector(".show_on");
var show_off= document.querySelector(".show_off");
var opt1 = /[a-z]/;
var opt2 = /\d+/;
var opt3 =  /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

onload = function () {
    
    show_off.style.display="none";
}
function control(){
    if(password.value.length <=4 && (password.value.match(opt1)||password.value.match(opt2)||password.value.match(opt3))){
        password.style.borderBottomColor="#ff4757";
        span.innerHTML="WEAK";
        span.style.color="#ff4757";
        para.style.display="block";
    }
    if(password.value.length >4 && ((password.value.match(opt1) && password.value.match(opt2)) || (password.value.match(opt2) && password.value.match(opt3)) || password.value.match(opt1) && password.value.match(opt3))){
        password.style.borderBottomColor="#ffa500";
        span.innerHTML="AVERAGE";
        span.style.color="#ffa500";
        para.style.display="block";
    }
    if(password.value.length >8 &&(password.value.match(opt1) && password.value.match(opt2) && password.value.match(opt3) )){
        password.style.borderBottomColor="rgb(35,173,92)";
        span.innerHTML="STRONG";
        span.style.color="rgb(35,173,92)";
        para.style.display="block";
    }
}
function show_on(){
    if (pass.type==="password"){
        pass.type="text";
        show_onn.style.display="none";
        show_off.style.display="block";

    }
    else{
        pass.type="password";
        show_off.style.display="none";
        show_onn.style.display="block";
    }
}