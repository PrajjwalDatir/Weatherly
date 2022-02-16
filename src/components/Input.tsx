type Props = {
	onChange: (str: string) => void;
	placeholder: string;
	name: string;
	value?: string;
};
const Input = ({ onChange, name, placeholder, value = "" }: Props) => {
	return (
		<>
			<style>
				{`
      .input {
        display: flex;
        background-color: #ffffff;
        padding: 20px;
        justify-content: center;
        text-align: center;
      }
    `}
			</style>
			<input
				className='input'
				onChange={(event) => onChange(event.target.value)}
				name={name}
				placeholder={placeholder}
				value={value}
			/>
		</>
	);
};

export default Input;
