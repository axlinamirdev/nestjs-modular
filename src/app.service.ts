import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    //private configService: ConfigService,
    @Inject('TASKS') private tasks: string,
  ) {}

  getHello(): string {
    const apiKey = this.configService.apiKey;
    const databaseName = this.configService.database.name;
    return 'Hello World! ' + apiKey + 'Batabase: ' + databaseName;
  }
}
