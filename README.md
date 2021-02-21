Own fork of magic mirror, that creates a magic mirror.
Also acts as a backup of config

Getting started:

installations:
sudo apt update
sudo apt install git

install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

install node version:
nvm install 14.15.5

pull this repo and run npm install

other deps needed:
sudo apt install chromium-browser -y
sudo apt install unclutter

#nice to have
sudo apt install vim

Edit autostart:
mkdir /home/pi/.config/lxsession
mkdir /home/pi/.config/lxsession/LXDE-pi
cp /etc/xdg/lxsession/LXDE-pi/autostart /home/pi/.config/lxsession/LXDE-pi/

add:
@unclutter -idle 0.1

to remove cursor

Edit:
sudo vim /boot/config.txt

add:
display_rotate=1

to vertically align
