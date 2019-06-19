function login() {
    db.collection('test').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            if(doc.data().account == document.forms["userform"]["account"].value &&
                doc.data().password == document.forms["userform"]["password"].value){
                location.replace("https://www.w3schools.com/");
            }
        })
    });
    return false;
}

function createAccount() {
    console.log(document.forms["userform"]["name"].value);
    console.log(document.forms["userform"]["account"].value);
    console.log(document.forms["userform"]["password"].value);
    db.collection('test').doc(document.forms["userform"]["name"].value).set({
        name : document.forms["userform"]["name"].value,
        account : document.forms["userform"]["account"].value,
        password : document.forms["userform"]["password"].value
    });
    return false;
}