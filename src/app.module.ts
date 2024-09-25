import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismanestService } from './generate/prismanest/prismanest.service';
import { AgenteSaudeModule } from './agente-saude/agente-saude.module';

@Module({
  imports: [PacientesModule, AgenteSaudeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismanestService],
})
export class AppModule {}
