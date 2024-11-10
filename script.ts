// Get refrence to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-Display') as HTMLDivElement;

//Handle form submission
form.addEventListener('submit' ,(event: Event)=> {
    event.preventDefault();//prevent page reload

    //collect inpute values
    
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experiace=(document.getElementById('experiance') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dymacally
    const resumeHTML =`
    <H2><b>Resume</b></h2>
    <h3>Personal Information></h3>
    <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
            <p><b>Phone:</b>${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

             <h3>Experiance</h3>
            <p>${experiace}</p>

             <h3>Skills</h3>
            <p>${skills}</p>
          `;

          //Display the generated resume
          if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
          }else{
            console.log('The resume display element is missing.');
          }
});