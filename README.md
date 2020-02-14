# UX

## Goals

The purpose of the app is to be able to create, read, update and delete collections of similar "cards" within "decks" that contain definitions.

## User Stories

- Users must be able to add a new deck 
- Users must be able to remove a deck 
- Users must be able to edit a deck 
- Users must be able to see the collection of decks 
- Users must be able to add definitions to decks 
- Users must be able to remove definitions from decks 
- Users must be able to edit definitions 
- Users must be able to see definitions that belong to a deck after clicking on deck. 

## Wireframes

[Wireframes can be found here](https://github.com/EthanCundick/jargon-dictionary/tree/master/Wireframes)

# Features

## Decks
Decks are used to contain alike definitions of a chose area. For example Linux would contain definitions for commands. 

## Deck Create, Read, Update and Delete (CRUD)
Decks can be created, read, updated and deleted allowing for users to add new categories, change deck name and description, viewed and deleted if no longer required. 

## Definition Cards
Definition cards contain a definition name and a definition, this is used to store defintions and display them. 

## Defintion Create, Read, Update and Delete (CRUD)

Definitions can be created, read, updated and deleted allowing for users to add new defintions, change definiton name, change value, change deck, viewed and deleted if no longer required. 

## Database 

### Database Collection

#### category (deck)

|Title  |Key |Type |
|-------|:---:| ----:|
|Name | name | string |
|Description| description| string|
|||


#### jargon (definition)
|Title  |Key |Type |
|-------|:---:| ----:|
|Word | word | string |
|Definition| definition | string|
|Category| catgeory| string|

# Technologies Used

- Python - Used for backend development with Flask 
- Flask - Backend python framework
- Boostrap - Frontend framework for formatting nicely
- MongoDB - Database used to store decks/definitions
- HTML/CSS - used for styling
- JavaScript - Front end scripting launguage
- jQuery - Library for JavaScript for faster development 

# Testing 



# Deployment 


## Database 



## Web Application 

This application was deployed using Elastic Beanstalk on AWS. To do this I used the Elastic Beanstalk CLI.  

I created an .ebignore file, this was is used by Elastic Beanstalk and excludes irrelevant folders from the application upload, e.g. any virtual environments, tests etc. 

I then ran the command  pip freeze > requirements.txt this is used by elastic beanstalk to see what packages are required to be installed i.e. Flask, Jinja et.  

I then ran the command eb init -p python-3.6 <application name> --region eu-west-2 this creates the application within AWS. 

Next I ran the command eb create prod this created the environment and deployed my code into it.  