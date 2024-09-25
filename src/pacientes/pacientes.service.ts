import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PacienteEntity } from './entities/paciente.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prisma :PrismaService){}
  async create(createProdutoDto: CreatePacienteDto) :Promise<PacienteEntity> {
    return this.prisma.paciente.create({data :createProdutoDto});
  }

  async findAll() :Promise<PacienteEntity[]>{
    return this.prisma.paciente.findMany();
  }

  async findOne(id: number) :Promise<PacienteEntity>{
    return this.prisma.paciente.findUnique({ where: { id } });
  }

  async update(id :number, updatePacienteDto: UpdatePacienteDto) :Promise<PacienteEntity>{
    return this.prisma.paciente.update({ where: { id }, data: updatePacienteDto} );
  }
  async remove(id: number) :Promise<PacienteEntity>{
    return this.prisma.paciente.delete({where:{id}});
  }
}
