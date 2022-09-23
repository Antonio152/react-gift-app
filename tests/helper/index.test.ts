import {cleanNumbers,cleanCategory} from "../../src/helper"
import '@testing-library/jest-dom/extend-expect'
describe('Pruebas de carpeta Helper', () => { 
    test('Deberia la función retornar solo numeros', () => { 
        const result = cleanNumbers('3a2b1c')
        expect(result).toEqual('321')
    })
    test('Deberia la función retornar la misma cadena', () => { 
        const result = cleanNumbers('321')
        expect(result).toEqual('321')
    })
    test('Deberia la función retornar una cadena sin simbolos', () => { 
        const result = cleanCategory('H#O%L)A')
        expect(result).toEqual('HOLA')
    })
    test('Deberia la función retornar la misma cadena', () => { 
        const result = cleanCategory('HOLA')
        expect(result).toEqual('HOLA')
    })
 })