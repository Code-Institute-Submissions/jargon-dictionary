## User Stories

- Users must be able to add a new deck 
- Users must be able to remove a deck 
- Users must be able to edit a deck 
- Users must be able to see the collection of decks 
- Users must be able to add definitions to decks 
- Users must be able to remove definitions from decks 
- Users must be able to edit definitions 
- Users must be able to see definitions that belong to a deck after clicking on deck. 


## Deployment 


### Database 



### Web Application 

This application was deployed using Elastic Beanstalk on AWS. To do this I used the Elastic Beanstalk CLI.  

I created an .ebignore file, this was is used by Elastic Beanstalk and excludes irrelevant folders from the application upload, e.g. any virtual environments, tests etc. 

I then ran the command  pip freeze > requirements.txt this is used by elastic beanstalk to see what packages are required to be installed i.e. Flask, Jinja et.  

I then ran the command eb init -p python-3.6 <application name> --region eu-west-2 this creates the application within AWS. 

Next I ran the command eb create prod this created the environment and deployed my code into it.  