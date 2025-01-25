describe("Read Data from Excel", () => {
    it("Should parse the Excel file and use the data", () => {
      // Use the custom command to parse the Excel file
      cy.parseXlxs("Book1.xlsx").then((excelData) => {
        // Log the data to verify the structure
        cy.log(JSON.stringify(excelData));
        console.log(excelData);
  
        // Ensure the data is valid
        expect(excelData).to.be.an("array"); // Check if it's an array
        expect(excelData.length).to.be.greaterThan(0); // Check if it's not empty
  
        // Process each row
        for (let i = 0; i < excelData.length; i++) {
          const row = excelData[i]; // Get data for the current row
          cy.visit("https://demo.guru99.com/test/newtours/index.php");
          cy.get("input[name='userName']").type(row.userName); // Replace with the actual key
          cy.get("input[name='password']").type(row.password); // Replace with the actual key
          cy.get('div > input').click()
        }
      });
    });
  });
  


  //Cypress.config.js

  /*const { defineConfig } = require("cypress");
  const xlsx = require("xlsx"); // Corrected the typo
  const fs = require("fs");
  const path = require("path");
  
  module.exports = defineConfig({
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
        on("task", {
          parseXlxs({ filePath }) {
            const absolutePath = path.resolve("cypress", "fixtures", filePath);
            const workbook = xlsx.readFile(absolutePath); // Read the XLSX file
            const sheetName = workbook.SheetNames[0]; // Get the first sheet
            const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert to JSON
            return sheetData; // Return the JSON data
          },
        });
      },
    
    },
      //video record option is deprecated in cypress 13, I added the below code to record video on failures
      video: true, // Enables video recording
      videoUploadOnPasses: false, // Only keeps videos for failed tests
      trashAssetsBeforeRuns: true, // Cleans up assets before each run
  
    "reporter": "../node_modules/mochawesome/src/mochawesome.js",
      "reporterOptions": {
          "overwrite": false,
          "html": false,
          "json": true
      }
     
      
  });
  
  */

  //Command.js

  /*
  Cypress.Commands.add("parseXlxs", (filePath) => {
    return cy.task("parseXlxs", { filePath }); // Call the custom task and pass the file path
  });
  */