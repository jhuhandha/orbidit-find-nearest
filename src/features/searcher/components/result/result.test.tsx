// src/result.test.tsx

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./result";
import { City } from "../../types/city";

describe("Result component", () => {
  const closestCities: City[] = [
    { name: "City A", country: "US" },
    { name: "City B", country: "UK" },
    // Agrega más ciudades según sea necesario
  ];

  it("renders the component with nearby cities", () => {
    const { getByText } = render(<Result loading={false} closestCities={closestCities} />);

    expect(getByText("The nearby cities are:")).toBeInTheDocument();
    closestCities.forEach((city) => {
      expect(getByText(city.name)).toBeInTheDocument();
      expect(getByText(city.country)).toBeInTheDocument();
    });
  });

  it("renders nothing when closestCities is empty", () => {
    const { queryByText } = render(<Result loading={false} closestCities={[]} />);

    expect(queryByText("The nearby cities are:")).toBeNull();
  });

  it("renders nothing when loading is true", () => {
    const { queryByText } = render(<Result loading={true} closestCities={closestCities} />);

    expect(queryByText("The nearby cities are:")).toBeNull();
  });
});
