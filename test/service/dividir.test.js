const ServicoExercicio = require('../../src/services/service');

describe('Dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Dividir deve retornar a divisao de dois números positivos', () => {
        const result = servicoExercicio.Dividir(5,5)

        expect(result).toBe(1);
    })
})