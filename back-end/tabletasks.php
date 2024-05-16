<?php

// Conexão com o banco de dados 
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

// Criação da tabela tasks
$sql = "CREATE TABLE tasks (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(6) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

// Conectar e executar a consulta
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

if ($conn->query($sql) === TRUE) {
    echo "Tabela 'tasks' criada com sucesso";
} else {
    echo "Erro na criação da tabela: " . $conn->error;
}

$conn->close();

?>