import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'

import superTest from 'supertest'
import Server , {Database} from '../../src/server.js'


describe('API E2E Teste Suite', () => {


    test('POST / - should save an item and return ok', async () => {
        const response = await superTest(Server).post('/').send({
            name: 'Teste',
            age: 27
        })

        const expectedResponse = {
            ok: 1
        }

        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
        Database.clear()

    })


     
    test('GET / - should return an array', async () => {
        const response = await superTest(Server).get('/')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })


    test.todo('DELETE / - should delete all items and return ok')
})