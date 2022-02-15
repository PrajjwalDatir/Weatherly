import React, { useState } from "react";

import Input from "../components/input";

function Form() {
	const [nameInput, setNameInput] = useState("");
	const onChange = (str: string) => {
		setNameInput(str);
	};

	return (
		<>
			<form>
				<Input
					onChange={onChange}
					name='name'
					placeholder='Enter your city name'
					value={nameInput}
				/>
			</form>
			<button onClick={submitForm}>Submit</button>
		</>
	);
	function submitForm() {
		console.log(nameInput);
	}
}

export default Form;
