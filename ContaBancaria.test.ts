import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Testando classe ContaBancaria", () => {
    let conta1: ContaBancaria;
    let conta2: ContaBancaria;
    beforeEach(() => {
        conta1 = new ContaBancaria(1122, 1)
        conta2 = new ContaBancaria(3344, 1)
    });

    test("Testando depositar valor positivo", () => {
        conta1.depositar(100)
        expect(conta1.consultarSaldo()).toBe(100)
    })

    test("Testando depositar valor negativo", () => {
        conta1.depositar(100)
        conta1.depositar(-300)
        expect(conta1.consultarSaldo()).toBe(100)
    })

    test("Realizando um saque válido", () => {
        conta1.depositar(200)
        expect(conta1.sacar(100)).toBe(100)
    })

    test("Realizando um saque inválido", () => {
    //aqui vc diz "teste essa função (() => conta1.sacar(100)) e veja se ela lança um erro."
        expect(() => conta1.sacar(100)).toThrow("Saldo insuficiente") 
    }) 
    //Passa a função como um callback (uma função que será executada depois)

    test("Realizando transferêncioa válida", () => {
        conta1.depositar(200)
        conta1.transferir(100, conta2)
        expect(conta1.consultarSaldo()).toBe(100)
        expect(conta2.consultarSaldo()).toBe(100)
    })

    test("Realizando transferêncioa inválida", () => {
        conta1.depositar(200)
        expect(() => conta1.transferir(300, conta2)).toThrow("Saldo insuficiente")
        expect(() => conta1.transferir(-100, conta2)).toThrow("O valor deve ser positivo")
    })
});

