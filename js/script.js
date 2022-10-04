var btn = document.querySelector("#voltar-topo");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

/*botao menu mobile*/
let open = document.querySelector('.bnt-menu');
let close = document.querySelector('.bnt-close');
let menu = document.querySelector('.menu');

open.addEventListener('click', function() {
    menu.style.display = 'block';
});

close.addEventListener('click', function() {
    menu.style.display = 'none';
});