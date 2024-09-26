const csvDataArray = {
    button1: [
        ["ID do Crédito", "Nome do Credor", "Valor do Crédito", "Data de Empréstimo", "Status"],
        ["C001", "Banco A", "5000", "2024-01-15", "Aprovado"],
        ["C002", "Banco B", "3000", "2024-02-20", "Pendente"],
        ["C003", "Banco C", "7000", "2024-03-05", "Rejeitado"]
    ],
    button2: [
        ["Data", "Saldo do Crédito", "Créditos Utilizados", "Créditos Disponíveis"],
        ["2024-01-31", "5000", "1000", "4000"],
        ["2024-02-28", "4000", "1500", "2500"],
        ["2024-03-31", "2500", "500", "2000"]
    ],
    button3: [
        ["Tipo de Crédito", "Descrição", "Taxa de Juros", "Valor Máximo"],
        ["Pessoal", "Crédito para despesas pessoais", "15%", "20,000"],
        ["Imobiliário", "Crédito para compra de imóveis", "10%", "500,000"],
        ["Veicular", "Crédito para compra de veículos", "12%", "100,000"],
        ["Estudantil", "Crédito para financiamento de estudos", "8%", "50,000"]
    ],
    button4: [
        ["ID do Débito", "Nome do Credor", "Valor do Débito", "Data de Pagamento", "Status"],
        ["D001", "Fornecedor A", "2000", "2024-01-20", "Compensado"],
        ["D002", "Fornecedor B", "1500", "2024-02-10", "Compensado"],
        ["D003", "Fornecedor C", "2500", "2024-03-15", "Compensado"]
    ],
    button5: [
        ["Data", "Saldo do Débito Compensado", "Débitos Pagos", "Débitos Pendentes"],
        ["2024-01-31", "2000", "2000", "0"],
        ["2024-02-28", "1500", "1500", "0"],
        ["2024-03-31", "2500", "2500", "0"]
    ],
    button6: [ 
        ["Tipo de Débito", "Descrição", "Valor Total", "Status"],
        ["Serviço", "Pagamento de serviços prestados", "2000", "Compensado"],
        ["Produto", "Pagamento de mercadorias", "1500", "Pendente"],
        ["Taxa", "Pagamento de taxas governamentais", "2500", "Compensado"]
    ],
    button7: [
        ["ID do Processo", "Descrição do Processo", "Valor do Crédito", "Data de Abertura", "Status"],
        ["P001", "Processo de Aprovação A", "10000", "2024-01-01", "Em andamento"],
        ["P002", "Processo de Aprovação B", "15000", "2024-02-01", "Concluído"],
        ["P003", "Processo de Aprovação C", "8000", "2024-03-01", "Pendente"]
    ],
    button8: [
        ["Data", "Saldo do Processo", "Créditos Liberados", "Créditos Pendentes"],
        ["2024-01-31", "10000", "5000", "5000"],
        ["2024-02-28", "15000", "10000", "5000"],
        ["2024-03-31", "8000", "3000", "5000"]
    ],
    button9: [
        ["Tipo de Processo", "Quantidade", "Valor Total de Créditos"],
        ["Aprovação", "3", "33000"],
        ["Pendência", "1", "8000"],
        ["Concluído", "1", "15000"]
    ]
};

const filenames = {
    button1: "RelatórioCreditos.csv",
    button2: "SaldoHistoricoCreditos.csv",
    button3: "RelatórioGeralCreditos.csv",
    button4: "RelatórioDebitos.csv",
    button5: "SaldoHistoricoDebitos.csv",
    button6: "RelatórioGeralDebitos.csv",
    button7: "RelatórioProcessosAdministrativos.csv",
    button8: "SaldoHistoricoProcessos.csv",
    button9: "RelatórioGeralProcessos.csv"
};

document.querySelectorAll('.downloadBtn').forEach((button, index) => {
    button.addEventListener('click', function () {
        const buttonKey = `button${index + 1}`;
        const csvData = csvDataArray[buttonKey];
        const csvContent = csvData.map(e => e.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filenames[buttonKey];

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});