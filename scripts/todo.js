// this object holds the users inf and list of task to do
const toDoObj = { 
	firstName: 'Superman', 'lastName': 'Clark Kent', 
	eMail: "superman@gmail.com", 
	passWord: "ir123456", 
	allies: ['shopping','Schoolrun','cook lunch'], 
	fly() { 
		console.log("my name is Fred"); 
				} 
};
// console.log(toDoObj);
// create a new user for multi-user use
// const user1 = Object.create(toDoObj);
// user1.firstName = "Martin";
// user1.lastName = "prior"
// console.log(user1.firstName + user1.lastName);

var submit = document.getElementById("submit"); // this gets the "Register" button. when pressed collects users data into toDoObj

submit.onclick = function() {

   toDoObj.firstName = document.getElementById("firstName").value;
   toDoObj.lastName = document.getElementById("lastName").value;
   toDoObj.eMail = document.getElementById("eMail").value;
   toDoObj.passWord = document.getElementById("passWord").value;

    document.getElementById("outputFirstName").innerText = toDoObj.firstName;
    document.getElementById("outputLastName").innerText = toDoObj.lastName;
    document.getElementById("outputeMail").innerText = toDoObj.eMail;
    document.getElementById("outputPassWord").innerText = toDoObj.passWord;
    hasRegistered(true);    // calls funtion to remove registry form
}

// select the table and insert values into the columns to show tasks to do
// superman.fly();

// console.log(superman.realName);
//superman.allies = (superman.allies + 'fred');
// superman.allies.push("Fred"); // add a string to the end
// const me = superman.allies.splice(1,1); // remove a 1 string from position 1 ie supergirl
// console.log(superman.allies);

// removes the "register pop-up page when user has regisitered."
function hasRegistered(registered){
let ifRegistered = registered;
if( ifRegistered) {
    const text = document.querySelector(".section-popup");
console.log(text);
text.style.opacity = 0;
} 

// else {
//     const text = document.querySelector(".section-popup");
// console.log(text);
// text.style.opacity = 1;
// ifRegistered = true;
}

// set a variable to keep track of program state
// let shown = true;

// function toggleText() {
//     if (shown) {
//         btn.innerText = "Show Text";
//         text.style.opacity = 0;


//     }
//     else {
//         btn.innerText = "Hide Text";
//         text.style.opacity = 1;
//     }
//     shown = !shown;
// }

// // add event listenr

// btn.addEventListener("click",() => {
//     toggleText();
// })
