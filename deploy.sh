#!/bin/bash
set -e
APP_DIR="/var/www/porto/porto-ardiansyah-sulistyo"
cd "$APP_DIR"
git pull origin main
/home/iyan/.nvm/versions/node/v24.11.1/bin/npm install
/home/iyan/.nvm/versions/node/v24.11.1/bin/npm run build
echo "Deploy done at $(date)"
