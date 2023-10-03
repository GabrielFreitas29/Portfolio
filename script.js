function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


//Dark Theme

const chk =  document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

function showDarkTheme() {
    var showDark = getElementById('darkThemeId');
    showDark.style.display = 'block'
}