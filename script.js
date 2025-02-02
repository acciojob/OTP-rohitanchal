document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !inputs[index].value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});
