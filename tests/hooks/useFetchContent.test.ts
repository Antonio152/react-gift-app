import { renderHook } from "@testing-library/react";
import { useFetchContent } from "../../src/hooks/useFetchContent";

jest.mock("../../src/hooks/useFetchContent", () => ({
  useFetchContent: jest.fn(),
}));
describe('Pruebas de Hook de gifts', () => { 
    
    test('Debe de regresar el estado inicial', () => { 
        (useFetchContent as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true,
        });
        const {result} = renderHook(()=> useFetchContent('Naruto','10'))
        const {images,isLoading} = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
     })

     test('Debe de retornar un arreglo de imagenes y es loading en false (Mock function)', () => { 
        const images = [
            {
              id: "ABC",
              title: "Sasuke",
              url: "https://localhost/cualquier/Sasuke.jpg",
            },
            {
              id: "123",
              title: "Naruto",
              url: "https://localhost/cualquier/Naruto.jpg",
            },
        ];
        (useFetchContent as jest.Mock).mockReturnValue({
            images,
            isLoading: false,
        });
        const {result} = renderHook(()=> useFetchContent('Naruto','2'))
        expect(result.current.images.length).toBe(2)
        expect(result.current.isLoading).toBeFalsy()
    })

 })