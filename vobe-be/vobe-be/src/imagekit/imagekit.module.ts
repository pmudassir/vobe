import { Module } from '@nestjs/common';
import { ImageKitService } from './imagekit.service';
import { ConfigurableModuleClass } from './imagekit.module.definition';

@Module({
  providers: [ImageKitService],
  exports: [ImagekitModule, ImageKitService],
})
export class ImagekitModule extends ConfigurableModuleClass {}
