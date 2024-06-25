const ServicoExercicio = require('../../src/services/service');

describe('Dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Dividir deve retornar a divisao de dois números positivos', () => {
        const result = servicoExercicio.Dividir(6,3)

        expect(result).toBe(2);
    })

    it('Dividir deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Dividir('a',3)

        expect(result).toThrowError('somente numeros');
    })

    it('Dividir deve retornar um erro para entrada não numérica', () => {
        const result = () => servicoExercicio.Dividir(6,'a')

        expect(result).toThrowError('somente numeros');
    })

    it('Dividir deve retornar um erro ao dividir por zero', () => {
        expect(() => servicoExercicio.Dividir(6, 0)).toThrowError("somente numeros");
    });

    it('Dividir deve retornar a divisao de números negativos', () => {
        const result = servicoExercicio.Dividir(-6, -3);
        expect(result).toBe(2);
    });
})