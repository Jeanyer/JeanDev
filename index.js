const Discord = require("discord.js");

const client = new Discord.Client();

require('dotenv').config();

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://Cappy-bot.jeanyer.repl.co',
    title: 'Secundario',
    interval: 15 // minutes
});


client.on("ready", () => {
   console.log("ESTE BOT FUNCIONA"); 
});

//////////////////////////MONITOR///////////////////////////

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));


//////////////////////////BOT REAL//////////////////////


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: 'idle',
        activity: {
            name: "J/Help | discord.gg/RVxExjmYg2",
            type: "WATCHING"
        }
    });
});



const prefix = "J/";

client.on("message", function(message) {
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Este mensaje tuvo una latencia de  ${timeTaken}ms.`);
  }

  else if (command === "") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  
   

  
  if(command === "rules"){
    const embed = new Discord.MessageEmbed()
      .setTitle("Rules 📒")
      .setColor(0xf8f8f9)
      .setThumbnail()
      .setDescription("Estas son las normas que deberas seguir:")
      .addField("☑ | Respetar a todos los usuarios.", "Debes respetar a los demas si quieres ser respetado.")
      .addField("☑ | Manten un ambiente tranquilo en el servidor", "No se permiten temas polémicos que causen una discusión.")
      .addField("☑ | Prohibido los memes en chat general.", " Para eso esta <#832672024031133756>. Si mandas alguno que otro no pasa nada pero no debes de mandar más de la cuenta.")
      .addField("☑ | Usar cada canal para su respectivo uso.", "Debes respetar el uso de los canales.")
      .addField("☑ | Las menciones innecesarias quedan prohibidas", "Esa persona puede estar ocupada, solo mencionala si necesitas algo de esta.")
      .addField("☑ | No NSFW", "Queda estrictamente prohibido publicar contenido NSFW o Gore.")
      .addField("☑ | No hacer Flood", "Manda mensajes con moderación.")
      .addField("☑ | No hacerse pasar por ningún usuario/compañía famosa.", "Esto queda Prohibido para evitar problemas.")
      .addField("☑ | No mandes información falsa, si no tienes seguro de que esta sea verdad investiga de que lo sea.", "La información falsa puede confundir a usuarios.")
      .addField("El incumplimiento de las reglas puede llegar a ser sancionado, puedes ganar Warn, Mute o Ban", "El tiempo de muted/ban dependeria de la cantidad de strikes que tengas.")
      .setFooter("Jeanyer Community / Actualizado 18/04/2021")

    

    message.channel.send(embed);
  }
  
  if(command === "info"){
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion 📖")
      .setColor(0xf8f8f9)
      .setDescription("Muy buenas nintendero, gracias por unirte a nuestro Nuevo server de la comunidad de nintenderos android aca una guía de lo que puedes hacer y los beneficios que puedes obtener, el server ahora tiene totalmente la temática de consolas y juegos de Nintendo, asi que te recomiendo que leas todo para que sirvre cada uno.")
      .addField("📖 | Tutorial del server.", "Esta sección es la parte donde <@&824844842696835113> te explica el uso adecuado del server por si en algún momento llegas a tener dudas, te recomendamos ver esa sección de videos para que sepas la función general del servidor, bots, canales y roles ocultos")
      .addField("🏷️ | Roles.", "En el server encontraras variedad de roles que te pueden hacer personalizar tu experiencia, en esta parte podras elegir el país de tu procedencia, tu genero, y también roles de videojuegos que te muestran canales ocultos del server")
      .addField("──『Especiales』──", "Los roles especiales son:")
      .addField("▶️ • Creador de Contenido", "<@&825154841735200778> Este rol se te dara mención como youtuber y podras compartir tus videos en la sección vip del server <#825582800777379851>. Para poder reclamar este rol debras contar con la cantidad de 1,000 suscriptores en tu canal de youtube.")
      .addField("🔰 • Creador de Videojuegos", "<@&825156421372608552> Se otorgara el rol a las personas que estén desarrollando fangames y deseen aportarlos con <@&824844842696835113>, al recibir este rol te comprometeras a dar exclusividad al server con tu juego, minimo para obtener el rol debe tener una versión jugable del juego.")
      .addField("🎨 • Mario Paint", "<@&825152085410316340> Se te otorgara el rol cuando hagas 10 post de pixelart, dibujo relacionado con <@&824844842696835113> o el staff del server, al obtener el rol entraras a eventos de arte que solamente tendrán acceso las personas con este rol.")
      .addField("──『Niveles』──", "Estos roles los podras conseguir conforme subas de nivel de XP, para conseguir XP deberas de ser activo y hablar mucho. Aqui te explico cada uno de esos roles y sus beneficios:")
      .addField("Level 10", "<@&825208047059599360> Con este rol te otorga el acceso a poder enviar imágenes en <#825039055515418665>")
      .addField("Level 20", "<@&825209762269626371> Con este rol te otorga el permiso de poder cambiarte el apodo.")
      .addField("Level 30", "<@&825210294280126504> Este rol te otorga el poder de mandar imagenes en <#824867020158926919>, pero cuidado con lo que envies.")
      .addField("Level 40", "<@&825211096477859851> Con este rol te otorga el beneficio de organizar peliculas.")
      .addField("Level 50", "<@&825211700335607828> Con este rol seras candidato a formar parte del STAFF.")
      .addField("──『Tienda』──", "El servidor cuenta con sistema de economía para que puedas adquirir recursos y sobresalir de los demás miembros, que son:")
      .addField("⚱ • Donkey Kong Barrel", "<@&825231647460032562> Este rol te permitirá poder cambiarte el nombre. Precio 1,000 Monedas.")
      .addField("🥚 • Yoshi Egg", "<@&825232746657611816> Este rol te permitirá enviar imágenes y adjuntar achivos en absolutamente todo el server, haciendo así que no solo debas utilizar galería para poder enviar imágenes. Precio 2,500 Monedas.")
      .addField("🔫 • Inkling Splatter", "<@&825232459033346069> Este rol es uno de los mas costosos, te permitirá realizar las dos acciones anteriores. Precio 5,000 Monedas.")
      .addField("💎 • Chaos Emerald", "<@&825233560935464991> Este rol es el más premium que encontrarás en la tienda, este rol te dará todos los beneficios anteriores, además de poder acceder al canal <#825582800777379851> y poder realizar tu post sin requerir nivel 50 en el servidor. Precio 10,000 Monedas.")
      .addField("──『Videojuegos』──", "En el server contamos con canales ocultas, canal para smmwe, sm4j, mario kart tour, entre otros. Para poder activar estos canales redirígete a <#824870023281246208> y reclama tu rol del canal del videojuego que desas acceder, actualmente contamos con 4 canales de juegos para que puedas acceder en el servidor:<@&825091690070802462>, <@&825090288157589574>, <@&825091507089440788>, <@&825092183862018106> ")
      .setImage("https://media.discordapp.net/attachments/777257802606575656/820766985558163476/IMG_20210314_151434.png?width=960&height=309")
      .setFooter("New Nintenderos Android Community")


      message.channel.send(embed);
  }

  

    if(command === "server"){
    const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setImage(message.guild.iconURL)
            .setDescription(`Informacion de ${message.guild}`)
            .addField("Owner", `El Owner de este server es ${message.guild.owner}`)
            .addField("Miembros", `Este server tiene ${message.guild.memberCount} miembros`)
            .addField("Emojis", `Este server tiene ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles", `Este server tiene ${message.guild.roles.cache.size} roles`)
            

        message.channel.send(embed)

    }
    
    
  if(command === "saludo"){
    const embed = new Discord.MessageEmbed()
      .setTitle("Saludos a lincoln Perro")
      .setColor(0xff0000)
      
            message.channel.send(embed)

    }
    
      if(command === "help"){
    const embed = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setDescription("Hola Usuari@, Soy JeanDev")
      .addField("J/ping", "La latencia del bot.")
      .addField("J/server", "Informacion del servidor..")
            message.channel.send(embed)

    }
    
     if(command === "say"){
  let text = args.join(" ");
  message.delete();
  message.channel.send(text);
    }
    
    if(command === "say @everyone"){
    const embed = new Discord.MessageEmbed()
      .setTitle("No")
      .setColor(0xff0000)
      
            message.channel.send(embed)

    }

    if(command === "verify"){
    const embed = new Discord.MessageEmbed()
      .setColor(0xf8f8f9)
      .setThumbnail("https://media.discordapp.net/attachments/832678451508019241/834851053954138172/20210422_123843.jpg")
      .addField("Si quieres tener acceso al server, reacciona al emoji del mensaje.", "Recuerda leer las <#832665101789823007>.")
      .setFooter("Jeanyer Community")

    

    message.channel.send(embed);
  }
  
    
    
  (command === "rules"){

    const embed = new Discord.MessageEmbed()

      .setTitle("Normas 📜")

      .setColor(0xff0000)

      .setThumbnail()

      .setDescription("Estas son las normas que deberas seguir:")

      .addField("☑ | Respetar a todos los usuarios.", "Debes respetar a los demas si quieres ser respetado.")

      .addField("☑ | Manten un ambiente tranquilo en el servidor", "No se permiten temas polémicos que causen una discusión.")

      .addField("☑ | Cero tolerancia al shitpost.", " No esta permitido el shitpost, si llegas a publicarlo, seras sancionado.")

      .addField("☑ | Usar cada canal para su respectivo uso.", "Debes respetar el uso de los canales.")

      .addField("☑ | Las menciones innecesarias quedan prohibidas", "Esa persona puede estar ocupada, solo mencionala si necesitas algo de esta.")

      .addField("☑ | No NSFW", "Queda estrictamente prohibido publicar contenido NSFW o Gore.")

      .addField("☑ | No hacer Flood", "El Flood es un conjunto de mensajes o caracteres repetidos. Debes evitar hacer eso.")

      .addField("☑ | No hacerse pasar por ningún usuario/compañía famosa.", "Esto queda Prohibido para evitar problemas.")

      .addField("☑ | No mandes información falsa, si no tienes seguro de que esta sea verdad investiga de que lo sea.", "La información falsa puede confundir a usuarios.")

      .addField("☑ | Nada de burlas o insultos a alguna persona importante de la comunidad.", "Queda TOTALMENTE prohibido cualquier tipo de burla hacia alguna persona importante de la comunidad (la sancion dependera de que tan grave).")

      .addField("El incumplimiento de las reglas puede llegar a ser sancionado, puedes ganar Warn, Mute o Ban", "El tiempo de muted/ban dependeria de la cantidad de strikes que tengas.")

      .setFooter("Nintenderos Android Community")

      .setImage("https://media.discordapp.net/attachments/841165838786101309/841463926423814154/Reglas_-_Nac.png?width=1080&height=484")

    

    message.channel.send(embed);

  }  
  
});
  


client.login(process.env.TOKEN);
