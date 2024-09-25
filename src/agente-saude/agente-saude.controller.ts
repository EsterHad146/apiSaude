import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgenteSaudeService } from './agente-saude.service';
import { CreateAgenteSaudeDto } from './dto/create-agente-saude.dto';
import { UpdateAgenteSaudeDto } from './dto/update-agente-saude.dto';

@Controller('agente-saude')
export class AgenteSaudeController {
  constructor(private readonly agenteSaudeService: AgenteSaudeService) {}

  @Post()
  create(@Body() createAgenteSaudeDto: CreateAgenteSaudeDto) {
    return this.agenteSaudeService.create(createAgenteSaudeDto);
  }

  @Get()
  findAll() {
    return this.agenteSaudeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenteSaudeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenteSaudeDto: UpdateAgenteSaudeDto) {
    return this.agenteSaudeService.update(+id, updateAgenteSaudeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agenteSaudeService.remove(+id);
  }
}
