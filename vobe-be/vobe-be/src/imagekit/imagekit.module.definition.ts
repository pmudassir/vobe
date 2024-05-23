import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ImageKitConfig } from './imagekit.interface';

export const { MODULE_OPTIONS_TOKEN, ConfigurableModuleClass } =
  new ConfigurableModuleBuilder<ImageKitConfig>()
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      })
    )
    .build();
