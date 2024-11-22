describe("Navigation" , function(){

    it("Navigation demo " , function(){

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq','Your Store')

        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click()
        cy.wait(2000)
        cy.get("div[id='content'] h2").should("have.text","Cameras") // Currently in camera page

        // Going back to the Home Page

        cy.go('back') //backward
        cy.title().should('eq','Your Store')

        cy.go('forward') // Go forward

        cy.go(-1) // go backward one step
        cy.go(1) // go forward one step

        cy.reload()

    })


})