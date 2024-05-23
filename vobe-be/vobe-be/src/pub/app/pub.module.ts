import { Module } from '@nestjs/common';
import { PubRepository } from '../repositories/pub.repository';
import { PrismaService } from 'src/db/prisma.service';
import { PubController, AmbassadorController } from '../controllers';

@Module({
  controllers: [PubController, AmbassadorController],
  providers: [PubRepository, PrismaService],
})
export class PubModule {}
