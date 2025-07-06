[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/4qVHBKNB)
# calculadora

Este repositório é dedicado a realização de Atividade da Disciplina DevOps 25.1 do Curso de Ciência da Computação da UFCG.

---

## Requisitos

- Node.js (versão 16 ou superior recomendada)
- npm 
- Git 

---

## Instalação

1. Clone o projeto (ou crie a pasta com os arquivos):

```bash
git clone https://github.com/rnldourado/ativ1-rnldourado.git
cd ativ1-rnldourado
```

2. Instale as dependências:

```bash
npm install
```

---

## Execução

Você pode executar a calculadora diretamente usando o `ts-node`:

```bash
npx ts-node src/cli.ts <comando> <número1> <número2>
```

### Exemplos:

```bash
npx ts-node src/cli.ts soma 10 5
# Saída: 15

npx ts-node src/cli.ts subtrai 20 8
# Saída: 12

npx ts-node src/cli.ts multiplica 3 4
# Saída: 12

npx ts-node src/cli.ts divide 10 2
# Saída: 5
```

---

## Validações

- Se um valor não for número:  
  `Erro: "abc" não é um número válido`
- Se tentar dividir por zero:  
  `Divisão por zero`

---

## Testes automatizados

A aplicação possui testes automatizados utilizando Jest.

Execute os testes com:

```bash
npm test
```
