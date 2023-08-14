_in progress..._
# 🚨 Resource monitor 

This app allows you monitor your web resources (websites or services).
This app will allow you to track your web resources (websites or services).

# Scripts
- `$ yarn dev`
- `$ yarn start`
- `$ yarn deploy`

## .env 
- Set up a bot (by adding a token and chatId) 
- Setup cron "check frequency" 
```shell
APP_PORT=3000
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NODE_ENV=development
CRON_INTERVAL_MINUTES=5
```
## Monitors
- Configure monitors (resources for checking) 


# Deployment to Google Cloud
This app should be deployed on Google Cloud. 
All errors caught by this app will be sent to your telegram chat and also 
duplicated into the Google Datastore database.

## Steps
1. Visit https://console.cloud.google.com/
2. Create new project https://console.cloud.google.com/projectcreate
3. Go to App Engine & Create an App https://console.cloud.google.com/appengine/start
4. Go to App Engine dashboard & choose Language (nodejs) & Environment 
5. Download Google Cloud SDK https://cloud.google.com/sdk
6. Init project with `$ gcloud init`
7. Deploy `$ gcloud deploy`
8. Browse app `$ gcloud app browse`

### Google Cloud cheatsheet:
- Check logs `$ gcloud app logs tail -s default`
- More commands: `$ gcloud cheat-sheet`

## TODO (steps):
1. Setup base server (express). Add / route. Add ejs [done]
2. Configure telegram bot [done]
3. Add Bot (actions) [done]
4. Add Monitor (service)
5. Add logging to @google-cloud/datastore
6. Add pre-commit hook & deploy app
7. Add eslint
