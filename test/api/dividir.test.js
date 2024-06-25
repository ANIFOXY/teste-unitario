const request = require('supertest');
const app = require('../../index');

describe('API Dividir', () => {
    it('POST /api/dividir - deve dividir dois numeros', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 6, num2: 3 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });

    it('POST /api/dividir - deve retornar erro para entrada não numérica', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 'a', num2: 3 });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Erro ao Dividir');
    });

    it('POST /api/dividir - deve retornar erro ao dividir por zero', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 6, num2: 0 });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Erro ao Dividir')
    });

    it('POST /api/dividir - deve retornar a divisao de números negativos', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: -6, num2: -3 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    });
});
