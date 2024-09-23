let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNuber => {
    inputNuber.oninput = () =>{
        if(inputNuber.ariaValueMax.length > inputNuber.maxLength) inputNuber.value = inputNuber.value.slice(0, inputNuber.maxLength);
    };
});