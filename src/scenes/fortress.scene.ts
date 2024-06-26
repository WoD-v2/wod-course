import { Markup, Scenes } from "telegraf";
import { IBotContext } from "../context/context.interface";

export const fortressScene = new Scenes.BaseScene<IBotContext>("fortress");

fortressScene.enter(ctx => {

    console.log("inside fortress");

    ctx.replyWithPhoto("https://ibb.co/Npxz4QV", {
        caption: "🏰 Добро пожаловать в крепость!\n\nЗдесь вы можете взаимодействовать с другими игроками и заниматься фермерством",
        reply_markup: { inline_keyboard: [
            [Markup.button.callback("🌽 Сад", "garden")],
            [Markup.button.callback("🤴🏼 Кланы", "clans")],
            [Markup.button.callback("🏞🌳Прогулка", "walk")],
            [Markup.button.callback("Вернуться", "back_to_menu")]
        ] 
        }, parse_mode: "HTML"
    });

    fortressScene.action("garden", ctx => {
        ctx.editMessageReplyMarkup({ inline_keyboard: [] });
        ctx.scene.leave();
        ctx.scene.enter("garden");
    });

    fortressScene.action("clans", ctx => {
        ctx.editMessageReplyMarkup({ inline_keyboard: [] });
        ctx.scene.leave();
        ctx.scene.enter("clan");
    });

    fortressScene.action("walk", ctx => {
        ctx.editMessageReplyMarkup({ inline_keyboard: [] });
        ctx.scene.leave();
        ctx.scene.enter("walk");
    });

    fortressScene.action("back_to_menu", ctx => {
        ctx.editMessageReplyMarkup({ inline_keyboard: [] });
        ctx.scene.leave();
        ctx.scene.enter("menu");
    });
});