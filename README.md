Steps for installation and running dpitc-portal

1. Fork the repository from https://github.com/rbaguila/dpitc-portal
2. git clone https://github.com/<github-username>/dpitc-portal.git
3. cd dpitc-portal
4. git fetch origin
5. git checkout develop (Always work, create other branches and push from develop branch)
6. Install mongodb if you currently don't have one. https://www.mongodb.com/download-center#community
7. Installation instructions for Linux users: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
8. Install nvm and install the current stable of release as of now (nvm install 6.9.4) 
9. Installation instruction for Linux users using script: https://github.com/creationix/nvm#install-script
10. Run mongodb from the terminal: sudo service mongod start
11. Create your own .env file containing Cloudinary url and mandrilll api key.
12. npm install
13. node keystone
14. The application must be running after the last command. If there is problems and errors try reading and consulting the keystone docs.
http://keystonejs.com/docs/ 


Basic parts of currrent keystone dpitc-portal boilerplate.
NOTE: We are using keystone version ^4.0.0-beta.4 updated from the stable release.

1. The boilerplate have the main page of the portal. It can be accessed at localhost:3000/
2. Keystone's architecture follows the Model-View-Controller design or MVC. 
3. All the database related files will be found at the 'models' directory
4. The controller section will be found at the 'routes' directory
5. The view section will be found inside the 'templates' directory
