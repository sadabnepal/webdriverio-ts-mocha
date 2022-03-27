import * as endpoints from '@API/services/endpoints';
import { createUserPayload } from '@API/resources/payloads';
import { request } from '@API/config/baseuri';

import { expect as chaiExpect } from 'chai'

describe('REQRES users api validation', () => {

    it('should call POST user', async () => {
        const response = await request.post(endpoints.userAPI).send(createUserPayload);
        chaiExpect(response.statusCode).equal(201)
        chaiExpect(response.body.name).equal(createUserPayload.name)
        chaiExpect(response.body.job).equal(createUserPayload.job)
    });

    it('should call GET user/{id}', async () => {
        const response = await request.get(endpoints.userAPIByID(2))
        chaiExpect(response.statusCode).equal(200)
        chaiExpect(response.body.data.id).equal(2)
    });

    it('should call DELETE user/{id}', async () => {
        const response = await request.delete(endpoints.userAPIByID(2));
        chaiExpect(response.statusCode).equal(204)
    });
});
