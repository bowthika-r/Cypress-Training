Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
})
describe('Webdriver university Button clicks',function()
   {
    it('Button Clicks',function()
{
    cy.visit('https://webdriveruniversity.com/Click-Buttons/index.html')
    cy.get('#nav-title').click()
    cy.go('back')
    cy.get('#button1').click()
    cy.get('#myModalClick > div > div > div.modal-footer > button').click()
    
    cy.get('#myModalClick').click()
   // cy.get('#myModalJSClick > div > div > div.modal-footer > button').click()
    //cy.wait('2000')
    cy.get('#button3').click()
    cy.get('#myModalMoveClick > div > div > div.modal-footer > button').click()
    //cy.wait('2000')
})
})