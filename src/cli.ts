import { Command } from 'commander';
import { soma, subtrai, multiplica, divide } from './calculadora';

const program = new Command();

program
  .name('calculadora')
  .description('Calculadora CLI com operações básicas')
  .version('1.0.0');

program
  .command('soma')
  .description('Soma dois números')
  .argument('<a>', 'primeiro número')
  .argument('<b>', 'segundo número')
  .action((a: number, b: number) => {
    console.log(soma(Number(a), Number(b)));
  });

program
  .command('subtrai')
  .description('Subtrai dois números')
  .argument('<a>', 'minuendo')
  .argument('<b>', 'subtraendo')
  .action((a: number, b: number) => {
    console.log(subtrai(Number(a), Number(b)));
  });

program
  .command('multiplica')
  .description('Multiplica dois números')
  .argument('<a>', 'fator 1')
  .argument('<b>', 'fator 2')
  .action((a: number, b: number) => {
    console.log(multiplica(Number(a), Number(b)));
  });

program
  .command('divide')
  .description('Divide dois números')
  .argument('<a>', 'dividendo')
  .argument('<b>', 'divisor')
  .action((a: number, b: number) => {
    try {
      console.log(divide(Number(a), Number(b)));
    } catch (e: any) {
      console.error(e.message);
    }
  });

program.parse(process.argv);
