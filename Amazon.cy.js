describe('Amazon',()=>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        console.error('Uncaught Exception:', err);
        return false;
    });

    let userdata;
        before(function() {
        cy.fixture("Amazon.json").then(function(data){
           userdata=data
        })

    })
    
    const url = 'https://www.amazon.in/';

    beforeEach(() => {
    cy.visit(url);
    })
    
    
    it('Verifying the title of the page' ,()=>{
        cy.visit(url).title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })

    it('Navigating to the headers',()=>{        
        cy.get(".nav-a[href='/fresh?ref_=nav_cs_fresh']").click()
        cy.url().should('eq', 'https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh');
        cy.go(-1)
        cy.get(".nav-a[href='/minitv?ref_=nav_avod_desktop_topnav']").click()
        cy.url().should('eq','https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav')
        cy.go(-1)
        cy.get(".nav-a[href='/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3']").click()
        cy.url().should('eq','https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3')
        cy.go(-1)
    })

    it('Changing the languages', ()=>{
        cy.get("span[class='nav-line-2'] div").click()
        cy.get(':nth-child(6) > .a-radio > label > .a-icon').should('be.visible').click()
        cy.get('.a-button-input').click()
        cy.get("span[class='nav-line-2'] div").should('have.text','HI')
    })

    it('Sign in the Amazon Account', ()=>{
        //using fixtures concept here 
        cy.get("span[class='nav-line-2 ']").click()
        cy.get('#ap_email').type(userdata.mobileno)
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type(userdata.password)
        cy.get('#signInSubmit').click()

    })

    it('Searching a product',()=>{

        cy.get('#twotabsearchtextbox').type('Gaming Laptops')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state.a-text-bold').should('have.text','"Gaming Laptops"')
    })

    it('Adding the item to the cart',()=>{
    cy.get('#twotabsearchtextbox').type('swing')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-color-state.a-text-bold').should('have.text','"swing"')
    cy.get('#a-autoid-1-announce').click()
  
    })
})





