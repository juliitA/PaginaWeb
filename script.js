
window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault();
        alert('Click en enviar');

        const name = document.querySelector ('#name').value;
        const email = document.querySelector ('#email').value;
        const message = document.querySelector ('#message').value;
        const phone = document.querySelector ('#phone').value;

        if (name !== '' && email !== '' && message !== '') {
            //ok
            document.querySelector('#ok').classList.add('show-ok')

            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-phone').innerHTML = phone;
            document.querySelector('#user-message').innerHTML = message;
            
        } else {
            //error
            document.querySelector('#error').classList.add('show-error')
        }
    });
});


