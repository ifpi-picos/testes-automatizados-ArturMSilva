export default class ContaBancaria {
    private numeroConta: number;
    private agencia: number;
    private saldo = 0;
    private extrato: string[];
    data = new Date();
    dia = this.data.toLocaleDateString()
    horario = this.data.toLocaleTimeString();

    public constructor(numeroConta: number, agencia: number){
        this.extrato = [];
        this.agencia = agencia;
        this.numeroConta = numeroConta;
    }

    public depositar(valor:number){
        if(valor > 0){
            this.saldo += valor;
            this.registrarOperacao(`Depósito de R$${valor.toFixed(2)} Realizado em: ${this.dia} às ${this.horario}`)
        }
        return this.saldo
    }

    public sacar(valor: number){
        if(valor <= this.saldo && valor > 0){
            this.saldo -= valor;
            this.registrarOperacao(`Saque de R$${valor.toFixed(2)} Realizado em: ${this.dia} às ${this.horario}`)
            return this.saldo
        }
        throw new Error("Saldo insuficiente")
    }

    public transferir(valor: number, contaDestino: ContaBancaria){
        if (valor > this.saldo){
            throw new Error("Saldo insuficiente");
        }

        if(valor < 0){
            throw new Error("O valor deve ser positivo")
        }

        this.saldo -= valor;
        contaDestino.depositar(valor);

        this.registrarOperacao(`Transferência de R$${valor.toFixed(2)} para a conta ${contaDestino.numeroConta} Realizada em: ${this.dia} às ${this.horario}`);
        contaDestino.registrarOperacao(`Transferência de R$${valor.toFixed(2)} Recebida da conta ${this.numeroConta} em: ${this.dia} às ${this.horario}`);
    }

    public consultarSaldo(){
        return this.saldo;
    }

    public exibirExtrato(){
        return this.extrato;
    }

    private registrarOperacao(descricao: string){
        this.extrato.push(descricao);
    }
}