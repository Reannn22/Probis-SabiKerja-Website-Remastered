document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    let darkmode = localStorage.getItem('darkmode');

    const enableDarkMode = () => {
        document.body.classList.add('theme-transition');
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }

    const disableDarkMode = () => {
        document.body.classList.add('theme-transition');
        document.body.classList.remove('darkmode');
        localStorage.removeItem('darkmode');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }

    // Check saved preference, default is light mode
    if (darkmode === 'active') {
        enableDarkMode();
    } else {
        disableDarkMode(); // Ensure light mode by default
    }

    themeSwitch.addEventListener('click', () => {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'active') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});