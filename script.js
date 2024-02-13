
const hello = async (e) => {
    e.preventDefault();
    console.log("clicked")
    let key = "ema_live_ZoXecj2ffeEdhPCGsbfyl3HNb8t90unZid06CZxn";
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let p = await fetch(url);
    let result = await p.json();                                                                                    //Email_Validator.... 
    
    for(key of Object.keys(result)){
    let q=`${key}=${result[key]}`;
     if(key!=="errors" && result[key]=="undeliverable"){
     let r=document.getElementById("invalid");
     r.innerText="This is a Invalid Email.";
     r.style.border="2px solid black"
     r.style.background="black"
    }
}





const special=document.getElementById("password").value;
let number= await special.toString();
let word=await number.split('');
let s=document.getElementById("special");
if(word.length<5){
  s.innerText="Password Should be 5 Character Long"
  s.style.border="2px solid black"
  s.style.background="black"
}
if(special.search(/[@\#\%\&\_\$]/)==-1){
  s.innerText="Special Character Required."                                                                     //password validation.
  s.style.border="2px solid black"
  s.style.background="black"
}
if(special.search(/[A-Z]/)==-1){
  s.innerText="Password 1 Character must be Uppercase"
  s.style.border="2px solid black"
  s.style.background="black"
}








}

let btn = document.getElementById("sign");
btn.addEventListener("click", hello)







