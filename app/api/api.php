<?php 

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost:8081/app/index.html");
    exist;
}

//
include 'autenticar.php';

// inclui a conexão com o banco
include 'conexao.php';

//inclui o script que insere os dados
include 'insere.php';

//inclui o script que lista os dados
include '/view/conecta.php';

echo "<script>
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'http://localhost:8081/app/index.html';
    </script>";
?>