/*CMD
  command: /onError
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

Bot.sendMessage("Error on downloading");

Bot.inspect(http_status);
Bot.inspect(http_headers);  // headers from response
Bot.inspect(cookies);
