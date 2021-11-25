import supertest from 'supertest'
import ApiConfig from '../services/endpoints';
import { expect as chaiExpect } from 'chai'
import { createUserPayload } from '../resources/payloads';

describe('REQRES users api validation', () => {

    const request = supertest(ApiConfig.reqresBaseURL)

    it('should call POST user', async () => {
        const response = await request.post(ApiConfig.userAPI).send(createUserPayload);

        chaiExpect(response.statusCode).eq(201)
        chaiExpect(response.body.name).eq(createUserPayload.name)
        chaiExpect(response.body.job).eq(createUserPayload.job)
    });

    it('should call GET user/{id}', async () => {
        const response = await request.get(ApiConfig.getUserAPIByID(2))

        chaiExpect(response.statusCode).eq(200)
        chaiExpect(response.body.data.id).eq(2)
    });

    it('should call DELETE user/{id}', async () => {
        const response = await request.delete(ApiConfig.getUserAPIByID(2));

        chaiExpect(response.statusCode).eq(204)
    });
});
