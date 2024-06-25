const app = require('../../index') 
const request = require('supertest')

describe('Teste de api para somar', () => {

        test('Post /api/somar - deve somar dois numeros', async () => {
            const response = await request(app)
                .post('/api/somar')
                .send({ num1: 12, num2: 13});

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: 25 });
        })

        it('POST /api/somar - deve retornar erro para entrada não numérica', async () => {
            const response = await request(app)
                .post('/api/somar')
                .send({ num1: 'a', num2: 13 });
    
            expect(response.statusCode).toBe(500);
            expect(response.body.message).toBe('Erro ao somar');
        });
    
        it('POST /api/somar - deve retornar erro para campos vazios', async () => {
            const response = await request(app)
                .post('/api/somar')
                .send({ num1: null, num2: 13 });
    
            expect(response.statusCode).toBe(500);
            expect(response.body.message).toBe('Erro ao somar');
        });
    
        it('POST /api/somar - deve retornar a soma de números negativos', async () => {
            const response = await request(app)
                .post('/api/somar')
                .send({ num1: -12, num2: -13 });
    
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({ result: -25 });
        });
})