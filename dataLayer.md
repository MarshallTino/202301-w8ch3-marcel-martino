# Data
## Drone
- Name: string
- Price: number
- Category: string
- isSoldout: boolean


## Client
- username: string
- isLogged: boolean
- name: string
- orders: drone[]
- basket: drone[]


## Orders
- id: number
- hasOrderArrived


# Data Modifications

## Client
- log in 
- log out
- add item to shopping cart
- remove item to shopping cart
- add item to order list
- remove item from order list

## Drone
- set isSoldOut to true
- set isSoldout to false
- remove drone from drones[]
- add drone to drones[]

## Order
- set hasOrderArrived to true
- set hasOrderArrived to false
