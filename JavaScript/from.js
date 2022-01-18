function fun(){
    var attempt=3;
 var name = document.getElementById("Name").value;
 var password =document.getElementById("password").value;
 console.log("name is:"+name);
 var attempt=3;
 if(name=="Rahul" && password=="admin"){
     alert("Login Succesful");
     window.location.href("file:///C:/Users/Dell/Documents/ToLetPlus/index.html");
     return false;
 }
 else{
     attempt--;
     //alert("You Have Left "+attempt+" Attempt");
     document.getElementById("Name").innerHTML=  
" <img src='http://www.javatpoint.com/javascriptpages/images/unchecked.gif'/> Password must be greater than 6";  

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