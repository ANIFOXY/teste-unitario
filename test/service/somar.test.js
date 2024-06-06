const ServicoExercicio = require('../../src/services/service');

describe('Somar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Somar deve retornar a soma de dois números positivos', () => {
        const result = servicoExercicio.Somar(2, 3)

        expect(result).toBe(5);
    })

    it('Somar deve retornar um error', () => {
        const result = () => servicoExercicio.Somar('a',3)

        expect(result).toThrowError('somente numeros');
    })

    it('Somar deve retornar um error', () => {
        const result = () => servicoExercicio.Somar(2,'a')

        expect(result).toThrowError('somente numeros');
    })

    
    it('Somar deve retornar um error caso ouver campos vazios', () => {
        const result = () => servicoExercicio.Somar(2, null)

        expect(result).toThrowError('somente numeros');
    })

    it('Somar deve retornar um error caso ouver campos vazios', () => {
        const result = () => servicoExercicio.Somar(null, 3)

        expect(result).toThrowError('somente numeros');
    })

})