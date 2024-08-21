import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { StartScene } from './scenes/start.scene';
import { TelegramUpdate } from './telegram.update';
import { options } from './telegram-config.factory';
import { BookingScene } from './scenes/booking/booking.scene';
import { FacialCosmetologyScene } from './scenes/booking/cosmetology/cosmetology.scene';
import { SettingsScene } from './scenes/settings.scene';
import { DateScene } from './scenes/booking/date/date.scene';
import { TimeScene } from './scenes/booking/date/time.scene';
import { AcceptScene } from './scenes/booking/accept.scene';

@Module({
  imports: [TelegrafModule.forRootAsync(options())],
  providers: [
    TelegramUpdate,
    StartScene,
    BookingScene,
    FacialCosmetologyScene,
    SettingsScene,
    DateScene,
    TimeScene,
    AcceptScene,
  ],
})
export class TelegramModule {}
