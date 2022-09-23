import {getGifts} from '../../src/api'
describe('Pruebas de getGifts()', () => { 
    test('Debe retornar un arreglo de imagenes', async() => {
        const gifts = await getGifts('One Punch', '10')
        expect(gifts.length).toBe(10)
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     },9000)
 })