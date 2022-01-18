function fun(){
    
 var name = document.getElementById("Name").value;
 var password =document.getElementById("password").value;
 console.log("name is:"+name);
 var attempt=3;
 if(name=="Rahul" && password=="admin"){
     alert("Login Succesful");
     window.location.href("https://rahulyadav1011.github.io/loginpage/index.html");
     return false;
 }
 else{
     attempt--;
     
     alert("You Have Left "+attempt+" Attempt");
      window.location='https://rahulyadav1011.github.io/loginpage/pages/login.html';

     if(attempt==0){
         document.getElementById("Name").disable=true;
         document.getElementById("password").disable=true;
         document.getElementById("submit").disable=true;
         return false;

     }
 }

}
function popup(){
    window.Location.href="http://127.0.0.1:5500/pages/login.html";
}
