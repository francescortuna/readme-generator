// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if(license == "GPLv3"){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if(license == "Apache") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license == "BSD 3-clause") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if(license == "GPLv2") {
    licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if(license == "LGPLv3") {
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else {
    licenseBadge = ``;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "Unlicensed"){
    licenselLink = ``;
  } else {
    licenselLink = `
  - [License](#license)`;
  }

  return licenselLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "Unlicensed") {
    licenseSection = ``;
  } else {
    licenseSection = `
    
  ## **License**
    
  This application is covered under the ${license} license.

    `;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseSection(data.license);
  renderLicenseLink(data.license);

  return `
  # **${data.title}** ${licenseBadge}
  
  ## **Description**

  ${data.desc}

  ## **Table of Contents**

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing) ${licenselLink}
  - [Tests](#tests)
  - [Questions](#questions)

  ## **Installation**

  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.install}
  \`\`\`

  ## **Usage**

  ${data.usage}
  ${licenseSection}
  ## **Contributing**
  
  ${data.contribution}
  
  ## **Tests**

  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## **Questions**

  Here is my [GitHub Profile](github.com/${data.github})

  I can be reached by email, at ${data.email}
`;
}

module.exports = generateMarkdown;
