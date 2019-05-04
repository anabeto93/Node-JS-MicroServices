# MicroServices using Node JS

## Description
A simple book review and store application using Microservices that comes with with __Customers__, __Orders__ and __Books__.

## Installation
Make sure you have vagrant setup on your machine if you intend to use the same setup as mine to run this.

Simply run the below command to setup your dev environment which will install Redis and MongoDB, two required services
```
vagrant up
```

You need stable internet service and patience to get this up and running.

If you are impatient however, you can go to each individual directory and run
`node file_name.js` where `file_name` can be `books.js` or `orders.js`, etc

## setup
Go into each directory or microservice and run `yarn` or `npm install`.

For those using Windows or WSL, it is preferrable you run your npm install outside for the VM in case you choose to go with Vagrant VM.

Edit your `/etc/hosts` file, or for those on windows, this is found at `c:\windows\System32\drivers\etc\hosts` which you require administrator access to be able to edit. Include the line below
```
192.168.66.10 node.app
```
You can include the below lines too if you want to access the individual microservices
```
192.168.66.10 node.app
192.168.66.10 customers.node.app
192.168.66.10 orders.node.app
192.168.66.10 books.node.app
```
You can access the various services simply by visiting the links in your browser, such as
```
https://node.app
https://customers.node.app
https://books.node.app
https://orders.node.app
```
