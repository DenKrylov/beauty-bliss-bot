import { Scene, SceneEnter, Ctx, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('timeScene')
export class TimeScene {
  @SceneEnter()
  async onTimeEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Давайте выберем время',
      Markup.keyboard(['09-30', '11-45', '13-00', '17-15', 'Назад'], {
        columns: 2,
      }),
    );
  }

  @Hears('09-30')
  async onTime(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('acceptScene');
  }

  @Hears('Назад')
  async onBackAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('dateScene');
  }
}
