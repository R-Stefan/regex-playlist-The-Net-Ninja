/*
Comments as personal notes


First way of generating a regular expression
let reg = /[a-z]/gi;
*/
/* Second way of generating (the same) regex
let reg2 = new RegExp(/[a-z]/,"ig");

*/
/*
How this works:

we have a form written in HTML, its input fields should receive new CSS if a correct regex pattern is typed into them. We monitor the input fields by attaching event listeners to keypresses, so at every keypress, the contents of the field are evaluated and if the contents match the regex pattern, the input field gets a green border indicating it's valid.
*/

//we create an object to store regex patterns (instead of creating one variable for each)
const patterns = {
  //ro country code +40
  telephone: /^\+40( ?\d{3}){3}$/,
};

//instead of creating a variable for each input field, we create a single array containing all of them
const inputs = document.querySelectorAll("input");

//validation function which uses the test method valid for regex objects to check a field versus a regex pattern. Here we just named the parameter regex for clarity, it could have any name
function validation(field, regex) {
  // regex is the parameter, .test is the method applied after it detects that the variable regex actually contains a regex statement, field is a parameter, .value is a property of field because we expect field to be an actual HTML field which will have a value assigned to it
  if (regex.test(field.value)) {
    //field.className assigns a class to the field
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

//then we loop through the array of input fields
inputs.forEach((item) => {
  //and we add event listeners for each of them
  item.addEventListener("keyup", (e) => {
    //at each keyup, the element listened to will have its value acted upon by a validation function defined below
    //e.target is the target of the event. We can get away with patterns["e.target.attributes.name.value"] because we can name our keys in the patterns object to match the actual names of the HTML fields they need to  check.
    validation(e.target, patterns[e.target.attributes.name.value]);
  });
});
