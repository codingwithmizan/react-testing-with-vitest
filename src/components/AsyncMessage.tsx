/** @format */

import { useState, useEffect } from "react";

export const AsyncMessage = () => {
	const [message, setMessage] = useState("prev");

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage("Hello World");
		}, 900);

		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="m-20">
			<h1>{message}</h1>
		</div>
	);
};
