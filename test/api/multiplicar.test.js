const request = require('supertest');
const app = require('../../index');

describe('API Multiplicar', () => {
    it('POST /api/multiplicar - deve multiplicar dois numeros', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 12, num2: 13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 156 });
    });

    it('POST /api/multiplicar - deve retornar erro para entrada não numérica', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: 'a', num2: 13 });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Erro ao Multiplicar');
    });

    it('POST /api/multiplicar - deve retornar erro para campos vazios', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: null, num2: 13 });

        expect(response.statusCode).toEqual(500);
        expect(response.body.message).toBe('Erro ao Multiplicar');
    });

    it('POST /api/multiplicar - deve retornar a multiplicação de números negativos', async () => {
        const response = await request(app)
            .post('/api/multiplicar')
            .send({ num1: -12, num2: -13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 156 });
    });
});
