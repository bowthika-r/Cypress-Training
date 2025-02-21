

  describe('Custom commands', function () {
  
    it('Handling Links', function () {
      cy.visit("https://www.amazon.in/");
      
      // Use the custom command to click the link
      cy.clickLink("Fresh");
  
      // Verify URL contains the expected path
      cy.url().should('include', 'ref_=nav_cs_fresh');
    });
  
    it('Overwriting existing command', function () {
      cy.visit("https://www.amazon.in/",{failOnStatusCode: false});
      
      // Use the custom command again
      cy.containsIgnoreCase("a", "FRESH");
  
      // Verify the expected URL
      cy.url().should('include', 'ref_=nav_cs_fresh');
    });
  

      it('Custom command for login', function(){
        cy.loginGuru()
      })


  });
  