module.exports = readmeFile => {

    const { title, description, installation, usage, collaborators, license } = readmeFile;

    const APACHE = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    const MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    const BSD = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    const GPL = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";

    const licenseBadgeChose = readmeFile.license.map(function(licenseChose){
        if (licenseChose === "APACHE") {
            return APACHE
        }
        if (licenseChose === "MIT") {
            return MIT;
        }
        if (licenseChose === "BSD") {
            return BSD;
        }
        if (licenseChose === "GPL") {
            return GPL;
        }
    });

    const StringBadgeLicense = licenseBadgeChose.join("");
    const StringLicense = readmeFile.license.join("");
    
    return `

# ${title}

## Description
    
${description}

## Installation
    
${installation}

## Usage

${usage}

## Credits

${collaborators}

## License

${StringLicense}

## Badges

${StringBadgeLicense}
    `;
};