import React from 'react';
import PacientesList from './PacientesList';
import CreatePaciente from './CreatePaciente';

function App() {
  return (
    <div>
      <h1>Formulários de Pacientes</h1>
      <CreatePaciente />
      <PacientesList />
    </div>
  );
}

export default App;
