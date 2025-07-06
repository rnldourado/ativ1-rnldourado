import { execSync } from 'child_process';
import path from 'path';

const cliPath = path.resolve(__dirname, '../cli.ts');

function runCLI(args: string): string {
    return execSync(`npx ts-node ${cliPath} ${args}`, { encoding: 'utf-8' }).trim();
}

describe('CLI Calculadora', () => {
    test('soma 10 + 5 = 15', () => {
        const output = runCLI('soma 10 5');
        expect(output).toBe('15');
    });

    test('subtrai 20 - 8 = 12', () => {
        const output = runCLI('subtrai 20 8');
        expect(output).toBe('12');
    });

    test('multiplica 3 * 4 = 12', () => {
        const output = runCLI('multiplica 3 4');
        expect(output).toBe('12');
    });

    test('divide 20 / 4 = 5', () => {
        const output = runCLI('divide 20 4');
        expect(output).toBe('5');
    });

    test('divide por zero retorna erro', () => {
        try {
            runCLI('divide 10 0');
            throw new Error('Era esperado um erro, mas o comando foi executado com sucesso');
        } catch (err: any) {
            const stderr = err.stderr?.toString() ?? err.message;
            expect(stderr).toContain('Divisão por zero');
        }
    });
});
