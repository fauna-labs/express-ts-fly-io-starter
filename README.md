This repository contains unofficial patterns, sample code, or tools to help developers build more effectively with [Fauna][fauna]. All [Fauna Labs][fauna-labs] repositories are provided “as-is” and without support. By using this repository or its contents, you agree that this repository may never be officially supported and moved to the [Fauna organization][fauna-organization].

---

# Node express + typescript fly.io starter for Fauna

A starter kit for Express with Typescript, packaged to run on Fly, and using Fauna as the database. 

> Note: Typescript is not a requirement for running Fauna.
---

## Prerequisites
* Node 16 or greater
* [flyctl](https://fly.io/docs/hands-on/install-flyctl/)

## Create a Fauna database and generate an access key

* [Signup](https://dashboard.fauna.com/accounts/register) for a Fauna account if you don't have one already.
* Create a database and access key according to [these instructions](https://docs.fauna.com/fauna/current/learn/quick_start/client_quick_start?lang=javascript).
* Copy the `.env.example` file (in the root of this project) into a new file named `.env` and populate the variable FAUNA_SECRET_KEY with the access key from above:
  ```
  FAUNA_SECRET_KEY="xxxxxxxx-xxxxxxxxx"
  ```

## Test locally

First, build the project:
```
npm install && npm run build
```

__Now, load some sample data (**Note**: This will be using the Fauna key from above, which should now be set in the `.env` file)__:
```
node scripts/run.mjs
```

Then start express:
```
npm start
```

Navigate to `http://localhost:3000/read`

This should perform a read from the Fauna database you created and populated with sample data, per the setup steps above.

### Testing the Docker image

A `Dockerfile` is part of this project, (along with the `fly.toml` file) making the app ready to run on Fly. To test the Docker build, run

```
docker build -t express-ts-fly-io-starter:dev --no-cache .
```

Then 
```
docker run -p 3000:3000 --env FAUNA_SECRET_KEY="<the-fauna-access-key>" express-ts-fly-io-starter:dev
```


## Deploy to Fly

To launch the app on fly, run `flyctl launch` in the root directory of this project.
You will be prompted for a few things:

* `? Would you like to copy its configuration to the new app? (y/N)` **Choose y (Yes)**
* `? Choose an app name (leaving blank will default to 'express-ts-fauna-starter')` **⚠️ Give it a new app name**
* Choose an organization
  (You would be defaulted to the "personal" organization if it is the only option)

```bash
% flyctl launch
...
An existing fly.toml file was found for app express-ts-fauna-starter
? Would you like to copy its configuration to the new app? Yes
Scanning source code
Detected a NodeJS app
? Choose an app name (leaving blank will default to 'express-ts-fauna-starter') <a-new-app-name>
automatically selected personal organization: 'your-personal-organization'
App will use 'sjc' region as primary

Created app '<a-new-app-name>' in organization 'personal'
Admin URL: https://fly.io/apps/<a-new-app-name>
Hostname: <a-new-app-name>.fly.dev
Wrote config file fly.toml
...
```

Environment variables are not uploaded. Before deploying, you should set the Secrets value for FAUNA_SECRET_KEY: 
```
fly secrets set FAUNA_SECRET_KEY="<fauna secret key>"
```

Now you can deploy:
```
fly deploy
```

Once the application has been deployed, you can find out more about its deployment. 
```
fly status
```

Browse to your newly deployed application with the `fly open` command.
```
% flyctl open

Opening https://<a-new-app-name>.fly.dev
```


[fauna]: https://www.fauna.com/
[fauna-labs]: https://github.com/fauna-labs
[fauna-organization]: https://github.com/fauna
