Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('HRMS Login Using valid creds', () => {
    it('Visits the DesiCrew loginpage', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DCK7868')
        cy.get('#Password').type('Bowthika R')
        cy.get('#btnLogin').click()
        cy.get('#frmLogin > fieldset > div.toolbar.clearfix > div > a').click()     
        cy.get('#btnReset').should('be.visible')
        cy.get('#forgot-box > div.center > a').click()
    })
    it('HRMS Login Using valid creds', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.get('#login-box > div > h4').should('be.visible')
        cy.get('#Username').type('DC60256')
        cy.get('#Password').type('test6')
        cy.get('#btnLogin').click()
        cy.get('.dropdown-toggle > .ace-icon').click()
        cy.get('.user-menu > :nth-child(7) > a').click()

    })  
})
