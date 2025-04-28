<?php 

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost/app/index.html");
    exist;
}

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "estoque";

// cria a conexão
$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn -> connect_error){
    die("Erro na conexão: " . $conn->connect_error);
}
?>