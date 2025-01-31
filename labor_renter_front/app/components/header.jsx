"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css";
import Image from "next/image";

function Header() {
  const router = useRouter();

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.search.value;

    if (query) {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/job/search?q=${query}`);
        if (!response.ok) throw new Error("Erro ao buscar trabalhos");
        const data = await response.json();

        router.push(`/pages/pesquisa?q=${query}`);
      } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao buscar trabalhos");
      }
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link href="/">
          <Image src="/logo-labor.jpg" alt="Labor Renter" width={50} height={50} className="logo" />
        </Link>
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Buscar serviços..." />
        <button type="submit">
          <Image src="/search.png" alt="pesquisar" width={20} height={20} className="search_button" />
        </button>
      </form>

      <div className="header-right">
        <button className="btn login" onClick={() => router.push("/pages/login")}>Login</button>
        <button className="btn signup" onClick={() => router.push("/pages/cadastro")}>Cadastro</button>
      </div>
    </header>
  );
}

export default Header;