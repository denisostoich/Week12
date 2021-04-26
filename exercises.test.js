//Import Functions
import * as functions from "./exercises";

//1
describe('Primer Función - Devolución de Texto', () => {
    test('El texto ingresado es "Primer Funcion"', () => {
        expect(functions.texto('Primer Funcion')).toEqual('Primer Funcion');
    });
})
//2
describe('Segunda Función - Suma', () => {
    test('La suma de 6 + 4 es igual a 10', () => {
        expect(functions.suma(6, 4)).toBe(10);
    });
})
//3
describe('Tercer Función - Resta', () => {
    test('La resta de 12 - 5 es igual a 7', () => {
        expect(functions.resta(12, 5)).toBe(7);
    });
})
//4
describe('Cuarta Función - Multiplicacion', () => {
    test('La multiplicación entre 6 y 8 es igual a 48', () => {
        expect(functions.multiplicacion(6, 8)).toBe(48);
    });
})
//5
describe('Quinta Función - Division', () => {
    test('La división de 3 por 0 no se puede realizar', () => {
        expect(functions.division(3, 0)).toEqual('No se puede dividir por 0');
    });
    test('La división de 9 por 3 es igual a 3', () => {
        expect(functions.division(9, 3)).toBe(3);
    });
})
//6
describe('Sexta Función - Tabla de Multiplicaciones', () => {
    test('Si el multiplicador no se define, se muestra la tabla hasta multiplicar por 10', () => {
        expect(functions.tablaMultiplicar(5, )).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    });
    test('La tabla de multiplicación de 3 hasta multiplicar por 5', () => {
        expect(functions.tablaMultiplicar(3, 5)).toEqual([0, 3, 6, 9, 12, 15]);
    });
})
//7
describe('Séptima Función - Potencia', () => {
    test('El número 4 elevado al número 5 es 1024', () => {
        expect(functions.potencia(4, 5)).toBe(1024);
    });
})
//8
describe('Octava Función - Anidada', () => {
    test('La suma de 8 elevado al cuadrado y 3 elevado al cuadrado, es 73', () => {
        expect(functions.anidada(8,3)).toBe(73);
    });
})
//9
describe('Novena Función - Dígitos', () => {
    test('La cantidad de ceros a la izquierda del número 25, es 4', () => {
        expect(functions.cerosIzq(25, 6)).toEqual('000025');
    });
})