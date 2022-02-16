import { useState } from "react";
import { FC } from "react";
import Input from "./Input";
const Form: FC<{ childToParent: (data: string) => void }> = ({
	childToParent,
}) => {
	const [nameInput, setNameInput] = useState("");
	const onChange = (str: string) => {
		setNameInput(str);
	};

	return (
		<>
			<style>
				{`
			.form {
				display: flex;
				flex-direction: column;
				flex-grow : 0.5;
				align-items: center;
				background-color: #ffffff;
				padding: 20px;
				justify-content: center;
				text-align: center;
				align-self: center;
				height: 8vh;
				margin: 0 auto;
				width: 20vw;
			}
			.btn-sub{
				background-color: #4CAF50;
				color: white;
				padding: 2px;
				margin: 5px;
				border-radius: 5px;
				cursor: pointer;
				padding: 7px 16px;
				text-decoration: none;
				font-size: 16px;
			}
		`}
			</style>
			<form className='form'>
				<Input
					onChange={onChange}
					name='name'
					placeholder='Enter your city name'
					value={nameInput}
				/>
				<button
					className='btn-sub'
					onClick={(e) => {
						e.preventDefault();
						childToParent(nameInput);
						setNameInput(nameInput);
					}}>
					Go
				</button>
			</form>
		</>
	);
};

export default Form;
