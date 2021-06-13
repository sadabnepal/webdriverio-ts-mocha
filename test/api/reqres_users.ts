import supertest from 'supertest'
import faker from 'faker';
import ApiConfig from '../../config/ApiConfig';

describe('Make API calls using supertest', () => {

    const request = supertest(ApiConfig.reqresBaseURL)
    
    const fname = faker.name.firstName();
    const lname =  faker.name.lastName()
   
    it('should call POST user', async () => {
        const payload = {
            "name":  fname + " " + lname,
            "job":  faker.name.jobTitle()
        }
        
        const response  = await request.post(ApiConfig.userAPI).send(payload);
        
        expect(response.statusCode).toEqual(201)
        expect(response.body.name).toEqual(payload.name)
        expect(response.body.job).toEqual(payload.job)
    });

    it('should call GET user/{id}', async () => {
        const response  = await request.get(ApiConfig.getUserAPIByID(2))
  
        expect(response.statusCode).toEqual(200)
        expect(response.body.data.id).toEqual(2)
    });

    it('should call DELETE user/{id}', async () => {
        const response  = await request.delete(ApiConfig.getUserAPIByID(2));
        
        expect(response.statusCode).toEqual(204)
    });
});
