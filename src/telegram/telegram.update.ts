import { Command, Ctx, InjectBot, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { StartScene } from './scenes/start.scene';
import { SceneContext } from 'telegraf/typings/scenes';
import { BookingScene } from './scenes/booking/booking.scene';
import { FacialCosmetologyScene } from './scenes/booking/cosmetology/cosmetology.scene';
import { SettingsScene } from './scenes/settings.scene';

@Update()
export class TelegramUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly startScene: StartScene,
    private readonly bookingScene: BookingScene,
    private readonly facialCosmetologyScene: FacialCosmetologyScene,
    private readonly settingsScene: SettingsScene,
  ) {}

  @Command('start')
  async onStart(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }

  @Command('booking')
  async onBooking(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('bookingScene');
  }

  @Command('cancel')
  async onCancel(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }

  @Command('sevices')
  async onHelp(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }

  @Command('specialists')
  async start(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }

  @Command('settings')
  async onSettings(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('settingsScene');
  }

  @Command('help')
  async example(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }
}
