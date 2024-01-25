/** @format */

import { render, screen } from "@testing-library/react";
import Application from "@/components/Application";
import { expect } from "vitest";

test("Application component renders correctly", () => {
	render(<Application />);
	// logRoles(container)
	// screen.debug()
	const inputElement = screen.getByRole("textbox");
	expect(inputElement).toBeInTheDocument();

	const selectElement = screen.getByRole("combobox");
	expect(selectElement).toBeInTheDocument();

	const checkboxElement = screen.getByRole("checkbox");
	expect(checkboxElement).toBeInTheDocument();

	const button = screen.getByRole("button");
	expect(button).toBeInTheDocument();
});
