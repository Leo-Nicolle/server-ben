#!/bin/bash

IP="51.75.28.38"
path="ben/"

echo -e "Building..."
npm run build
echo -n User:
read username
fullpath="/home/$username/$path"
remotePath="$username@$IP:$fullpath"
echo -e "Sending to remote at $remotePath"
scp -r server/ $username@$IP:/home/$username/$path/
scp -r dist/ $username@$IP:/home/$username/$path/public/

echo -e "Restart pm2"
ssh "$username@$IP" "pm2 restart ben"
