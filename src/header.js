let header;

document.addEventListener('DOMContentLoaded', () => {
    header = document.getElementById('header');
});

export function handleScroll() {
    if (!header) {
        header = document.getElementById("header");
        if (!header) return;
    }

    let scrollY = window.scrollY;

    scrollY !== 0
        ? header.classList.add('shadow')
        : header.classList.remove('shadow');
}
