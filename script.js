


const body = document.body;
const navbar = document.navbar;
const cream_bubble = document.cream_bubble;
const stylesheet = document.getElementById('mainStylesheet');



function toggleStylesheet() {
    
    // Check the current stylesheet and toggle to the other one
    if (stylesheet.href.includes('css/styles.css')) {
        stylesheet.href = 'css/styles_light.css';
    } else {
        stylesheet.href = 'css/styles.css';
    }

    setTimeout(() => {body.style.transition = 'background-color 0.5s ease-in-out';
    navbar.style.transition = 'background-color 0.5s ease-in-out'; 
    cream_bubble.style.transition = 'background-color 0.5s ease-in-out';
    }, 10);


    // Store the selected theme locally
    localStorage.setItem('selectedTheme', stylesheet.href);
}

document.addEventListener('DOMContentLoaded', function () {
    
    const themeButton = document.getElementById('themeButton');

    body.style.transition = 'none';
    navbar.style.transition = 'none';
    
    // Get the selected theme from local storage
    const selectedTheme = localStorage.getItem('selectedTheme');

    // Set the theme based on the stored value or default to dark theme
    const stylesheet = document.getElementById('mainStylesheet');
    stylesheet.href = selectedTheme || 'css/styles.css';

    console.log("made it into function.")
});
