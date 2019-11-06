const toggle = document.querySelector('input[name=theme]');

toggle.addEventListener('change', function() {
    if(this.checked) {
        onchange();
        document.documentElement.setAttribute('data-theme', 'dark');

    } else {
        onchange();
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
});

let onchange = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};