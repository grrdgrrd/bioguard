import { useState } from "react";
import Header from "./Header";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        console.log(email, passwd);
    };

    return (
        <div className="container mt-5">
            <Header />
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwd" className="form-label">Constraseña</label>
                    <input
                        type="passwd"
                        className="form-control"
                        id="passwd"
                        value={passwd}
                        onChange={e => setPasswd(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default SignUp;