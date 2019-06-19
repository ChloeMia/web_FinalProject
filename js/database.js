function login() {
    db.collection('test').doc(document.forms["userform"]["account"].value).get().then((doc) => {
        if(doc.exists){
            if(doc.data().password == document.forms["userform"]["password"].value){
                //window.location.href ="index.html"
                document.cookie = "name=" + doc.data().name + ";" + "signin=true";
            }
            else{
                alert("Wrong password");
            }
        }
        else{
            alert("Couldn't find this account");
        }
    });
    return false;
}

function createAccount() {
    db.collection('test').doc(document.forms["userform"]["name"].value).set({
        name : document.forms["userform"]["name"].value,
        account : document.forms["userform"]["account"].value,
        password : document.forms["userform"]["password"].value,
    }).then(function(){
        window.location.href ="index.html";
        document.cookie = "name=" + doc.data().name + ";" + "signin=true";
    });
    return false;
}

