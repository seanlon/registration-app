
#---- OVERVIEW ----
This Self-Registration app is meant to be a kiosk-like web for VISITOR to self register when entering a building office. MANAGER will have an access to dashboard and visitor log.


##---- SETUP INSTRUCTION ----
#installation 
npm install
npm run setup  

#development build
npm start
 

#performance test
npm run start:production
npm run pagespeed


#deployment build
npm run build
-upload the build folder to server


#Browser testing 
npm run start:tunnel
- test your locally-running app globally available on the web via a temporary URL: great for testing on different devices, client demos, etc!