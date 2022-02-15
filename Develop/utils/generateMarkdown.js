// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
      case "MIT":
        var badge = "<img src='https://img.shields.io/badge/License-MIT-yellow.svg'></a>"
        return badge;
        break;
    };
    switch (license){
      case "APACHE 2.0":
        var badge = "<img src='https://img.shields.io/badge/License-Apache_2.0-blue.svg'></a>"
        return badge;
        break;
    };
    switch (license){
      case "GPL 3.0":
        var badge = "<img src='https://img.shields.io/badge/License-GPLv3-blue.svg'></a>"
        return badge;
        break;
    };
    switch (license){
      case "BSD 3":
        var badge = "<img src='https://img.shields.io/badge/License-BSD_3--Clause-blue.svg'></a>"
        return badge;
        break;
    };
    switch (license){
      case "None":
        var badge = ""
        return badge;
        break;
    }
}

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "MIT":
      var link = "<a href='https://opensource.org/licenses/MIT'>"
      return link;
      break;
  };
  switch (license){
    case "APACHE 2.0":
      var link = "<a href='https://opensource.org/licenses/Apache-2.0'>"
      return link;
      break;
  };
  switch (license){
    case "GPL 3.0":
      var link = "<a href='https://www.gnu.org/licenses/gpl-3.0'>"
      return link;
      break;
  };
  switch (license){
    case "BSD 3":
      var link = "<a href='https://opensource.org/licenses/BSD-3-Clause'>"
      return link;
      break;
  };
  switch (license){
    case "None":
      var link = ""
      return link;
      break;
  }
}

// adds license link to the table of contents.  
// If there is no license, return an empty string
const renderLicenseTable = license => license ==='None' ? "": `
* [License](#license)`;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case "MIT":
      var string = `## License 
This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "APACHE 2.0":
      var string = `## License 
This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "GPL 3.0":
      var string = `## License 
This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "BSD 3":
      var string = `## License 
This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "None":
      var string = ''
      return string;
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,license) {
  // const{title} = data;
  return `# ${data.name}

## Badge
${renderLicenseLink(license)}${renderLicenseBadge(license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)${renderLicenseTable(license)}
* [Contribution](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contribution}

${renderLicenseSection(license)}  

## Tests

To run a test, run the following command: ${data.test}

## Questions

If you have any questions about opening an issue or the repository itself, please contact me at ${data.email}.  Please visit https://github.com/${data.username} for more of my projects!

`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseTable, renderLicenseSection, generateMarkdown};
