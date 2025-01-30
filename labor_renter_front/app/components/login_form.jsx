import React from "react";
import '../globals.css';
import Header from "./header";
import Footer from "./footer";

function LoginForm() {
    return (
        <div className="login_form">
            <Header />
            <h1>Login</h1>
            <form>
                <div className="form_group">
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                </div>

                <div className="form_group">
                    <button type="submit">Confirmar</button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default LoginForm;