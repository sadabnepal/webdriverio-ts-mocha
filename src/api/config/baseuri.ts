import supertest from 'supertest'

const BASE_URI = "https://reqres.in";
export const request = supertest(BASE_URI)