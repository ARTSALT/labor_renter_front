"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "../globals.css";

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
    <div>
      <h1>Resultados para: {query}</h1>
      {resultados.length > 0 ? (
        <ul>
          {resultados.map((trabalho) => (
            <li key={trabalho.id}>
              <h2>{trabalho.workerName}</h2>
              <p>{trabalho.description}</p>
              <small>Avaliação: {trabalho.avaliation}</small>
              <small>Localização: {trabalho.location}</small>
              <small>Contratos: {trabalho.contractIds.join(", ")}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default SearchResult;