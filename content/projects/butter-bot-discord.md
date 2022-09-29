---
title: Butter Bot - Discord
date: September 3 2022
slug: butter-bot-discord
description: I made a discord bot for a server which I moderate. It's a simple bot, but it does the job.
keywords: ["discord bot", "discord.js v13" ]
github: "https://github.com/AcidOP/ButterHostServer"
technologies: ["discord.js v13", "Node.js"]
---


##### What is Butter Bot?
* Butter is a discord bot for the [Butter Host Server](https://discord.gg/8R7bZ9QZyq) built with blood, sweat and tears using the [discord.js](https://discord.js.org/#/) library.

##### What does it do?
1. Has a based levelling system. 💹
* Based

2. Make anonymous confessions. 🤫
* /confess <message>

3. Make anonymous reports. 📝
* /report @user <reason>

4. Show your level and the most active member on the server. 📈
* /level @user and /leaderboard

5. Display information about the server and other members. 📊
* /whois @user and /details

6. Moderators can add and remove roles from members. 👮
* /addrole @user <role> and /removerole @user <role>

##### How do I use it?
1. Clone this repository: [Butter Bot](https://github.com/AcidOP/ButterHostServer)
```bash
git clone https://github.com/AcidOP/ButterHostServer.git
```

2. Install the dependencies

```bash
npm install
```

3. Create a MongoDB database for storing the XP and level data.

4. Create a **.env** file in the root directory and add the following:
```bash
TOKEN=<your discord bot token>
MONGO_URI=<your mongodb connection string>
```

5. Create a **config.json** file in the root directory and add the following:
```json
{
    "guildId": "ID_of_your_server",
    "clientId": "ID_of_your_bot_client",
    "ModeratorID": "ID_of_your_server_moderator_role",
    "ReportChannelID": "ID_of_your_report_channel",
    "ConfessionChannelID": "ID_of_your_confession_channel",
}
```

6. Deploy the commands to your server
```bash
node deploy-commands.js
```

7. Run the bot
```bash
node index.js
```

##### View this project on GitHub
* [Butter Bot](https://github.com/AcidOP/ButterHostServer)

### TODO
- Sleep
- Star this repo
- Contribute to this project

