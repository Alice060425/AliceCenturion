document.addEventListener('DOMContentLoaded', function() {
    const characterCards = document.querySelectorAll('.character-card');
    const resetStylesButton = document.getElementById('reset-styles');
    const showMessageButton = document.getElementById('show-message');

    characterCards.forEach(card => {
        const button = card.querySelector('button');
        button.addEventListener('click', function() {
            const color = this.dataset.color;
            const background = this.dataset.background;
            const size = this.dataset.size;

            document.body.style.color = color;
            document.body.style.backgroundColor = background;
            document.body.style.fontSize = size;
        });
    });

    resetStylesButton.addEventListener('click', function() {
        document.body.style.color = '';
        document.body.style.backgroundColor = '';
        document.body.style.fontSize = '';
    });

    showMessageButton.addEventListener('click', function() {
        const message = this.dataset.message;
        alert(message);
    });
});