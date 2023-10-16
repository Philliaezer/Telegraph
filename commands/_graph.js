/*CMD
  command: /graph
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

function graphRequest(metodo="", atributos, caminho = "") {
  // Construa a URL da API
  let apiUrl = `https://api.telegra.ph/${metodo}`;

  // Verifique se há atributos e construa a string de consulta
  if (atributos) {
    let queryString = Object.entries(atributos)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    apiUrl += `?${queryString}`;
  }

  // Adicione o caminho, se fornecido
  apiUrl += caminho;
  
  HTTP.get( {
      url: apiUrl,
      success: '/onLoading',
      error: '/onError',
      headers: { "content-type": null }
  } )
}

graphRequest("createAccount", {
    short_name: "ASDA Teste Uno",
    author_name: "Anderson",
    author_url: "https://t.me/MariaD_Silva"
});
