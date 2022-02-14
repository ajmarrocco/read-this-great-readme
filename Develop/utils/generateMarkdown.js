// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
      case "MIT":
        var badge = "https://img.shields.io/badge/License-MIT-yellow.svg"
        return badge;
        break;
    };
    switch (license){
      case "APACHE 2.0":
        var badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
        return badge;
        break;
    };
    switch (license){
      case "GPL 3.0":
        var badge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
        return badge;
        break;
    };
    switch (license){
      case "BSD 3":
        var badge = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
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
      var link = "https://opensource.org/licenses/MIT"
      return link;
      break;
  };
  switch (license){
    case "APACHE 2.0":
      var link = "https://opensource.org/licenses/Apache-2.0"
      return link;
      break;
  };
  switch (license){
    case "GPL 3.0":
      var link = "https://www.gnu.org/licenses/gpl-3.0"
      return link;
      break;
  };
  switch (license){
    case "BSD 3":
      var link = "https://opensource.org/licenses/BSD-3-Clause"
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license){
    case "MIT":
      var string = `This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "APACHE 2.0":
      var string = `This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "GPL 3.0":
      var string = `This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "BSD 3":
      var string = `This project is under the ${license} license.`
      return string;
      break;
  };
  switch (license){
    case "None":
      var string = `This project is under the no license.`
      return string;
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,license) {
  // const{title} = data;
  return `# ${data.name}

## Badge
${renderLicenseLink(license)}
${renderLicenseBadge(license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contribution}

## License
${renderLicenseSection(license)}

## Tests
${data.test}

## Questions

`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
