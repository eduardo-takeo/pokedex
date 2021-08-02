import React from "react";
import { render, screen } from "@testing-library/react";
import CaptureButton from ".";

describe("CaptureButton component", () => {
  it("should render correctly", () => {
    render(<CaptureButton />);

    const captureButton = screen.getByRole("img", { name: "Capture" });
    expect(captureButton).toBeInTheDocument();
    expect(captureButton).toContainElement(
      screen.getByRole("img", { name: "Capture" })
    );
  });

  it("should have an img tag", () => {
    render(<CaptureButton />);

    const captureButton = screen.getByRole("img", { name: "Capture" });
    expect(captureButton).toContainElement(
      screen.getByRole("img", { name: "Capture" })
    );
  });
});
