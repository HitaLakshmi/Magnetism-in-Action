document.addEventListener("DOMContentLoaded", function () {
    // Get all "See More" buttons
    let buttons = document.querySelectorAll('.see-more');

    // Loop through each button and add event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            // Get the parent .content and the additional data container
            let content = button.closest('.content');
            let additionalData = content.querySelector('.additional-data');

            // Add some data (or modify based on what you want)
            additionalData.textContent = "Here's some more information about Switzerland!";
            
            // Show the additional data
            additionalData.style.display = 'block';
        });
    });
});


function goBack() {
    window.history.back();
}
