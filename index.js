

    const inquirer = require("inquirer");
    const { writeFile } = require("fs/promises");
    const generate = require("./generateMarkDown.js");
    inquirer
    .prompt([

        {
            type: "input",
            name: "title",
            message: "Title:"    
        }
        ,
        {
            type: "input",
            name: "description",
            message: "Enter a brief Description of your Project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Briefly elaborate how to Install: "
    
        },
        {
            type: "input",
            name: "usage",
            message: "Explain its usage:"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license",
            choices: ["GNU","Apache2.0","MIT"]       
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the Contributors: "
        },
        {
            type: "input",
            name:"tests",
            message: "Define tests:"
        },
        {
            type: "input",
            name: "questions",
            message: "For Questions contact me via Email: "
        },     
       
    ])
    .then((answers) => 
    {
        //console.log(`First Name: ${answers.firstName}`);
        const readMeText = generate(answers);
        return writeFile("README.md", readMeText)
    })
    .then(data=> 
        {
            console.log("Done!");
        })
    .catch((error) => {
        if (error.isTtyError) 
        {
            console.log("The Prompt could not be entered in the current environment")
        } 
        else
        {
            console.log(error)
        }
    });

  
    

 


