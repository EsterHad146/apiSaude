import { Paciente } from "@prisma/client";

export class PacienteEntity implements Paciente {
    id: number;
    nome: string;
    endereco: string;
    anotacoes: string;
    exames: string;
    agendamentos: string;
    campanhas: string;
    assinaturaDigital: string;
    createAt: Date;
    updateAt: Date;
    agenteSaudeId: number;

}
