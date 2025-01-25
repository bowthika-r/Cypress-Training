describe('Screenshort',function(){
    it('Demo Screenshort', function(){
        cy.visit("https://demo.opencart.com/").title('eq','cart')//title assertion fail
        //cy.screenshot("Homepage");
        //cy.wait(6000)
        //cy.get("img[title='Your Store']").screenshot("Logo")
        
        //Automatically capture the screenshot and video for the failure

    })
})