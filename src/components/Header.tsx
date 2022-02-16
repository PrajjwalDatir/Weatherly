// create a header component
import logo from "../mock/manifest-icon-192.maskable.png";
const Header = () => {
	const width = "80em";
	return (
		<>
			<style>{`
      .topbar {
        display: flex;
        flex-direction: row;
        flex-grow : 0.5;
        justify-content : center;
        background-color: #ffffff;
        padding: 20px;
        text-align: center;
      }
    `}</style>
			<div className='topbar'>
				<img src={logo} alt='logo' width={width} />
				<h1 className='header'>Weatherly</h1>
			</div>
		</>
	);
};
export default Header;
