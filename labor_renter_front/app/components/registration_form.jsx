import React, { useState } from "react";
import '../globals.css';
import Header from "./header";
import Footer from "./footer";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        nomeCompleto: "",
        email: "",
        senha: "",
        dataNascimento: "",
        confirmarSenha: "",
        cpf: "",
        cep: "",
        rua: "",
        numero: "",
        complemento: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch("http://localhost:8080/api/v1/contractor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Erro ao cadastrar");

            const data = await response.json();
            console.log("Sucesso:", data);
            alert("Cadastro realizado com sucesso!");

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao cadastrar");
        }
    };

    return (
        <div className="registration_form">
            <Header />
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_group">
                    <input
                        type="text"
                        name="nomeCompleto"
                        placeholder="Nome Completo"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_group">
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="dataNascimento"
                        placeholder="Data de Nascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_group">
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_group">
                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={formData.cep}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_group">
                    <input
                        type="text"
                        name="rua"
                        placeholder="Rua"
                        value={formData.rua}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="numero"
                        placeholder="N°"
                        value={formData.numero}
                        onChange={handleChange}
                    />
                </div>

                <div className="form_group">
                    <input
                        type="text"
                        name="complemento"
                        placeholder="Complemento"
                        value={formData.complemento}
                        onChange={handleChange}
                    />
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