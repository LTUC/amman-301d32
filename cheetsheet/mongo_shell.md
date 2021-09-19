# MongoDB shell commands

## Start mongodb server

`sudo service mongod start`

## Connect to mongo shell

`mongo`

## List databases

`show dbs`

## Connect to a database

`use <db_name>`

## Show collections

`show collections`

## Query data(list of documents)

`db.<collection_name>.find({})`

## Query single document

`db.<collection_name>.findOne({key:value})`
