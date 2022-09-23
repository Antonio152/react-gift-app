import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import GiftApp from "../../src/GiftApp"
import { useFetchContent } from "../../src/hooks/useFetchContent";

jest.mock("../../src/hooks/useFetchContent", () => ({
  useFetchContent: jest.fn(),
}));

describe('Testing de funcionamiento de aplicación', () => {
    test('Deberia indicar como vista principal Naruto y estado de carga', () => { 
        (useFetchContent as jest.Mock).mockReturnValue({
            images:[],
            isLoading: true,
        });
        const {getByText} = render(<GiftApp/>)
        expect(getByText('Cargando...')).toBeTruthy()
        expect(getByText('Naruto')).toBeTruthy()
    })

    test('Deberia mostrar las imagenes correctamente', async() => { 
        const images = [
            {
              id: "ABC",
              title: "Naruto1",
              url: "https://localhost/cualquier/Naruto1.jpg",
            },
            {
              id: "123",
              title: "Naruto2",
              url: "https://localhost/cualquier/Naruto2.jpg",
            },
          ];
        (useFetchContent as jest.Mock).mockReturnValue({
            images,
            isLoading: false,
        });
        const {getByText} = render(<GiftApp/>)
        expect(getByText('Naruto1')).toBeTruthy()
    })
    test('Deberia mostrar las imagenes del valor buscado', async() => { 
        const images = [
            {
              id: "ABC",
              title: "Sasuke1",
              url: "https://localhost/cualquier/Sasuke1.jpg",
            },
            {
              id: "123",
              title: "Sasuke2",
              url: "https://localhost/cualquier/Sasuke2.jpg",
            },
          ];
        (useFetchContent as jest.Mock).mockReturnValue({
            images,
            isLoading: false,
        });
        const {getByPlaceholderText,getByRole,getByText} = render(<GiftApp/>)
        fireEvent.change(getByPlaceholderText('Search Gift'), { target: { value: 'Sasuke' } })
        expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','Sasuke')
        fireEvent.change(getByPlaceholderText('Number of gifts'), { target: { value: '10' } })
        expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','10')
        expect(getByRole('button')).toBeEnabled()
        fireEvent.click(getByRole('button'))
        expect(getByText('Sasuke')).toBeTruthy()
    })
    test('Deberia mostrar todos los valores buscados en pantalla', () => { 
      const images = [
        {
          id: "ABC",
          title: "Sasuke1",
          url: "https://localhost/cualquier/Sasuke1.jpg",
        },
        {
          id: "123",
          title: "Sasuke2",
          url: "https://localhost/cualquier/Sasuke2.jpg",
        },
      ];
      (useFetchContent as jest.Mock).mockReturnValue({
          images,
          isLoading: false,
      });
      const {getByPlaceholderText,getByRole,getByText} = render(<GiftApp/>)
      fireEvent.change(getByPlaceholderText('Search Gift'), { target: { value: 'Sasuke' } })
      expect(getByPlaceholderText('Search Gift')).toHaveProperty('value','Sasuke')
      fireEvent.change(getByPlaceholderText('Number of gifts'), { target: { value: '10' } })
      expect(getByPlaceholderText('Number of gifts')).toHaveProperty('value','10')
      expect(getByRole('button')).toBeEnabled()
      fireEvent.click(getByRole('button'))
      expect(getByText('Sasuke')).toBeTruthy()
      expect(getByText('Naruto')).toBeTruthy()
     })
    /* Validar cuando se limpia una busqueda con Regex */
 })