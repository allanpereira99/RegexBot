import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import Validador from './validador.js';
import Regex from './core.js';
dotenv.config()

const bot = new TelegramBot(process.env.BOT_TOKEN, {
	polling: true
});

bot.on("message", async(msg) => {
const reply = {reply_to_message_id: msg.message_id};
const chatId = msg.chat.id;
let text = await msg.text;

if(text == "/start") {
  bot.sendMessage(chatId, `Welcome ${msg.from.first_name}`, reply);
}
if(Validador(text)){
  try{
    let replyText = await msg.reply_to_message.text;
    Regex(text,replyText).then(result => result != replyText ? bot.sendMessage(chatId,result,reply) : console.log('failed'));
  }
  catch(e){}
}
});
