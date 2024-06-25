const ServicoExercicio = require('../../src/services/service');

describe('Subtrair', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Subtrair deve retornar a subtracao de dois números positivos', () => {
        const result = servicoExercicio.Subtrair(5,3)

        expect(result).toBe(2);
    })

    it('Subtrair deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Subtrair('a',3)

        expect(result).toThrowError('somente numeros');
    })

    it('Subtrair deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Subtrair(2,'a')

        expect(result).toThrowError('somente numeros');
    })

    it('Subtrair deve retornar a subtracao de números negativos', () => {
        const result = servicoExercicio.Subtrair(-5, -3);
        
        expect(result).toBe(-2);
    });

    it('Subtrair deve retornar a subtracao de um número positivo e um negativo', () => {
        const result = servicoExercicio.Subtrair(5, -3);
        
        expect(result).toBe(8);
    });
})