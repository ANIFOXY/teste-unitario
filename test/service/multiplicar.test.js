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
})