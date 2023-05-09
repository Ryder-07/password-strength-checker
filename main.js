var password =document.getElementById("pass");
var span = document.getElementById("strength");
var para= document.getElementById("message"); 
var opt1 = /[a-z]/;
var opt2 = /\d+/;
var opt3 =  /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


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