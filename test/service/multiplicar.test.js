const ServicoExercicio = require('../../src/services/service');

describe('Multiplicar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Multiplicar deve retornar a multiplicasao de dois números positivos', () => {
        const result = servicoExercicio.Multiplicar(5,3)

        expect(result).toBe(15);
    })

    it('Multiplicar deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Multiplicar('a',3)

        expect(result).toThrowError('somente numeros');
    })

    it('Multiplicar deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Multiplicar(2,'a')

        expect(result).toThrowError('somente numeros');
    })

    it('Multiplicar deve retornar a multiplicacao de números negativos', () => {
        const result = servicoExercicio.Multiplicar(-5, -3);
        expect(result).toBe(15);
    });

    it('Multiplicar deve retornar a multiplicacao de um número positivo e um negativo', () => {
        const result = servicoExercicio.Multiplicar(5, -3);
        expect(result).toBe(-15);
    });
})