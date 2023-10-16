/*CMD
  command: /config
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Temporarios

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Mudar para "/tempconfig"

var admin_id = AdminPanel.getFieldValue({
  panel_name: "AdminInfo", // panel name
  field_name: "ADMIN_ID" // field name
})

Bot.sendMessage(admin_id)
