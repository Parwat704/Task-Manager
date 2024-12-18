// Add a fade-out effect to task card when deleting or completing a task
document.querySelectorAll('.task-action').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the task card element and apply fade-out effect
        let card = event.target.closest('.card');
        card.classList.add('fade-out');
        
        // Delay redirection until fade-out is complete
        setTimeout(() => {
            window.location.href = event.target.href;
        }, 300);
    });
});

// Fade-out animation using CSS
document.addEventListener("DOMContentLoaded", () => {
    let styles = `
        .fade-out {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    `;
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
});
