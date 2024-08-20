import { Scene, SceneEnter, Ctx, Action, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('startScene')
export class StartScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Привет! Давай начем:',
      Markup.keyboard(['Записаться', 'Мои записи', 'Отменить запись', 'Наши услуги', 'Наши специалисты', 'Настройки'], {
        columns: 2,
      }),
    );
  }

  @Hears('Записаться')
  async onBookingAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('bookingScene');
  }

  @Hears('note')
  async onNoteAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('bookingScene');
  }

  @Hears('Настройки')
  async onSettingsAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('settingsScene');
  }

  @Action(/.*/)
  async onAnswer(@Ctx() ctx: SceneContext) {
    const name = ctx.callbackQuery.id;
    await ctx.reply(`Привет, ${name}!`);
    await ctx.scene.enter('bookingScene');
  }
}
