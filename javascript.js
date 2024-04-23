const toggleAccordion = (button) => {
    const accordionItem = button.parentNode;
    accordionItem.classList.toggle('active');
    
    const content = accordionItem.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleAccordion(button);
        });
    });
});

