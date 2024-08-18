import { Scene, SceneEnter, Ctx, Action, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('startScene')
export class StartScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply('Вы вошли в сцену! Как вас зовут?');
  }

  @On('text')
  async on(@Ctx() ctx: Context) {
    await ctx.reply('afa');
  }

  @Action(/.*/)
  async onAnswer(@Ctx() ctx: SceneContext) {
    const name = ctx.callbackQuery.id;
    await ctx.reply(`Привет, ${name}!`);
    await ctx.scene.leave(); // Выход из сцены
  }
}
