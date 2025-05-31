// Скрипт за формата за бюлетин
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Спира презареждането
            alert('Благодарим Ви, че се абонирахте за VistaCraft бюлетин!');
            form.reset(); // Изчиства полетата
        });
    }
});
