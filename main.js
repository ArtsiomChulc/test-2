const links = document.querySelectorAll('.header-nav_item a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


// tabs

document.querySelectorAll('.card').forEach(card => {
    const tabItems = card.querySelectorAll('.tabs-list_item');
    const tabDescriptions = card.querySelectorAll('.tabs-description_text');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = item.getAttribute('data-tab');

            // Удаляем активные классы только внутри текущей карточки
            tabItems.forEach(el => el.classList.remove('active'));
            tabDescriptions.forEach(el => el.classList.remove('active'));

            // Добавляем активный класс выбранному элементу
            item.classList.add('active');
            tabDescriptions[index].classList.add('active');
        });
    });
});

// checkbox

document.querySelectorAll('.card-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        if (checkbox.checked) {
            document.querySelectorAll('.card-checkbox').forEach(cb => {
                if (cb !== checkbox) cb.checked = false;
            });
        }
    });
});