# mynuxt

This is a small project which I wrote to test with `pm2`.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production
$ npm build

# launch server
$ npm start
```

## Start PM2


``` bash
$ pm2 start npm --name "project-name" -- start
$ npm run build
$ pm2 restart 0 // project id|name|all...
```

## Linter

To disable linter put at the start of script `/*eslint-disable*/`.