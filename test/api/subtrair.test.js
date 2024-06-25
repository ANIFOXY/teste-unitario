const request = require('supertest');
const app = require('../../index');

describe('API Subtrair', () => {
    it('POST /api/subtrair - deve subtrair dois numeros', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 12, num2: 13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -1 });
    });

    it('POST /api/subtrair - deve retornar erro para entrada não numérica', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: 'a', num2: 13 });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Erro ao Subtrair');
    });

    it('POST /api/subtrair - deve retornar erro para campos vazios', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: null, num2: 13 });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe('Erro ao Subtrair');
    });

    it('POST /api/subtrair - deve retornar a subtracao de números negativos', async () => {
        const response = await request(app)
            .post('/api/subtrair')
            .send({ num1: -12, num2: -13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 1 });
    });
});
