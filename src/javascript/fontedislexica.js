document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('chbx-dislexia');

    function updateFontClass() {
        if (checkbox.checked) {
            document.documentElement.classList.add('font-open-dyslexic');
        } else {
            document.documentElement.classList.remove('font-open-dyslexic');
        }
    }

    function loadCheckboxState() {
        const storedState = localStorage.getItem('dislexiaCheckboxState');
        if (storedState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
        updateFontClass();
    }

    checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        localStorage.setItem('dislexiaCheckboxState', isChecked);
        updateFontClass();
    });

    loadCheckboxState();
});