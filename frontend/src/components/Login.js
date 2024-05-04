import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        console.log(email, passwd);
    };

    return (
        <div className="container mt-5">
            <Header />
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form.label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwd" className="form-label">Contraseña</label>
                    <input
                        type="passwd"
                        className="form-control"
                        id="passwd"
                        value={passwd}
                        onChange={e => setPasswd(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
                <p className="mt-2">
                    No tienes cuenta? <Link to="/signup">Regístrate</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;