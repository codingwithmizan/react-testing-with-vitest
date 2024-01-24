/** @format */

const Application = () => {
	console.log(x);

	const x = 90
	return (
		<form>
			<div className="mb-6">


				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					className="border border-green-500"
				/>
			</div>
			<div className="mb-6">
				<label htmlFor="job-location">Job Location</label>
				<select id="job-location" className="border border-green-500">
					<option value="US"> United States</option>
					<option value="UK"> United Kingdom</option>

					<option value="CA"> Canada</option>

					<option value="BD"> Bangladesh</option>

					<option value="AU"> Australia</option>
				</select>
			</div>
			<div className="mb-6">
				<label htmlFor="">
					<input type="checkbox" id="terms" /> I agree to the terms
					and condition
				</label>
			</div>
			<button className="bg-green-600 text-white p-2">Submit</button>
		</form>
	);
};

export default Application;
