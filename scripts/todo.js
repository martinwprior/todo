document.getElementsByClassName("btn-sign-up")[0].addEventListener("click", function(event){
    if(document.getElementsByClassName("wrapper-menu")[0].style.display = "none"){
            document.getElementsByClassName("wrapper-signup")[0].style.display = "block";
    } else {
        refresh();
    }
});

// display the Signup form 


document.getElementsByClassName("btn-login")[0].addEventListener("click", function(event){
    if(document.getElementsByClassName("wrapper-menu")[0].style.display = "none"){
        document.getElementsByClassName("wrapper-login")[0].style.display = "block";
    } else {
        refresh();
    }
// display the Login form 
});

function refresh(){
    document.getElementsByClassName("wrapper-menu")[0].style.display = "display";
    document.getElementsByClassName("wrapper-signup")[0].style.display = "none";
    document.getElementsByClassName("wrapper-login")[0].style.display = "none";
};
// ---------------------------to get sign-up input and put in local.storage-------------------------------
function store(){ //stores items in the localStorage
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var eMail = document.getElementById('eMail').value;
    var passwd = document.getElementById('passwd').value;

    const user = {
        fName: fName,
        lName: lName,
        eMail: eMail,
        passwd: passwd,
    }

    window.localStorage.setItem(eMail,JSON.stringify(user));  //converting object to string, required for local.storage
}

function retrieveRecords(){ //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrieve records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("toDoForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
    document.getElementById("printButton").onclick = printAll
    document.getElementById("passwdButton").onclick = signIn
}
// A nice little function to print out all local.storage
function printAll(){
    var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}
};
// https://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables

// sign In    NOT WORKING
function signIn(){
    var eMail = document.getElementById('eMailKey').value;
    var passwdSignIn = document.getElementById('passwdSignIn').value;
    console.log(eMail, passwdSignIn);
};