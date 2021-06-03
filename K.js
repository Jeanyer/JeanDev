
const mySecret = process.env['TOKEN']
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------------------- SISTEMA 24/7 -----------------------------//

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`INICIADO COMO BOT: ${client.user.tag}`);
});

//---------------------------- CODIGO DEL BOT ----------------------------//

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	client.user.setPresence({
		status: 'idle',
		activity: {
			name: 'HectiTV',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/hectitv'
		}
	});
});

const prefix = 'H/';

client.on('message', function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! Este mensaje tuvo una latencia de  ${timeTaken}ms.`);
	} else if (command === '') {
		const numArgs = args.map(x => parseFloat(x));
		const sum = numArgs.reduce((counter, x) => (counter += x));
		message.reply(`The sum of all the arguments you provided is ${sum}!`);
	}

	if (command === 'rules') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Reglas 📖')
			.setColor(0x22252)
			.setThumbnail(
				'https://cdn.discordapp.com/attachments/803842156556714014/849805255683342406/LOGO.png'
			)
			.addField(
				'☑ | No hagas ningun tipo de Spam.',
				'Tampoco abuses de las mayusculas, emojis, simbolos, Etc.'
			)
			.addField(
				'☑ | No toques temas relacionados de la sexualidad.',
				'Tampoco del racismo, politica, Etc.'
			)
			.addField(
				'☑ | No pidas Rangos superiores a ti.',
				'Se te daran al paso del tiempo.'
			)
			.addField(
				'☑ | Usa cada canal de manera correspondiente.',
				'Debes respetar el uso de los canales.'
			)
			.addField(
				'☑ | Evita hacer ruidos molestos en canal de voz',
				'Puede afectar la experiencia de los usuarios presentes.'
			)
			.addField(
				'☑ | Sigue correctamente las ordenes del Staff.',
				'Son los encargados de mantener el orden, asi que debes respetarlos.'
			)
			.setFooter('HectiTv');

		message.channel.send(embed);
	}

	if (command === 'sub') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Suscribete para obtener recompensas 💎')
			.setColor(0x222525)
			.setThumbnail(
				'https://cdn.discordapp.com/attachments/803842156556714014/849805255683342406/LOGO.png'
			)
			.addField(
				'💎 | Emotes del canal',
				'Podras usar los emotes del canal en cualquier lugar.'
			)
			.addField(
				'💎 | Rango especial',
				'Obtendras el rango <@&847123967700893696> el cual te hará destacar del resto.'
			)
			.addField(
				'💎 | Chat exclusivo',
				'Podras acceder al canal <#849790452358185020>.'
			)
			.addField(
				'💎 | Sorteo mensual',
				'Podrás participar en Sorteos exclusivos.'
			)
			.addField(
				'💎 | Eleccion de un juego mensual',
				'Entre todos podrán elegir un juego mensual.'
			)
			.setImage(
				'https://cdn.discordapp.com/attachments/803842156556714014/849805278207279166/SUSCRIBETE.png'
			)
			.setFooter('HectiTv');

		message.channel.send(embed);
	}

	if (command === 'server') {
		const embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Server Info')
			.setImage(message.guild.iconURL)
			.setDescription(`Informacion de ${message.guild}`)
			.addField('Owner', `El Owner de este server es ${message.guild.owner}`)
			.addField(
				'Miembros',
				`Este server tiene ${message.guild.memberCount} miembros`
			)
			.addField(
				'Emojis',
				`Este server tiene ${message.guild.emojis.cache.size} emojis`
			)
			.addField(
				'Roles',
				`Este server tiene ${message.guild.roles.cache.size} roles`
			);

		message.channel.send(embed);
	}

	if (command === 'saludo') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Saludos a lincoln Perro')
			.setColor(0xff0000);

		message.channel.send(embed);
	}

	if (command === 'help') {
		const embed = new Discord.MessageEmbed()
			.setColor(0xff0000)
			.setDescription('Hola Usuari@, Soy JeanDev')
			.addField('J/ping', 'La latencia del bot.')
			.addField('J/server', 'Informacion del servidor..');
		message.channel.send(embed);
	}

	if (command === 'say') {
		let text = args.join(' ');
		message.delete();
		message.channel.send(text);
	}

	if (command === 'say @everyone') {
		const embed = new Discord.MessageEmbed().setTitle('No').setColor(0xff0000);

		message.channel.send(embed);
	}

	if (command === 'verify') {
		const embed = new Discord.MessageEmbed()
			.setColor(0xf8f8f9)
			.setThumbnail(
				'https://media.discordapp.net/attachments/832678451508019241/834851053954138172/20210422_123843.jpg'
			)
			.addField(
				'Si quieres tener acceso al server, reacciona al emoji del mensaje.',
				'Recuerda leer las <#832665101789823007>.'
			)
			.setFooter('Jeanyer Community');

		message.channel.send(embed);
	}

	if (command === 'embedr') {
		const embed = new Discord.MessageEmbed()
			.setTitle('Roles Unicos')
			.setColor(0xf8f8f9)
			.setThumbnail(
				'https://cdn.discordapp.com/attachments/638413072188571659/844967297403584562/g100d7.png'
			)
			.setDescription(
				'Puedes conseguir roles extras solo cumpliendo los siguientes requisitos:'
			)
			.addField(
				'Administracion',
				'<@&688913732016930897> Son las personas encargadas de que el Reino funcione correctamente **(PUESTOS LLENOS)**'
			)
			.addField(
				'Moderacion',
				'<@&844594872098750494> Son las personas que mantienen el orden por aqui **(PUESTOS LLENOS)**'
			)
			.addField(
				'NITRO BOOSTER',
				'<@&681327762673631243> Es exclusivo para los que boostearon el Reino con **Discord Nitro**'
			)
			.addField(
				'Equipo',
				'<@&682295726973386766> Rol unico para el equipo de **Uber Studios**'
			)
			.addField(
				'Sobreviviente',
				'<@&634418596931436564> Exclusivo para los miembros del primer server de Uber **(Imposible de conseguir)**.'
			)
			.addField(
				'Equipo',
				'<@&682295726973386766> Rol unico para el equipo de **Uber Studios**'
			)
			.setImage(
				'https://cdn.discordapp.com/attachments/638413072188571659/844970156915687539/IMG_20210520_110933.jpg'
			)
			.setFooter('Reino Uberiano');

		message.channel.send(embed);
	}
});


client.login(process.env.TOKEN);
