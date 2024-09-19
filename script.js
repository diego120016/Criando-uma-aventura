const avanca = document.querySelectorAll('.bnt-proximo');

avanca.forEach(button => {
    button.addEventListener('click',function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(provimoPasso).classList.add('ativo');
    })
}) 