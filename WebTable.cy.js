describe('My Test suite', function(){

    it(" Table Test", function(){

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.title().should('eq','Automation Testing Practice')

        // Check the value present anywhere in te table

        cy.get('table[name="BookTable"]')
        .contains('td','Master In JS')
        .should('be.visible')


        // Check value present in a particular row and column

        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
        .should('be.visible')
       

        // Check value presence based on the condition by iteration rows

        // Verify the book name " Master in Java" whose author is Amod
        
        cy.get('table[name="BookTable"] >tbody >tr td:nth-child(2)').each(($e,index,$list) => {
 
            const text =$e.text()
            if (text.includes("Amod"))
                {

                cy.get('table[name="BookTable"] >tbody >tr td:nth-child(1)').eq(index).then(function(bname)
                {

                    const bookname = bname.text()
                    expect(bookname).to.equal("Master In Java") 
                })
            }

        })
        
    })

})