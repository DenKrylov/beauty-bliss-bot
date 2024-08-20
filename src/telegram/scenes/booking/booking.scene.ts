import { Scene, SceneEnter, Ctx, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('bookingScene')
export class BookingScene {
  @SceneEnter()
  async onBookingSceneEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Давай те выберем направление',
      Markup.keyboard(['Косметология', 'Массаж', 'Эпиляция', 'Назад'], {
        columns: 2,
      }),
    );
  }

  @Hears('Косметология')
  async onCosmetologyAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('facialCosmetologyScene');
  }

  @Hears('Назад')
  async onBackAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('startScene');
  }
}
