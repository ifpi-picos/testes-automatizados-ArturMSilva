[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rCk-UBU7)
# Projeto Conta Bancária

### Requisitos da Classe `ContaBancaria` 🏦

#### Atributos: ⚒️

1. **numeroConta**: Representa o número da conta bancária.
2. **agencia**: Representa o número da agência bancária.
3. **saldo**: Armazena o saldo atual da conta.
4. **extrato**: Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

#### Métodos: 💸

1. **depositar(valor: number)**: Permite realizar um depósito na conta, aumentando o saldo.
2. **sacar(valor: number)**: Permite realizar um saque, diminuindo o saldo, desde que o valor seja válido e não exceda o saldo disponível.
3. **transferir(valor: number, contaDestino: ContaBancaria)**: Realiza a transferência de um valor para outra conta bancária, diminuindo o saldo da conta origem e aumentando o saldo da conta destino.
4. **consultarSaldo()**: Retorna o saldo atual da conta.
5. **exibirExtrato()**: Exibe o histórico de transações (extrato) realizadas na conta.
6. **registrarOperacao(descricao: string)**: Método privado para registrar cada operação no extrato da conta, incluindo a data e a descrição da transação.


### Descrição dos Comandos de Teste 👨🏻‍💻

- **beforeEach**: Executa antes de cada teste para garantir que o estado inicial seja restaurado. No caso da `ContaBancaria`, recria duas conta com número da conta1(1122) e conta2(3344), ambas com agência(1) antes de cada teste.
  ```typescript
  beforeEach(() => {
        conta1 = new ContaBancaria(1122, 1)
        conta2 = new ContaBancaria(3344, 1)
    });
- **describe**: Agrupa os testes relacionados a uma funcionalidade ou classe específica. No caso, agrupa os testes da classe `ContaBancaria`.
  ```typescript
  describe("Testando classe ContaBancaria", () => {
    let conta1: ContaBancaria;
    let conta2: ContaBancaria;
    beforeEach(() => {
        conta1 = new ContaBancaria(1122, 1);
        conta2 = new ContaBancaria(3344, 1);
    });

    test("Testando depositar valor positivo", () => {
        conta1.depositar(100);
        expect(conta1.consultarSaldo()).toBe(100);
    });
    });

- **test**: Define um caso de teste individual. Cada função `test` contém um cenário que será verificado.
  ```typescript
    test("Realizando um saque válido", () => {
      conta1.depositar(200);
      expect(conta1.sacar(100)).toBe(100);
    });
- **expect**: Utilizado para verificar o valor retornado e se corresponde ao esperado. Exemplos:
  - `toBe(0)` verifica se o saldo é exatamente 0.
  - `toThrow("Saldo insuficiente")` verifica se uma exceção com essa mensagem é lançada quando se tenta sacar um valor superior ao saldo disponível.
  ```typescript
    expect(conta1.consultarSaldo()).toBe(0)
    expect(() => conta1.sacar(100)).toThrow("Saldo insuficiente") 

Para executar os testes: ▶️

```sh
bun test
```# bun-test-starter
