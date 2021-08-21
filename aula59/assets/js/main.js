function criaCalculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Inválida');
                return;
            }

        this.display.value = String(conta);
        } catch (e) {
            alert('Conta Inválida');
            return;
        }
    }

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.cliqueBotoes =  function () {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.btnParaDisplay = () => this.display.value += valor;
}

const calculadora = new criaCalculadora();
calculadora.inicia();