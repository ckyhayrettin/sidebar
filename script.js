const sidebarBtn = document.querySelector('.sidebar_btn');
const asidebar = document.querySelector('.asidebar');
const closeBtn = document.querySelector('button');

sidebarBtn.addEventListener('click', function () {
    asidebar.classList.toggle('show');
    if (asidebar.classList.contains('show')) {
        sidebarBtn.style.color = '#A6E3E9'
    } else {
        sidebarBtn.style.color = '#E3FDFD'
    }
});

closeBtn.addEventListener('click', function () {
    asidebar.classList.toggle('show');
})
