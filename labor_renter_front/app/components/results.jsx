"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "../globals.css";
import Footer from "./footer";
import Header from "./header";

function SearchResult() {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchResultados = async () => {
      if (query) {
        try {
          const response = await fetch(`http://localhost:8080/api/v1/job/search?q=${query}`);
          if (!response.ok) throw new Error("Erro ao buscar resultados");
          const data = await response.json();
          setResultados(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResultados();
  }, [query]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="search-results">
      <h1>Resultados para: {query}</h1>
      {resultados.length > 0 ? (
        <div className="cards-container">
          {resultados.map((trabalho) => (
            <div key={trabalho.id} className="card">
              <h2 className="card-title">{trabalho.workerName}</h2>
              <p className="card-description">{trabalho.description}</p>
              <div className="card-details">
                <span className="card-rating">⭐ {trabalho.avaliation}</span>
                <span className="card-price">R${trabalho.price}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default SearchResult;