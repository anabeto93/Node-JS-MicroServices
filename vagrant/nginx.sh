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
	
	sudo cp /var/www/project/vagrant/certs/books.node.app.crt /etc/nginx/certs/books.node.app.crt
	sudo cp /var/www/project/vagrant/certs/books.node.app.key /etc/nginx/certs/books.node.app.key

	sudo cp /var/www/project/vagrant/certs/customers.node.app.crt /etc/nginx/certs/customers.node.app.crt
	sudo cp /var/www/project/vagrant/certs/customers.node.app.key /etc/nginx/certs/customers.node.app.key

	sudo cp /var/www/project/vagrant/certs/orders.node.app.crt /etc/nginx/certs/orders.node.app.crt
	sudo cp /var/www/project/vagrant/certs/orders.node.app.key /etc/nginx/certs/orders.node.app.key

else

	echo ">>> nginx already setup..."
	sudo cp /var/www/project/vagrant/certs/books.node.app.crt /etc/nginx/certs/books.node.app.crt
	sudo cp /var/www/project/vagrant/certs/books.node.app.key /etc/nginx/certs/books.node.app.key

	sudo cp /var/www/project/vagrant/certs/customers.node.app.crt /etc/nginx/certs/customers.node.app.crt
	sudo cp /var/www/project/vagrant/certs/customers.node.app.key /etc/nginx/certs/customers.node.app.key

	sudo cp /var/www/project/vagrant/certs/orders.node.app.crt /etc/nginx/certs/orders.node.app.crt
	sudo cp /var/www/project/vagrant/certs/orders.node.app.key /etc/nginx/certs/orders.node.app.key

fi