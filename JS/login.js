function auth() {
    var email1 = "rahul@gmail.com";
    var password = "1234";
    var email = document.getElementById("email").value;
    var passs = document.getElementById("password").value;

    if(email1 != email){
        document.getElementById("email").style.borderColor="red";
        document.getElementById("container").style.background="red";
        document.getElementById("msg").innerHTML="Wrong Username";
        document.getElementById("log").style.boxShadow="5px 5px 10px red, -5px -5px 10px red";
    }
    else{
        document.getElementById("email").style.borderColor="blue"         
    }
    if(passs != password){
        document.getElementById("password").style.borderColor="red"
        document.getElementById("container").style.background="red"
        document.getElementById("msg").innerHTML="Wrong password"
        document.getElementById("log").style.boxShadow="5px 5px 10px red, -5px -5px 10px red";

    }
    else{
        document.getElementById("password").style.borderColor="blue"         
    }

    if(email1 != email && passs != password)
    {
        document.getElementById("msg").innerHTML="Wrong Username & password"
        document.getElementById("div2").style.boxShadow="5px 5px 10px red, -5px -5px 10px red";
    }
    if (email == email1 && passs == password) {
        window.location.assign(".//HTML/Home.html")
    }
}

function pass() {
    var passs = document.getElementById("password").value;
    document.getElementById("password").setAttribute("type", "Text")
    
}
function hide() {
    var passs = document.getElementById("password").value;
    document.getElementById("password").setAttribute("type", "password")
}