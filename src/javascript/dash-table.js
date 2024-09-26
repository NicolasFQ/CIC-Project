
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('chbx');

    const savedState = localStorage.getItem('switchState');
    if (savedState === 'true') {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    checkbox.addEventListener('change', () => {
        localStorage.setItem('switchState', checkbox.checked);
    });
});



const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}
