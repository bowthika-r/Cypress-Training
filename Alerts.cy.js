

describe("Alerts", function(){

    // Simple Alert

it("Simple Alerts", function(){
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()
    cy.on("Window : Alert",(t)=>{
        expect(t).to.contains("I am a JS Alert")
    })
    cy.get("#result").should("have.text","You successfully clicked an alert")
})

    // Confirmtion Alert

    it("Confirmation ALert", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("Window : Confirm",(t) => {

            expect.to.contains("I am a JS Confirm")
        })
        cy.get("#result").should("have.text","You clicked: Ok")
    })

// Confirmation Alert with cancel button

it("Confirmation - cancel", function(){
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on("window:Confirm",(t) => {
        expect.to.contains("I am a JS Confirm")
    })
   cy.on("window:confirm",() => false)

   cy.get("#result").should("have.text","You clicked: Cancel")

})











})