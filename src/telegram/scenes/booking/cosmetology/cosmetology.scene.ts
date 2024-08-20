import { Scene, SceneEnter, Ctx, Hears } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Scene('facialCosmetologyScene')
export class FacialCosmetologyScene {
  @SceneEnter()
  async onFacialCosmetologyEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Давай выберем услугу',
      Markup.keyboard(
        ['SMAS-лифтинг Альтера', 'RF-ЛИФТИНГ MORPHEUS 8', 'Ботулинотерапия', 'Контурная пластика', 'Назад'],
        {
          columns: 2,
        },
      ),
    );
  }

  @Hears('SMAS-лифтинг Альтера')
  async onBookingAnswer(@Ctx() ctx: SceneContext) {
    await ctx.reply(
      'Давай выберем услугу',
      Markup.keyboard(
        [
          'SMAS-лифтинг. Одна линия',
          'SMAS-лифтинг. Глаза (190 линий)',
          'SMAS-лифтинг. Лоб (90 линий)',
          'SMAS-лифтинг. Лицо (500 линий)',
          'Назад',
        ],
        {
          columns: 3,
        },
      ),
    );
  }

  @Hears('Назад')
  async onBackAnswer(@Ctx() ctx: SceneContext) {
    await ctx.scene.enter('bookingScene');
  }
}
