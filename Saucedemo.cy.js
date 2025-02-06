describe('Sause', function(){

   //Login to the site
   beforeEach(() => {
    cy.visit("http://saucedemo.com/")
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include',"www.saucedemo.com/inventory.html")
    })
   

   
    it('Search Product',function(){

        cy.get('.product_sort_container').select('az')
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('contain','Backpack')
        cy.get('.product_sort_container').select('za')
        cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('contain','T')
        cy.get('.product_sort_container').select('lohi')
        cy.get("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)").should('contain','7.99')
        cy.get('.product_sort_container').select('hilo')
        cy.get("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)").should('contain','49.99')

    })
   
    
    it('Product listing & Adding a product to cart', function(){
       cy.get('.inventory_list').children().should('have.length',6)
       cy.get('.inventory_list').find('.inventory_item_description').should('contain','Sauce Labs Backpack')
       cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
       cy.get('.shopping_cart_link').click()
       cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
       cy.get('[data-test="continue-shopping"]').click()
    })

})