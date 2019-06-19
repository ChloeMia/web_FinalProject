function chat(e) {
    if(e.keyCode == 13){
        db.collection('message').doc().set({
            name : getCookie("name"),
            message : document.getElementById("chat").value
        })
        return false;
    }
}

function initTextArea(){
    var signin = getCookie("signin");
    alert(signin);
    if(signin == ""){
        document.getElementById("chat").innerHTML = "Please sign in first"
        document.getElementById("chat").disabled = true;
    }
}