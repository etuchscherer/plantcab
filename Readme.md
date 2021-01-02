# Plantcab

Software for running my plant cabinet. Consists of a server that interacts with the raspberry pi gpio, and a front end utility, called useless-bay, and various other tools to help support these applications. 

## System services

### API

To start:
`sudo systemctl start api`

To stop:
`sudo systemctl stop api`

To restart:
`sudo systemctl restart api`

### Client

To start:
`sudo systemcyl start client`

To stop:
`sudo systemctl stop client`

To restart:
`sudo systemctl restart client`

## Useless-Bay

Typescript and svelte frontend for the Plantcab touchscreen. See more here :: (TODO: Add link).

## API

The node express server. This server powers the api that interacts with the physical gpio board. 
