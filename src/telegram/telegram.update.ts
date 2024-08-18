import { Command, Ctx, InjectBot, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { StartScene } from './scenes/start.scene';
import { SceneContext } from 'telegraf/typings/scenes';

@Update()
export class TelegramUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly startScene: StartScene,
  ) {}

  @Command('start')
  async onStart(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }

  @Command('booking')
  async onBooking(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
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

  @Command('help')
  async example(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }
}
