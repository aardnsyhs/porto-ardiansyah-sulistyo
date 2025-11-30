#!/bin/bash
source ~/.profile 2>/dev/null || true
source ~/.bashrc 2>/dev/null || true
set -e
APP_DIR="/var/www/porto/porto-ardiansyah-sulistyo"
cd "$APP_DIR"
git pull origin main
npm install
npm run build
echo "Deploy done at $(date)"
