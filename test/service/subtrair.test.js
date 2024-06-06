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
})