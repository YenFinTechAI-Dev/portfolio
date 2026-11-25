const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    formMessage.textContent = `Cảm ơn ${name}, tin nhắn của bạn đã được gửi!`;
    form.reset();
});
