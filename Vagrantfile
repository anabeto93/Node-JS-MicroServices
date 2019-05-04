# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|
  

  config.vm.define "node_micro_services" do |node_micro_services|
    node_micro_services.vm.box = "ubuntu/xenial64"
    node_micro_services.vm.network "private_network", ip: "192.168.66.10"
    node_micro_services.vm.network :forwarded_port, guest: 22, host: 2222, id: "ssh", disabled: true
    node_micro_services.vm.network :forwarded_port, guest: 22, host: 2300, auto_correct: true
    node_micro_services.vm.network :forwarded_port, guest: 8000, host: 80, auto_correct: true
    node_micro_services.vm.network :forwarded_port, guest: 6000, host: 6000, auto_correct: true
    node_micro_services.vm.hostname = "nodejs"
    #node_micro_services.vm.synced_folder ".", "/vagrant", owner: "vagrant", group: "vagrant", mount_options:["dmode=775,fmode=775"]
    node_micro_services.vm.synced_folder ".", "/home/vagrant/Codes", owner: "vagrant", group: "vagrant", mount_options:["dmode=775,fmode=777"]
    node_micro_services.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--name", "node_micro_services"]
      vb.memory = "1024"
      vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]
    end

    node_micro_services.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update -y
      sudo apt-get install software-properties-common -y
      sudo apt upgrade -y
      sudo apt install mongodb -y
      sudo add-apt-repository ppa:chris-lea/redis-server -y
      sudo apt update 
      sudo apt install redis-server -y
    SHELL

    node_micro_services.vm.provision :shell, privileged: false do |s|
      ssh_pub_key = File.readlines("#{Dir.home}/.ssh/id_rsa.pub").first.strip
      s.inline = <<-SHELL
        echo #{ssh_pub_key} >> /home/$USER/.ssh/authorized_keys
        sudo bash -c "echo #{ssh_pub_key} >> /root/.ssh/authorized_keys"
      SHELL
    end
  end
end