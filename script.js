const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navigation = document.getElementById("navigation-bar");

if (bar) {
    bar.addEventListener('click', () => {
        navigation.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navigation.classList.remove('active');
    })
}