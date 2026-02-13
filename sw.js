function filtrarBulario() {
    try {
        const termo = document.getElementById('busca').value.toLowerCase();
        // O filtro agora é à prova de erros
        const filtrados = minhaPlanilha.filter(m => {
            const animal = m["Animal"] ? m["Animal"].toLowerCase() : "";
            const med = m["Medicação"] ? m["Medicação"].toLowerCase() : "";
            return animal.includes(termo) || med.includes(termo);
        });
        renderizarBulario(filtrados);
    } catch (e) {
        console.log("Erro na busca, mas o app continua vivo!");
    }
}
