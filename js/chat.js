function chat(e) {
    if(e.keyCode == 13){
        db.collection('message').doc().set({
            name : localStorage.getItem("name"),
            message : document.getElementById("chat").value
        })
        return false;
    }
}

function initTextArea(){
    var signin = localStorage.getItem("sigin");
    console.log(signin);
    alert(signin);
    if(signin != "true"){
        document.getElementById("chat").innerHTML = "Please sign in first"
        document.getElementById("chat").disabled = true;
    }
}