# Test

This is repo contain a simple API on [Restocat](https://github.com/restocat/restocat) and a frontend on React

## API

RESTful API contain 2 collections:
    - departments (CRUD)
    - employee (CRUD)

All data store in MySQL (Use driver [sequelizejs](http://docs.sequelizejs.com/en/v3/))

### Start in dev mode

    npm run debug

In dev mode Restocat watch the collection and reconnect them on change of code.

### Release start

    npm start

## Frontend

Dashboard wrote with React and Bootstrap

### Start

    npm start