import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { StartScene } from './scenes/start.scene';
import { TelegramUpdate } from './telegram.update';
import { options } from './telegram-config.factory';

@Module({
  imports: [TelegrafModule.forRootAsync(options())],
  providers: [TelegramUpdate, StartScene],
})
export class TelegramModule {}
