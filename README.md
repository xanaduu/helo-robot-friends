# Helo

## Overview

This project was designed to replicate what we might receive on the job. There were no guided instructions beyond [these general design guidelines and style specifications](https://github.com/devmountain/simulation-3). Our mentors were not allowed to help us code. 

## Tech Stack
- `auth0` for authorization
- `massive` to establish a connection with our db
- `express` to communicate with our db over time
- `express.static` to serve up db information

## Technical Requirements
- As a user, I can log in and out of Helo.com. 
- As a user, I can view all my friends and friend reccomendations on a dashboard. 
- As a user, I can view and edit my profile specifications.
    - `firstName`
    - `lastName`
    - `gender`
    - `hairColor`
    - `eyeColor`
    - `hobby`
    - `birthDay`
    - `birthMonth`
    - `birthYear`
- As a user, I can search for friends by `hairColor`, `hobby`, or `firstName`