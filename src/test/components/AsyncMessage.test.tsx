/** @format */

import { render, screen, waitFor } from "@testing-library/react";
import { AsyncMessage } from "@/components/AsyncMessage";

describe("Async message", () => {
	test("abc ", async () => {
		render(<AsyncMessage />);
		const headingElement = screen.getByRole("heading");
		expect(headingElement).toBeInTheDocument();
		await waitFor(() => {
			expect(headingElement).toHaveTextContent(/Hello World/i);
		});
	});
});
