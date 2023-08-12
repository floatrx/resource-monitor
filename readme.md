_in progress..._
# 🚨 Resource monitor 

This app allows you monitor your web resources (websites or services).
This app will allow you to track your web resources (websites or services). 

## Configuration 
- Configure monitors (resources for checking) 
- Set up a bot (by adding a token and chatId) 
- Setup cron "check frequency" 

This app should be deployed on Google Cloud. 
All errors caught by this app will be sent to your telegram chat and also 
duplicated into the Google Datastore database.

## TODO (steps): 
1. Setup base server (express). Add / route. Add ejs
2. Configure telegram bot
3. Add Bot controller (actions)
4. Add Monitor controller (actions)
5. Add logging to @google-cloud/datastore
