import {render} from '@testing-library/react';
import React from 'react';
import GiftItem from '../../src/components/GiftItem';
describe('Testing de componente GiftItem', () => { 
    const title = 'NarutoImagen'
    const url = 'https://www.google.com/'
    const id = '1'

    test('Debe de hacer match con el Snapshot', () => { 
        const {container} = render(<GiftItem title={title} url={url} id={id}/>)
        expect(container).toMatchSnapshot()
    })
    test('Deberia Mostrar la URL de la imagen con el URL y el ALT indicado', () => { 
        const {getByRole} = render(<GiftItem title={title} url={url} id={id}/>)
        expect(getByRole('img')).toHaveProperty('src', url)
        expect(getByRole('img')).toHaveProperty('alt', title)
    })
    test('Deberia Mostrar el titulo de la imagen', () => { 
        const {getByText} = render(<GiftItem title={title} url={url} id={id}/>)
        expect(getByText(title)).toBeTruthy()
    })
    
    
 })