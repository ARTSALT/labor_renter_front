import React, { useState } from "react";
import '../globals.css';
import Header from "./header";
import Footer from "./footer";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        cpf: "",
        cep: "",
        rua: "",
        numero: "",
        complemento: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Nome completo é obrigatório";
        if (!formData.email) newErrors.email = "E-mail é obrigatório";
        if (!formData.password) newErrors.password = "Senha é obrigatória";
        if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";
        if (!formData.cep) newErrors.cep = "CEP é obrigatório";
        if (!formData.rua) newErrors.rua = "Rua é obrigatória";
        if (!formData.numero) newErrors.numero = "Número é obrigatório";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await fetch("http://localhost:8080/api/v1/contractor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
                
            });

            if (response.status === 500) throw new Error("Erro ao cadastrar");

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
                        name="name"
                        placeholder="name"
                        value={formData.name}
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
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmarpassword"
                        placeholder="Confirmar password"
                        value={formData.confirmarpassword}
                        onChange={handleChange}
                    />

                </div>

                <div className="form_group">
                    
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