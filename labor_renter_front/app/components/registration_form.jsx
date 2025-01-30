import React from "react";
import '../globals.css';
import Header from "./header";
import Footer from "./footer";

function RegistrationForm() {
    return (
        <div className="registration_form">
            <Header />
            <h1>Cadastro</h1>
            <form>
                <div className="form_group">
                    <input type="text" placeholder="Nome Completo" />
                    <input type="email" placeholder="E-mail" />
                </div>

                <div className="form_group">
                    <input type="password" placeholder="Senha" />
                    <input type="date" placeholder="Data de Nascimento" />
                </div>

                <div className="form_group">
                    <input type="password" placeholder="Confirmar Senha" />
                    <input type="text" placeholder="CPF" />
                </div>

                <div className="form_group">
                    <input type="text" placeholder="CEP" />
                </div>

                <div className="form_group">
                    <input type="text" placeholder="Rua" />
                    <input type="number" placeholder="N°" />
                </div>

                <div className="form_group">
                    <input type="text" placeholder="Complemento" />
                </div>

                <div className="form_group">
                    <button type="submit">Confirmar</button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default RegistrationForm;