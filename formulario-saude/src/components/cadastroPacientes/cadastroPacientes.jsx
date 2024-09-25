import React, { useState } from 'react';
import axios from 'axios';

function CreatePaciente() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3000/paciente', {
        nome,
        endereco,
        anotacoes: '- Sem anotações ainda',
        exames: '- Sem exames ainda',
        agendamentos: '- Sem agendamentos ainda',
        campanhas: '- Sem campanhas ainda',
        assinaturaDigital: 'Assinatura Inicial'
      });
      alert('Paciente criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
      alert('Erro ao criar paciente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome Completo:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Endereço Residencial:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar novo Paciente</button>
    </form>
  );
}

export default CreatePaciente;
