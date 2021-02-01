toDoObj = {
    firstName: "John",
    lastName: "Doe",
    eMail: "jdoe@gmail.com",
    passWord: "ir123456",
    toDo: {
        date: "01/02/2021",
        task: "go shopping"
    },
}
console.log(toDoObj);

// var submit = document.getElementById("submit");
// submit.onclick = function(){

//     var name = document.getElementById("name").value;
//     var city = document.getElementById("city").value;

//     document.getElementById("outputName").innerText = name;
//     document.getElementById("outputCity").innerText = city;
    
// }
var submit = document.getElementById("submit");

submit.onclick = function(){

   toDoObj.firstName = document.getElementById("firstName").value;
   toDoObj.lastName = document.getElementById("lastName").value;
   toDoObj.eMail = document.getElementById("eMail").value;
   toDoObj.passWord = document.getElementById("passWord").value;

    document.getElementById("outputFirstName").innerText = toDoObj.firstName;
    document.getElementById("outputLastName").innerText = toDoObj.lastName;
    document.getElementById("outputeMail").innerText = toDoObj.eMail;
    document.getElementById("outputPassWord").innerText = toDoObj.passWord;
    
}
