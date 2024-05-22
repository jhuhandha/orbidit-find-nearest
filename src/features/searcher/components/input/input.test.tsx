// src/input.test.tsx

import { jest } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./input";

describe("Index component", () => {
  let items = [
    { name: "City A", country: "US", lat: "34.0522", lng: "-118.2437" },
    { name: "City B", country: "US", lat: "36.1699", lng: "-115.1398" },
  ];

  it("renders the component with autocomplete", () => {
    const findClosestCities = jest.fn();
    const clearResult = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        items={items}
        findClosestCities={findClosestCities}
        clearResult={clearResult}
      />
    );

    expect(
      getByPlaceholderText("Type the city you want to search for")
    ).toBeInTheDocument();
  });

  it("calls findClosestCities when an item is selected", () => {
    const findClosestCities = jest.fn();
    const clearResult = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <Input
        items={items}
        findClosestCities={findClosestCities}
        clearResult={clearResult}
      />
    );

    const input = getByPlaceholderText("Type the city you want to search for");
    fireEvent.change(input, { target: { value: "City A" } });
    fireEvent.click(getByText("City A (US)"));

    expect(findClosestCities).toHaveBeenCalledWith(34.0522, -118.2437);
  });

  it("calls clearResult when the clear button is clicked", () => {
    const findClosestCities = jest.fn();
    const clearResult = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        items={items}
        findClosestCities={findClosestCities}
        clearResult={clearResult}
      />
    );

    const input = getByPlaceholderText("Type the city you want to search for");
    fireEvent.change(input, { target: { value: "" } });

    expect(clearResult).toHaveBeenCalled();
  });
});
