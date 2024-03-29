/** @format */

import { useForm } from "react-hook-form";

interface IData {
	name: string;
	email: string;
	age: number;
}
export const UserForm = () => {
	const { handleSubmit, register } = useForm<IData>();

	const onSubmit = (data: IData) => {
		console.log(data);
	};
	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label htmlFor="name">Name </label>
				<input
					type="text"
					id="name"
					{...register("name")}
					className="border"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email">Email </label>
				<input
					type="text"
					id="email"
					{...register("email")}
					className="border"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="age">Age</label>
				<input
					type="number"
					id="age"
					{...register("age")}
					className="border"
				/>
			</div>
			<div className="mb-4">
				<button className="bg-sky-700 text-white p-2">Submit</button>
			</div>
		</form>
	);
};
