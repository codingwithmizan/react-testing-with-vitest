export const Example1 = () => {
	return (
		<form>
			<div className="mb-6">
				<label htmlFor="name" className="block mb-2">
					Name
				</label>
				<input
					type="text"
					placeholder="John Doe"
					className="form-control hover:border-red-300"
				/>
			</div>

			<div className="mb-6">
				<label htmlFor="email" className="block mb-2">
					Email
				</label>
				<input
					type="email"
					placeholder="John@gmail.com"
					className="form-control hover:border-green-300"
				/>
			</div>
			<div className="flex space-x-2">
				<button className=" btn bg-sky-600 hover:bg-sky-500 ">
					Submit
				</button>
				<button className="btn bg-red-600 hover:bg-red-500 ">
					Reset
				</button>
			</div>
		</form>
	);
};

// export const Example1 = () => {
//     return (
//       <form action="">
//         <div className="mb-6">
//           <label htmlFor="name" className="block mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             placeholder="John Doe"
//             className="border rounded p-2 w-96 block focus-within:outline-none hover:border-red-300"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="John@gmail.com"
//             className="border rounded p-2 w-96 block focus-within:outline-none hover:border-red-300"
//           />
//         </div>
//         <div className="flex space-x-2">
//           <button className="text-white w-24 h-10 rounded  block  bg-sky-600 hover:bg-sky-500 ">Submit</button>
//           <button className= text-white  w-24 h-10 rounded  block "bg-red-600  hover:bg-red-500">Reset</button>
//         </div>
//       </form>
//     );
//   };
