import { Inject, Injectable } from '@nestjs/common';
import ImageKit from 'imagekit';
import { ImageKitConfig } from './imagekit.interface';
import { MODULE_OPTIONS_TOKEN } from './imagekit.module.definition';

@Injectable()
export class ImageKitService {
  private imagekit: ImageKit;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly config: ImageKitConfig
  ) {
  }

  onModuleInit() {
    this.imagekit = new ImageKit(this.config.imageKit);
  }
  
  async uploadObject(
    file: Buffer,
    fileName: string,
    folder:string,
    isPrivateFile = true
  ) {
    const { filePath, fileType, fileId } = await this.imagekit.upload({
      file: file,
      fileName: fileName,
      folder,
      isPrivateFile,
    });
    return { filePath, fileType, fileId };
  }

  async uploadUrl(
    file: string,
    fileName: string,
    folder:string,
    isPrivateFile = true
  ) {
    const { filePath, fileType, fileId } = await this.imagekit.upload({
      file: file,
      fileName: fileName,
      folder,
      isPrivateFile,
    });
    return { filePath, fileType, fileId };
  }


  getSignedUrl(path: string): string {
    return this.imagekit.url({
      path,
      // transformation: [
      //   {
      //     height: '300',
      //     width: '400',
      //   },
      // ],

      signed: true,
      expireSeconds: 1200,
    });
  }

  async deleteImage(fileId: string) {
    await this.imagekit.deleteFile(fileId);
  }
}
