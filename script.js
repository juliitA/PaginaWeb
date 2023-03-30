
window.addEventListener('load', () => {
    /*Formulario */
    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click', (event)=>{
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

    /*User */
    document.querySelector('#get-user').addEventListener('click', getUser);

});

function getUser() {
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            const userData = response.results[0].name; 
            document.querySelector('#user-name').innerHTML = `${userData.title} ${userData.first} ${userData.last}`;
            document.querySelector('#user-img').classList.add('show-user-img')
        })

        .catch((error) => {
            document.querySelector('#user-error').classList.add('show-user-error')
        })
            
        
        
}
