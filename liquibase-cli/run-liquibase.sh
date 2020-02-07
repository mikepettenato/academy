#!/bin/bash

# this is the default sql administration
# if this has changed on your server
# then you will need to modify the defaults defined
# below
sudo -u postgres psql postgres -f utilities/init.sql

# run liquibase cli
liquibase update

