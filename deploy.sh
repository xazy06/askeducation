#!/usr/bin/env bash

sudo rm -R *

#npm install pm2 -g && pm2 update

git clone https://github.com/xazy06/askeducation.git && cd askeducation

git checkout staging && git pull && npm run build && pm2 start ecosystem.config.js --env production




# before it build clent
# pscp.exe -r ./dist root@80.78.240.22:/root/askeducation

# pm2 start ecosystem.config.js --env production

# chmod +x ./deploy.sh

#sudo rm -R .git
