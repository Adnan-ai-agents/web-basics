const departments = [
    "Education",
    "Assistance to disaster affectees",
    "Monthly family support",
    "Healthcare and lot more"
];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const departmentElement = document.getElementById('department');
    if (isDeleting) {
        currentText = departments[index].substring(0, charIndex--);
    } else {
        currentText = departments[index].substring(0, charIndex++);
    }
    departmentElement.textContent = currentText;

    if (!isDeleting && charIndex === departments[index].length) {
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % departments.length; // Loop through departments
    }

    setTimeout(type, isDeleting ? 75 : 150); // Adjust typing speed
}


document.addEventListener('DOMContentLoaded', type);
