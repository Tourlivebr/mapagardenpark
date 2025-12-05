"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redireciona ao acessar a home
    window.location.href = "/cartao/gp_popup"; // Muda para o slug desejado
  }, []);

  return <p>Siga seu caminho....</p>;
}
