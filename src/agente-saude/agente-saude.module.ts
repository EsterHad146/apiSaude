import { Module } from '@nestjs/common';
import { AgenteSaudeService } from './agente-saude.service';
import { AgenteSaudeController } from './agente-saude.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AgenteSaudeController],
  providers: [AgenteSaudeService, PrismaService],
})
export class AgenteSaudeModule {}
