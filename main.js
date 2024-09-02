document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-numero');
    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const submitButton = document.getElementById('submit');


    function validarNumeros(e) {
        e.preventDefault();
        
        const valorA = numeroA.value;
        const valorB = numeroB.value;
        const mensagemSucesso = " Os número estão corretos!"
        const mensagemErro = " O número A deve ser menor que o número B"

        if (valorA > valorB) {
            alert(mensagemErro);
        } else {
            alert(mensagemSucesso);
        }
    }

    submitButton.addEventListener('click', validarNumeros);
});