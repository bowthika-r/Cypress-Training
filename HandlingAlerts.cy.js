describe("Handling Alerts", function(){

it.only('Simple Alerts', function(){

    // Visit the website

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    // Trigger an event in alert

    cy.on("window:alert",(t) =>{

        expect(t).to.contains("I am a JS Alert")

    })

    // Alerts automatically closed by cypress
    // Confirm the text

    cy.get("#result").should("have.text","You successfully clicked an alert")

})

    it.skip('Confirmation Alerts -Ok ', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        // Triggering an event to validate the text in the Alert

        cy.on("window:Confirm",(t) => {
            expect.to.contains("I am a JS Alert")
        })

        // Closing the alert window by clicking the ok button - default

        cy.get("#result").should("have.text","You clicked: Ok")

    })
    

    it('Confirmation Alerts - Cancel  ', function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        // Triggering an event to validate the text in the Alert

        cy.on("window:Confirm",(t) => {
            expect.to.contains("I am a JS Alert")
        })

        // Closing the alert window by clicking the Cancel button
        
        cy.on('window:confirm', () => false)
        cy.get("#result").should("have.text","You clicked: Cancel")

    })

    it.skip("Prompt Alerts", function(){

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.window().then((win) => {
            cy.stub(win,"prompt").returns("Welcome")
            
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // Cypress will automatically close the alert

        cy.get("#result").should("have.text","You entered: Welcome")
    })

})