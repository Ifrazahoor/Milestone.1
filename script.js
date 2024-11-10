// Get refrence to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-Display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect inpute values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiace = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dymacally
    var resumeHTML = "/n    <H2><b>Resume</b></h2>/n    <h3>Personal Information></h3>/n   <p><b>Name:</b>".concat(name, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n            <p><b>Phone:</b>").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n             <h3>Experiance</h3>\n            <p>").concat(experiace, "</p>\n\n             <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n          ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log('The resume display element is missing');
    }
});
