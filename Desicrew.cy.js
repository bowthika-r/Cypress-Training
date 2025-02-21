describe('Desicrew SOlutions', function(){
    it('Visiting the url', function(){
        cy.viewport(1920, 1080);
        cy.visit('https://desicrew.in/').title().should('eq','DesiCrew')
        cy.get('.elementor-item elementor-item-anchor has-submenu highlighted').click()
       
    })
})