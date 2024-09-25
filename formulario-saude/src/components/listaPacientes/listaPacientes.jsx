import React, { useEffect, useState } from "react";
import axios from "axios";

//Esse componente faz uma requisição GET para a API em http://localhost:3000/paciente, pega os dados e os exibe.
function ListaPacientes() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        const fecthPacientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/paciente');
                setPacientes(response.data);
            } catch (error) {
                console.error("Erro ao buscar pacientes", error);
            }
        };
        fecthPacientes();
    },[]);

    return (
        <div>
            <h1>Lista de Pacientes</h1>
            <ul>
                {pacientes.map((paciente) => (
                    <li key={paciente.id}>
                        {paciente.nome} - {paciente.endereco}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListaPacientes;