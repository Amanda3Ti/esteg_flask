// Função para mostrar o spinner enquanto o formulário está sendo enviado
document.getElementById('decode-form').addEventListener('submit', 
    function() {
        // Mostrar spinner
        document.getElementById('loaqding-spinner').style.display = 'block';

        // Esconder resultado
        document.getElementById('result').style.display = 'none';
    }
)