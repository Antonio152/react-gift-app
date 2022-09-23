import { render } from "@testing-library/react";
import React from "react";
import { GiftGrid } from "../../src/components";
import "@testing-library/jest-dom/extend-expect";
import { useFetchContent } from "../../src/hooks/useFetchContent";

jest.mock("../../src/hooks/useFetchContent", () => ({
  useFetchContent: jest.fn(),
}));

describe("Prueba en GiftGrid/>", () => {
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
  const category = "Naruto";
  const limitGifts = "10";
  test("Debe mostrar el loading inicialmente", () => {
    (useFetchContent as jest.Mock).mockReturnValue({
      images: [],
      isLoading: true,
    });
    const { getByText } = render(
      <GiftGrid category={category} limitGifts={limitGifts} />
    );
    expect(getByText("Cargando...")).toBeInTheDocument();
    expect(getByText("Naruto")).toBeInTheDocument();
  });
  test("Debe mostrar los items cuando se cargan las imagenes", () => {
    (useFetchContent as jest.Mock).mockReturnValue({
      images,
      isLoading: false,
    });
    const { getByText } = render(
      <GiftGrid category={category} limitGifts={limitGifts} />
    );
    expect(getByText("Sasuke")).toBeInTheDocument();
  });
});
