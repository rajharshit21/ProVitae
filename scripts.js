document.querySelectorAll('.preview-btn').forEach(button => {
    button.addEventListener('click', event => {
        const templateId = event.target.dataset.template;
        alert(`Preview for ${templateId} coming soon!`);
    });
});
