let entrada = '';
        let operadorAtual = '';
        let resultado = 0;

        function adicionarAoDisplay(valor) {
            entrada += valor;
            atualizarDisplay();
        }

        function adicionarDecimal() {
            if (!entrada.includes('.')) {
                entrada += '.';
                atualizarDisplay();
            }
        }

        function definirOperador(operador) {
            operadorAtual = operador;
            if (entrada !== '') {
                resultado = parseFloat(entrada);
                entrada = '';
            }
        }

        function limparDisplay() {
            entrada = '';
            operadorAtual = '';
            resultado = 0;
            atualizarDisplay();
        }

        function calcular() {
            const entradaSecundaria = parseFloat(entrada);

            switch (operadorAtual) {
                case '+':
                    resultado += entradaSecundaria;
                    break;

                case '-':
                    resultado -= entradaSecundaria;
                    break;

                case '*':
                    resultado *= entradaSecundaria
                    break;

                case '/':
                    if (entradaSecundaria !== 0) {
                        resultado /= entradaSecundaria;
                    } else {
                        alert("Erro: divisão por zero");
                    }
                    break;
            }

            entrada = resultado.toString();
            operadorAtual = '';
            atualizarDisplay();
        }

        function atualizarDisplay() {
            document.getElementById('display').value = entrada;
        }
