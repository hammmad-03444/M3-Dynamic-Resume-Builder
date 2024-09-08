//get the form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('finalresume') as HTMLDivElement;
const generateResumeBtn = document.querySelector('.button') as HTMLButtonElement;


interface resumeData {
    name: string;
    email: string;
    phone: string;
    objective: string;
    education: string;
    workExperience: string;
    skills: string[];
}
const resumeData: resumeData = {
    name: '',
    email: '',
    phone: '',
    objective: '',
    education: '',
    workExperience: '',
    skills: [''],
};
//add event listener to the form
form.addEventListener('click', (event) => {
    event.preventDefault();
    //get the form data
    const formData = new FormData(form);
    //loop through the form data
    formData.forEach((value, key) => {
        if (key === 'skills') {
            //add the skills to the resume data
            resumeData[key] = value.toString().split(',');
            return;
        }
        else {
            //add the form data to the resume data
            resumeData[key] = value.toString();
        }
    });
    //generate the resume
    generateResume();
});

function generateResume() {
    //create the resume
    const skillsList = resumeData.skills.map(skill => `<li>${skill}</li>`).join('');
    const resumeHTML = `
        <h1>${resumeData.name}</h1>
        <p>${resumeData.email}<b>|</b>${resumeData.phone}</p>
        <h2>Objective</h2>
        <p>${resumeData.objective}</p>
        <h2>Education</h2>
        <p>${resumeData.education}</p>
        <h2>Work Experience</h2>
        <p>${resumeData.workExperience}</p>
        <h2>Skills</h2>
        <ul>
            ${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        
    `;

    //display the resume
    resume.innerHTML = resumeHTML;
    return resumeHTML;
}

//add validation
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { name, email, phone, objective, education, workExperience, skills } = resumeData
    //check if the form is valid
    if (!name || !email || !phone || !objective || !education || !workExperience || !skills) {
        alert('Please fill in all the fields');
        return;
    }
    //check if the email is valid
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/)) {
        alert('Please enter a valid email');
        return;
    }
    //check if the phone number is valid
    if (!phone.match(/^(\+92|03)\d{9}$/)) {
        alert('Please enter a valid phone number');
        return;
    }
}
);
generateResumeBtn.addEventListener('click', (event) => {

    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resume = document.getElementById('finalresume') as HTMLDivElement;
    const printButton = document.querySelector('.print') as HTMLButtonElement;
    const downloadButton = document.querySelector('.download') as HTMLButtonElement;
    event.preventDefault();
    const { name, email, phone, objective, education, workExperience, skills } = resumeData
    //check if the form is valid
    if (!name || !email || !phone || !objective || !education || !workExperience || !skills) {
        alert('Please fill in all the fields');
        return;
    }
    //check if the email is valid
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/)) {
        alert('Please enter a valid email');
        return;
    }
    //check if the phone number is valid
    if (!phone.match(/^(\+92|03)\d{9}$/)) {
        alert('Please enter a valid phone number');
        return;
    }


    form.style.display = 'none';
    resume.style.display = 'block';
    printButton.style.display = 'block';

}
);
let printButton = document.querySelector(".print")
printButton?.addEventListener('click', generateResume)
function printResume() {
    window.print()
}

