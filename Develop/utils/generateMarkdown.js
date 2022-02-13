// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const{title} = data;
  return `# ${data.name}

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

## License
This project is under the ${data.license} license.

## Contributions
${data.contribution}

## Tests
${data.test}

## Questions

`;
}

module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
