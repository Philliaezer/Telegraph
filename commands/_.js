/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Mensagem enviada: "+message);

function inGraph(method, atr, path){
  let ph = "https://api.telegra.ph/";
  return ph+method+"?"+atr+"/"+path
}

// o certo é usar as properties para armazenar dados, e deixar o admin panel para questões do lado do admin do bot mesmo


var panel = {
  // Panel title
  title: "Admin Information",
  description: "Please fill here your admin id",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "SAVE",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */
  
  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description: "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "string",
      placeholder: "your admin id",
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    }
    // another fields here
    // if needed
    // ...
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
}); 





var phPanel = {
  // Panel title
  title: "Usuários Cadastrados",
  description: "Preencha os campos para criar um novo usuário, e digite /create para cria-lo efetivamente",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "SALVAR",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */
  
  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "PH_NAME",
      title: "Telegraph Username",
      type: "string",
      placeholder: "Digite seu nome...",
      // value: 100,   // default value
      // hidden: true  // if you need hidden field. By default - false
    },
    
    {
      name: "PH_PASS",
      title: "Telegraph Password",
      description: "",
      type: "password",
      placeholder: "Digite sua senha..."
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
}); 

AdminPanel.setPanel({
  panel_name: "PhConfig",
  data: phPanel
});
