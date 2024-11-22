describe('Xpath Locators',function(){

it('Find the no of products in women page',function(){

    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category')
    cy.title().should('eq','Women - My Shop')

    //Count the number of elements in the list
    cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7) //have.length is an assertion
})
})