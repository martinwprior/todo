document.getElementsByClassName("btn-sign-up")[0].addEventListener("click", function(event){
    if(document.getElementsByClassName("wrapper-menu")[0].style.display = "none"){
            document.getElementsByClassName("wrapper-signup")[0].style.display = "block";
    } else {
        console.log("refresh");
        refresh();
    }
});

// display the Signup form 


document.getElementsByClassName("btn-login")[0].addEventListener("click", function(event){
    if(document.getElementsByClassName("wrapper-menu")[0].style.display = "none"){
        document.getElementsByClassName("wrapper-login")[0].style.display = "block";
    } else {
        console.log("refresh");
        refresh();
    }
// display the Login form 
});

function refresh(){
    document.getElementsByClassName("wrapper-menu")[0].style.display = "display";
    document.getElementsByClassName("wrapper-signup")[0].style.display = "none";
    document.getElementsByClassName("wrapper-login")[0].style.display = "none";
};
// ----------------------------------------------------------



// form.js
const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the 
console.log(url);
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  console.log(data);
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  const message = "Form draft has been saved!";
  displayAlert(message);
};

/**
 * This function displays a message
 * on the page for 1 second
 *
 * @param {String} message
 */
const displayAlert = message => {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(function() {
    alertBox.style.display = "none";
  }, 1000);
};

/**
 * This function populates the form
 * with data from localStorage
 *
 */
const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
        console.log(element);
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
    const message = "Form has been refilled with saved data!";
    displayAlert(message);
  }
};

document.onload = populateForm(); // populate the form when the document is loaded

displayAlert("the quick brown fox");
