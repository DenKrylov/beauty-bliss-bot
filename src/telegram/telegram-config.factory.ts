import { ConfigService } from '@nestjs/config';
import { TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf';
import { session } from 'telegraf';

const telegrafModuleOptions = (config: ConfigService): TelegrafModuleOptions => {
  return {
    middlewares: [session()],
    token: config.get('TELEGRAM_BOT_TOKEN'),
  };
};

export const options = (): TelegrafModuleAsyncOptions => {
  return {
    inject: [ConfigService],
    useFactory: (config: ConfigService) => telegrafModuleOptions(config),
  };
};
