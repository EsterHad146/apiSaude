import { Injectable } from '@nestjs/common';
import { CreateAgenteSaudeDto } from './dto/create-agente-saude.dto';
import { UpdateAgenteSaudeDto } from './dto/update-agente-saude.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AgenteSaudeEntity } from './entities/agente-saude.entity';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma :PrismaService){}
  async create(createAgenteSaudeDto: CreateAgenteSaudeDto) :Promise<AgenteSaudeEntity> {
    return this.prisma.agenteSaude.create({data :createAgenteSaudeDto});
  }

  async findAll() :Promise<AgenteSaudeEntity[]>{
    return this.prisma.agenteSaude.findMany();
  }

  async findOne(id: number) :Promise<AgenteSaudeEntity>{
    return this.prisma.agenteSaude.findUnique({ where: { id } });
  }

  async update(id :number, updatePacienteDto: UpdateAgenteSaudeDto) :Promise<AgenteSaudeEntity>{
    return this.prisma.agenteSaude.update({ where: { id }, data: UpdateAgenteSaudeDto} );
  }
  async remove(id: number) :Promise<AgenteSaudeEntity>{
    return this.prisma.agenteSaude.delete({where:{id}});
  }
}

