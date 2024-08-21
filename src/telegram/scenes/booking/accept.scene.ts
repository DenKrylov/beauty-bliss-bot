import { Scene, SceneEnter, Ctx, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('acceptScene')
export class AcceptScene {
  @SceneEnter()
  async onAcceptEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Вы записаны на SMAS-лифтинг. Одна линия в ср 19.08.2024 09-30',
      Markup.keyboard(['Да', 'Нет', 'Назад'], {
        columns: 2,
      }),
    );
  }

  @Hears('Да')
  async onYesAnswer(@Ctx() ctx: SceneContext) {
    await ctx.reply('Мы ждем вас!');
    await ctx.scene.enter('startScene');
  }

  @Hears('Нет')
  async onNoAnswer(@Ctx() ctx: SceneContext) {
    await ctx.reply('Давай те начнем с начало!');
    await ctx.scene.enter('startScene');
  }

  @Hears('Назад')
  async onBackAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('timeScene');
  }
}
