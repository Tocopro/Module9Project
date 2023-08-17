
function generateMarkdown(data) {
    return `

  ## Title

  ${data.title}


  # Description

  ${data.description}


  ![](https://img.shields.io/badge/License - ${data.license}-blue)

  # Table of  Content
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#Usage)
  4. [License](#license)
  4. [Contributing](#contribution)
  5. [Tests](#tests)
  6. [Questions](#questions) 
  


  # Installation

  ${data.installation}


  # Usage

  ${data.usage} 
    

  # License

  ${data.license}


  # Contributors

  ${data.contributors}


  # Tests

  ${data.credit}


  # Questions

  ${data.questions}


 
  
  `
  }
  
  module.exports = generateMarkdown;





