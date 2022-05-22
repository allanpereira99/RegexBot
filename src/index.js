const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const validator = require("./util/validator");
const sed = require("./lib/core");
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});
bot.onText(/s\//, (msg) => {
  try {
    let opt = {
      chatId: msg.chat.id,
      text: msg.text,
      replyText: msg.reply_to_message.text,
      reply: { reply_to_message_id: msg.message_id },
      msgId: msg.from.id,
    };

    let ctx = opt.text.replace("s/", "");
    if (validator(opt.text)) {
      if (ctx.includes("/g")) {
        sed
          .replaceAll(ctx, opt.replyText)
          .then((response) => bot.sendMessage(opt.chatId, response, opt.reply));
      } else {
        sed
          .replace(ctx, opt.replyText)
          .then((response) => bot.sendMessage(opt.chatId, response, opt.reply));
      }
    }
  } catch (e) {}
});
bot.on("polling_error", console.log);
