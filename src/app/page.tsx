"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redireciona ao acessar a home
    window.location.href = "/cartao/gardenpark"; // Muda para o slug desejado
  }, []);

  return <p>Siga seu caminho...</p>;
}
