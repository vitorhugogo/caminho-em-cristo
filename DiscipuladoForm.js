
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function DiscipuladoForm() {
  const [formData, setFormData] = useState({
    nome: '',
    respostas: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nome: formData.nome,
      respostas: formData.respostas,
    };

    emailjs
      .send("service_dicipulado", "template_t4901af", templateParams, "MSNoSKPeaWu0E8qti")
      .then(
        (result) => {
          alert("Respostas enviadas com sucesso!");
          setFormData({ nome: '', respostas: '' });
        },
        (error) => {
          alert("Erro ao enviar. Verifique sua conexão.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📖 Estudo 1 — Convicção de Salvação</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Nome completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold">
            Respostas do Estudo (copie e cole ou escreva suas respostas):
          </label>
          <textarea
            name="respostas"
            value={formData.respostas}
            onChange={handleChange}
            rows={10}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite suas respostas aqui..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Enviar Respostas
        </button>
      </form>
    </div>
  );
}
