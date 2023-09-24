# QuizGenie-Website
## This repository contains all source code relevant to the website that will be integrated with the gpt model to generate multiple choice tests.

The website contains a login page, where users are asked to enter their login information or requets access to an account. Once they have done this they are allowed to proceed to the following page which is where users can begin creating new multiple choice tests.

## Using the code locally
To enable the local use of the code in a development version, the python script acting as the backend must be run and the angular application must be served. (It is important to note that your own GPT API key must be added into the python file)

## Development Plan (For remaining development)

- [x] Complete design and functionality of login page
- [ ] Implement error handling and helper bot on the "Login" page
- [ ] Implement functionality to Log Out
- [x] Complete design of the "Create Test" page 
- [x] Implement the functionality of the "Create Test" page (intergrate endpoints into the AI that are called on the backend)
- [ ] Implement error handling and helper bot on the "Create Test" page
- [x] Set up GPT function calling and use the API the send prompts  

