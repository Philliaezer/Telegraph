/*CMD
  command: /onLoading
  help: 
  need_reply: false
  auto_retry_time: 
  folder: onActions

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// downloaded page stored on content field
var cont = JSON.parse(content);
Bot.inspect(cont);

if (http_status !== "200"){
    Bot.sendMessage("Erro "+http_status);
} 
