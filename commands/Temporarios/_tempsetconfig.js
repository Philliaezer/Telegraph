/*CMD
  command: /tempsetconfig
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Temporarios
  answer: Insira um valor

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = AdminPanel.setFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID", // field name
  value: message
});

if (result){
  Bot.sendMessage( "Painel foi completado com: " + message );
} else{
  Bot.sendMessage('Houve algum erro');
}
