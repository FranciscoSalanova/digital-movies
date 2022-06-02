window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let campoTitulo = document.querySelector('#titulo');

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#' + Math.round(Math.random() * 999999).toString();
    });

    let estadoSecreto = 0;

    campoTitulo.addEventListener('keydown', (e) => {
        let teclaPresionada = e.key;
        codigoSecreto(teclaPresionada);
    });

    function codigoSecreto(tecla) {
        switch (estadoSecreto) {
            case 0:            
                if (tecla === 's' || tecla === 'S') {
                    estadoSecreto = 1;
                    console.log(estadoSecreto);
                }
                break;
            case 1:            
                if (tecla === 'e' || tecla === 'E') {
                    estadoSecreto = 2;
                    console.log(estadoSecreto);
                }
                break;
            default:
                estadoSecreto = 0;
                console.log(estadoSecreto);
                break;
        }
    }
}