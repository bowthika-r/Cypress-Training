describe('Css Locators Demo',function(){

    it ('Test1' ,function(){
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')

        cy.get('input#search_query_top').type('T-Shirts') //used tag and ID
        cy.get("button[name='submit_search']").click() // tag attribute
       

        //Assertion of the search results
        cy.get(".lighter").contains("T-Shirts") //class 
        
        
})
})