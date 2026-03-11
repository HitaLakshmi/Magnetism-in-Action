document.addEventListener("DOMContentLoaded", function () {
   
    let buttons = document.querySelectorAll('.see-more');
    buttons.forEach(function(button) {
        button.addEventListener('click',function () {
            let content = button.closest('.content');
            let additionalData = content.querySelector('.additional-data');
            additionalData.textContent = "Here's some more information about Switzerland!";
            additionalData.style.display = 'block';
        });
    });
});
function goBack() {
    window.history.back();}
