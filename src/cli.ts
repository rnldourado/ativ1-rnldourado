import { Command } from 'commander';
import { soma, subtrai, multiplica, divide } from './calculadora';

const program = new Command();

program
  .name('calculadora')
  .description('Calculadora CLI com operações básicas')
  .version('1.0.0');

function validarNumero(input: string): number {
  const numero = Number(input);
  if (isNaN(numero)) {
    throw new Error(`O valor "${input}" não é um número válido.`);
  }
  return numero;
}

program
  .command('soma')
  .description('Soma dois números')
  .argument('<a>', 'primeiro número',validarNumero)
  .argument('<b>', 'segundo número',validarNumero)
  .action((a: number, b: number) => {
    console.log(String(soma(Number(a), Number(b))));
  });

program
  .command('subtrai')
  .description('Subtrai dois números')
  .argument('<a>', 'minuendo',validarNumero)
  .argument('<b>', 'subtraendo',validarNumero)
  .action((a: number, b: number) => {
    console.log(String(subtrai(Number(a), Number(b))));
  });

program
  .command('multiplica')
  .description('Multiplica dois números')
  .argument('<a>', 'fator 1',validarNumero)
  .argument('<b>', 'fator 2',validarNumero)
  .action((a: number, b: number) => {
    console.log(String(multiplica(Number(a), Number(b))));
  });

program
  .command('divide')
  .description('Divide dois números')
  .argument('<a>', 'dividendo',validarNumero)
  .argument('<b>', 'divisor',validarNumero)
  .action((a: number, b: number) => {
    try {
      console.log(String(divide(Number(a), Number(b))));
    } catch (e: any) {
      throw new Error(e.message);
    }
  });

program.parse(process.argv);
