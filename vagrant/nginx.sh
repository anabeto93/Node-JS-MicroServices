#!/usr/bin/env bash

if [ ! -e /var/www/project/nginxnginx ]
then

	echo ">>> setting up nginx"

	# install nginx
	apt-get install -y nginx

	# update the default vhost
	cat /var/www/project/vagrant/templates/default > /etc/nginx/sites-available/default

	# restart nginx so it can pick up the new configuration
	service nginx restart

	# only run once
	touch /var/www/project/nginxnginx

else

	echo ">>> nginx already setup..."

fi