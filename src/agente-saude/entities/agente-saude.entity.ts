import { AgenteSaude } from "@prisma/client";

export class AgenteSaudeEntity implements AgenteSaude {
    id: number;
    nome: string;
    createAt: Date;
    updateAt: Date;

}
