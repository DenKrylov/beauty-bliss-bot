import { Scene, SceneEnter, Ctx, Action } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

const userSettings = {
  notice: 2,
  notificAtions: true,
};

const keyboard = [
  [
    { text: '1 час', callback_data: 'button1' },
    { text: '2 часа', callback_data: 'button2' },
    { text: '3 часа', callback_data: 'button3' },
  ],
  [
    { text: '4 часа', callback_data: 'button4' },
    { text: '5 часов', callback_data: 'button5' },
    { text: '6 часов', callback_data: 'button6' },
  ],
  [
    { text: '7 часов', callback_data: 'button7' },
    { text: '8 часов', callback_data: 'button8' },
    { text: '9 часов', callback_data: 'button9' },
  ],
];

@Scene('settingsScene')
export class SettingsScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply('Настройки:');
    await ctx.reply(`Уведомлять перед сеансом за: ${userSettings.notice}`, {
      reply_markup: {
        inline_keyboard: [[{ text: 'Настроить', callback_data: 'settingNotice' }]],
      },
    });
    await ctx.reply(`Уведомлять о персанальных скидках: ${userSettings.notificAtions}`, {
      reply_markup: {
        inline_keyboard: [[{ text: 'Настроить', callback_data: 'notificAtions' }]],
      },
    });
  }

  @Action('settingNotice')
  async onAnswer(@Ctx() ctx: SceneContext) {
    await ctx.reply(`Уведомлять за:`, {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  }

  @Action(['button1', 'button2', 'button3'])
  async onAnswerHours(@Ctx() ctx: SceneContext) {
    userSettings.notice = 1;
    await ctx.reply('Хорошо, теперь я буду уведомленять за 1 час');
  }

  @Action('notificAtions')
  async onAnswerSettingNotice(@Ctx() ctx: SceneContext) {
    await ctx.reply(`Мне присывалать личные акции для тебя:`, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Да', callback_data: 'settingNoticeYes' },
            { text: 'Нет', callback_data: 'settingNoticeNo' },
          ],
        ],
      },
    });
  }

  @Action(['settingNoticeYes', 'settingNoticeNo'])
  async onAnswerSettingNoticeYesNo(@Ctx() ctx: SceneContext) {
    userSettings.notificAtions = false;
    await ctx.reply('Хорошо, теперь я не буду уведомленять об акциях');
  }
}
