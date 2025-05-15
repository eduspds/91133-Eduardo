// public/script.js

document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;

//envia o nome para o servidor
    await fetch("/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({nome})
    });

    document.getElementById("nome").value = "";
    carregarPessoas();
});

async function carregarPessoas() {
    const resposta = await fetch("/listar");
    const pessoas = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    pessoas.forEach(pessoa => {
        const li = document.createElement("li");
        li.textContent = pessoa.nome;
        lista.appendChild(li);
    });
}

//carregar ao abrir
carregarPessoas();

