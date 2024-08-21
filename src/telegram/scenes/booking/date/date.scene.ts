import { Scene, SceneEnter, Ctx, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('dateScene')
export class DateScene {
  @SceneEnter()
  async onDateEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Список доступный для записи или ввдедите дату',
      Markup.keyboard(
        [
          'ср 19.08.2024',
          'чт 20.08.2024',
          'пт 21.08.2024',
          'сб 22.08.2024',
          'вс 23.08.2024',
          'пн 24.08.2024',
          'вт 25.08.2024',
          'еще',
          'Назад',
        ],
        {
          columns: 2,
        },
      ),
    );
  }

  @Hears('ср 19.08.2024')
  async onTime(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('timeScene');
  }

  @Hears('Назад')
  async onBackAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('facialCosmetologyScene');
  }
}
