// App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders MovieCard component with correct props", () => {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const { getByAltText, getByText } = render(<App />);

  // Check if the MovieCard component renders
  const movieCardElement = getByAltText(title);
  expect(movieCardElement).toBeInTheDocument();

  // Check if the title and genres are rendered correctly
  expect(getByText(title)).toBeInTheDocument();
  genresArr.forEach(genre => {
    expect(getByText(genre)).toBeInTheDocument();
  });
});

