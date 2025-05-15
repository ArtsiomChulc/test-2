const links = document.querySelectorAll('.header-nav_item a');

links.forEach(link => {
    link.addEventListener('click', function () {
        // Удаляем класс 'active' у всех
        links.forEach(l => l.classList.remove('active'));

        // Добавляем 'active' на текущую
        link.classList.add('active');
    });
});