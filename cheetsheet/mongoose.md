# Mongoose cheetsheat

## Install Mongoose

`npm install mongoose`

## Configure mongoose

`const mongoose=require("mongoose");`

`mongoose.connect(<MONGO_URL>,{useNewUrlParser: true, useUnifiedTopology: true})`

## creating a collection using mongoose

### create a schema

```create schema
let schema=new mongoose.schema({
    key:type,
    key:type,
    ...
})
```

### create model

``` create model
let model=mongoose.model("<collection_name>",schema)
```
