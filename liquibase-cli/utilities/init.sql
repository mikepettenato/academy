-- drop database 'test', if it exists
drop database if exists test;

-- drop user 'test', if exists
drop role if exists test;

-- create a user if it does not exist with password 'test'
create user test with password 'test';

-- create databas 'test' if id does not exist
create database test OWNER=test;

--
