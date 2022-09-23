import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import {AddCategory} from '../../src/components/AddCategory';
import '@testing-library/jest-dom/extend-expect'

describe('Prueba en <AddCategory/>', () => { 
    test('Debe cambiar correctamente el valor de la caja de busqueda', () => {
       const {getByPlaceholderText} = render(<AddCategory addCategory={ () => {} }/>)
       fireEvent.change(getByPlaceholderText('Search Gift'), { target: { value: 'Naruto' } })
       expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','Naruto')
    })
    test('Debe cambiar correctamente el valor de la caja de numero de Gifts', () => {
        const {getByPlaceholderText} = render(<AddCategory addCategory={ () => {} }/>)
        fireEvent.change(getByPlaceholderText('Number of gifts'), { target: { value: '10' } })
        expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','10')
    })
    test('Debe estar deshabilitado el boton de busqueda si no hay un valor de busqueda y un limite', () => {
        const {getByRole} = render(<AddCategory addCategory={ () => {} }/>)
        expect(getByRole('button')).toBeDisabled()
    })
    test('Debe estar habilitado el boton de busqueda si hay un valor de busqueda y un limite', () => {
        const {getByRole,getByPlaceholderText} = render(<AddCategory addCategory={ () => {} }/>)
        fireEvent.change(getByPlaceholderText('Search Gift'), { target: { value: 'Naruto' } })
        expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','Naruto')
        fireEvent.change(getByPlaceholderText('Number of gifts'), { target: { value: '10' } })
        expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','10')
        expect(getByRole('button')).toBeEnabled()
    })
    test('Debe de llamar addCategory function si los input tienen valores validos', () => {
        const addCategory= jest.fn()
        const {getByRole,getByPlaceholderText} = render(<AddCategory addCategory={ addCategory }/>)
        fireEvent.change(getByPlaceholderText('Search Gift'), { target: { value: 'Naruto' } })
        expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','Naruto')
        fireEvent.change(getByPlaceholderText('Number of gifts'), { target: { value: '10' } })
        expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','10')
        expect(getByRole('button')).toBeEnabled()
        fireEvent.click(getByRole('button'))
        expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','')
        expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','')
        expect(addCategory).toHaveBeenCalled()
        expect(addCategory).toHaveBeenCalledTimes(1)
        expect(addCategory).toHaveBeenCalledWith('Naruto','10')
    })
    test('No debe de llamar el onNewCategory si el input está vació', () => { 
        const addCategory= jest.fn()
        const {getByRole} = render(<AddCategory addCategory={ addCategory }/>)
        expect(getByRole('button')).toBeDisabled()
        fireEvent.click(getByRole('button'))
        expect(addCategory).not.toHaveBeenCalled()
    })
})