# Pasha

## Discord Utility Bot

Bespoke VOC Gaming discord bot

## Installation

1. Install [node.js](https://nodejs.org/en/download/)
2. Install [mongoDB](https://www.mongodb.com/)
3. Clone this repo

        $ git clone https://github.com/GeekyDeaks/discord-pasha.git

4. Download the required node modules from NPM

        $ cd discord-pasha
        $ npm install

5. Create the config.js

        $ cp config_template.js config.js

6. Add the app to your discord account [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)

7. Create a user for the app and copy the token to `config.discord.token`

8. Using the Client ID found in App Details, 
   create an invite link in the following format 
   
        https://discordapp.com/oauth2/authorize?scope=bot&client_id=CLIENT_ID

9. Start the bot

        node pasha.js

## PM2

This bot relies upon discord.js, which appears to throw uncaught exceptions from certain network
errors.  When this occurs, the bot will simply crash.  The cause of this is still under investigation,
but to workaround the problem in the interim, we recommend using something like pm2 to keep the bot alive

        sudo npm install pm2 -g
        pm2 start pasha.js

# modules

In `config_template.js` you will see section called `modules`.
Each module provides some element of functionality and can also
provide it's own commands.  You can disable a module by removing
it from the config, but at present removing some key modules
may cause the bot to behave unpredicatably.

## gamer

This module provides a database of gamers, with the following detail:

* PSN ID
* XBL Gamertag
* Timezone
* Current games of interest

Other modules can use this modules to map @discord ID's
to either PSN or XBL accounts.  It also allows lookup of
other players of a particular game.

e.g.

        players DY

will provide a list of all the players who have expressed
an interest in DY (destiny), showing details of their current 
local time

The current commands are:

        players <game>
        gamer <@discord>

Not very consistent naming - sorry!

At present the commands to edit these entries are still
under development.
