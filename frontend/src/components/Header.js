import logo from "../favicon.ico";
const Header = () => {
    return (
        <div className="text-container">
            <img src={logo} alt="Logo" width="200" className="mb-4" />
            <h1>BioGuard</h1>
        </div>
    );
};

export default Header;