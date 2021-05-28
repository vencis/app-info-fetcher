*  ==== HOWTO INSTALL ====  
> clone repository: `git clone https://gitlab.internet-portal.cz/devs/app-info.git`  
> change folder `cd app-info`  
> install dependencies `npm install`  

* ==== HOWTO RUN ====  
> run `node /path-to/app-info/app-info.js`  

* ==== HOWTO START USING FOREVER ====  
> install forever service globally  `sudo npm install forever -g && sudo npm install forever-service -g`  
> install and enable service `sudo forever-service install`  
> start service `sudo service app-info start`   