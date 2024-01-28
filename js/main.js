var signName = document.getElementById("siName")
var signEmail = document.getElementById("siEmail")
var signPass = document.getElementById("siPass")



var userList = [];

if(localStorage.getItem("users") != null){
    userList = JSON.parse(localStorage.getItem("users")) 
}


function main(){
    var user = {
        name: signName.value ,
        email: signEmail.value ,
        password: signPass.value ,
    }

    for(var i=0;i<userList.length;i++){
        if(userList[i].name == signName.value || userList[i].email == signEmail.value){
            window.alert("sorry this info is signed before ")
            return
        }
    }

    userList.push(user)
    localStorage.setItem("users",JSON.stringify(userList))
    window.location.href = "index2.html"



    
}




function login(){
    var loginEmail = document.getElementById("logEmail")
    var loginPass = document.getElementById("logPass")
    
    for(i=0;i<userList.length;i++){
        if(userList[i].email == loginEmail.value && userList[i].password == loginPass.value){

            window.location.href = "home.html"
            return 
        }
    }
    window.alert("wrong info")
}

