//get the form and resume elements
var form = document.getElementById('resume-form');
var resume = document.getElementById('finalresume');
var generateResumeBtn = document.querySelector('.button');
var resumeData = {
    name: '',
    email: '',
    phone: '',
    objective: '',
    education: '',
    workExperience: '',
    skills: [''],
};
//add event listener to the form
form.addEventListener('click', function (event) {
    event.preventDefault();
    //get the form data
    var formData = new FormData(form);
    //loop through the form data
    formData.forEach(function (value, key) {
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
    var skillsList = resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
    var resumeHTML = "\n        <h1>".concat(resumeData.name, "</h1>\n        <p>").concat(resumeData.email, "<b>|</b>").concat(resumeData.phone, "</p>\n        <h2>Objective</h2>\n        <p>").concat(resumeData.objective, "</p>\n        <h2>Education</h2>\n        <p>").concat(resumeData.education, "</p>\n        <h2>Work Experience</h2>\n        <p>").concat(resumeData.workExperience, "</p>\n        <h2>Skills</h2>\n        <ul>\n            ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n        \n    ");
    //display the resume
    resume.innerHTML = resumeHTML;
    return resumeHTML;
}
//add validation
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = resumeData.name, email = resumeData.email, phone = resumeData.phone, objective = resumeData.objective, education = resumeData.education, workExperience = resumeData.workExperience, skills = resumeData.skills;
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
});
generateResumeBtn.addEventListener('click', function (event) {
    var form = document.getElementById('resume-form');
    var resume = document.getElementById('finalresume');
    var printButton = document.querySelector('.print');
    var downloadButton = document.querySelector('.download');
    event.preventDefault();
    var name = resumeData.name, email = resumeData.email, phone = resumeData.phone, objective = resumeData.objective, education = resumeData.education, workExperience = resumeData.workExperience, skills = resumeData.skills;
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
    downloadButton.style.display = 'block';
});
var printButton = document.querySelector(".print");
printButton === null || printButton === void 0 ? void 0 : printButton.addEventListener('click', generateResume);
function printResume() {
    window.print();
}
