import { PartialType } from '@nestjs/mapped-types';
import { CreateAgenteSaudeDto } from './create-agente-saude.dto';

export class UpdateAgenteSaudeDto extends PartialType(CreateAgenteSaudeDto) {}
