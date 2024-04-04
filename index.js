var emailArray=[];
var passwordArray=[];


var regBox = document.getElementById("register");
var loginBox = document.getElementById("login");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun()
{
    event.preventDefault();
    regBox.style.visibility="visible";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="rgb(12, 132, 189)";
    loginTab.style.backgroundColor="limegreen";
}

function loginTabFun()
{
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="limegreen";
    loginTab.style.backgroundColor="rgba(11,177,224,0.82)";

    
}
function forgotFunTab()
{
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    regTab.style.backgroundColor="rgba(11,177,224,0.82)";
    loginTab.style.backgroundColor="rgba(11,177,224,0.82)";
}
function login()
{
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i=emailArray.indexOf(email);
    if(emailArray.indexOf(email) == -1)
    {
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("password does not match.");
        return ;
    }
    else{
        alert(email+"Login successfull welcome");
        document.getElementById("se").value ="";
        document.getElementById("sp").value ="";
    }




}
function register()
{
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if(email=="")
    {
        alert("Email requird.");
        return ;
    }
    else if (password == ""){
        alert('password required.');
        return ;
    }
    else if(passwordRetype =="")
    {
        alert("password required");
        return;
    }
    else if(password !== passwordRetype)
    {
        alert("password doesn't match");
        return;

    }
    else if (emailArray.indexOf(email)==-1)
    {
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + "Thanks for registration. \nTry to login Now");


        document.getElementById('re').value="";
        document.getElementById('rp').value="";
        document.getElementById('rrp').value="";


    }

}
function forgot()
{
    event.preventDefault();
    var fe=document.getElementById("fe").value; 
    if(emailArray.indexOf(fe) == -1)
    {
        if (fe == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";


}