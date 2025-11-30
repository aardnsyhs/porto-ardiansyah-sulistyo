#!/bin/bash
set -e
APP_DIR="/var/www/porto/porto-ardiansyah-sulistyo"
cd "$APP_DIR"
git pull origin main
/usr/bin/npm install
/usr/bin/npm run build
echo "Deploy done at $(date)"
