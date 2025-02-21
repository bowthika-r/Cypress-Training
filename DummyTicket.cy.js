describe("dummy ticket booking",function(){
    it("booking visa",function(){
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //phone number
        cy.get('.ffb-block-button-1-0 > span.btn-text')
        .should("be.visible")
        cy.get('.ffb-id-pmnqvgt > .ffb-block-button-1-1 > span.btn-text').should('be.visible')
        cy.get('.ffb-id-pmnqvgt > .ffb-block-button-1-2 > span.btn-text').should('be.visible')
        cy.get('.ffb-id-pmnqvgt > .ffb-block-button-1-3 > span.btn-text').should('be.visible')
        //follow us
        cy.get('.ffb-html-1').should('be.visible')
        //header path
        cy.get('#menu-item-13 > .nav-item-child').should('be.visible')
        cy.get('#menu-item-574 > .nav-item-child').should('be.visible')
        cy.get('#menu-item-1556 > .nav-item-child').should('be.visible')
        //heading
        cy.get('.ffb-h2-1 > :nth-child(2)').should('have.text','Dummy ticket booking')
        //choose the correct option
        cy.get('#product_549').click()
        cy.get('#product_550').click()
        cy.get('#product_3186').click()
        cy.get('#product_7441').click()
        //passenger details
        cy.get('#travname').type('Bowthika')
        cy.get('#travlastname').type('Ravi')
        cy.get('#dob').click().should('be.visible')
        cy.get('#ui-datepicker-div > div.ui-datepicker-header.ui-widget-header.ui-helper-clearfix.ui-corner-all > div > select.ui-datepicker-month')
        .select('Aug')
        cy.get('#ui-datepicker-div > div.ui-datepicker-header.ui-widget-header.ui-helper-clearfix.ui-corner-all > div > select.ui-datepicker-year')
        .select('1999')
        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(5) > a')
        .click()
        cy.get('#sex_2').click()

        //additional information
        cy.get('#addmorepax').click()
        //travel details
        cy.get('#traveltype_2').click()
        cy.get('#fromcity').type('Goa')
        cy.get('#tocity').type('bangalore')
        cy.get('#departon').click().should('be.visible')
        cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
        cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
        cy.get('#notes').should('be.visible').should('exist').type("No additional information")
        // Delivery Options
        cy.get('#appoinmentdate').should('be.visible').should('exist').click()
        cy.wait(2000)
        cy.get('.ui-datepicker-next > .ui-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
        cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
        //billing details
        cy.get('#billname').type('qaoncloud')
        cy.get('#billing_phone').type('6381839651')
        cy.get('#billing_email').type('bowthika@gmail.com')
        cy.get('#select2-billing_country-container').should('be.visible')
        cy.get('#billing_address_1').type('XXXX')
        cy.get('#billing_address_2').type('athani')
        cy.get('#billing_city').type('erode')
       // cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
        cy.get('#billing_postcode').type('63878')
        cy.get('#place_order').should('be.visible')
        //footer
        cy.get('.ffb-id-pp7hq1g > .ffb-block-button-1-1 > .btn-text').should('be.visible')
        cy.get('.ffb-id-pp7hq1g > .ffb-block-button-1-3 > .btn-text').should('be.visible')
        cy.get('.ffb-block-button-1-4 > .btn-text').should('be.visible')
        cy.get('.ffb-block-button-1-5 > .btn-text').should('be.visible')
        cy.get('.ffb-block-button-1-6 > .btn-text').should('be.visible')
    })
})
it("Validate I/P field with Invalid data's",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
     
    // To check Dummy ticket for Visa Application checkbox
cy.get('#product_549').should('be.visible').should('exist').check()

// Give Inputs to input fields


cy.get('#travlastname').should('be.visible').should('exist').type("S")
cy.get('#order_comments').should('be.visible').should('exist').type("Not yet any commands")
cy.get('#sex_1').should('be.visible').should('exist').click()
cy.get('#traveltype_1').should('be.visible').should('exist').click()
cy.get('#fromcity').should('be.visible').should('exist').type("Chennai")
cy.get('#tocity').should('be.visible').should('exist').type("Dubai")
cy.get('#departon').should('be.visible').should('exist').click()
cy.wait(2000)
cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
cy.get('#notes').should('be.visible').should('exist').type("No additional information")

cy.get('#appoinmentdate').should('be.visible').should('exist').click()
cy.wait(2000)
cy.get('.ui-datepicker-next > .ui-icon').click()
cy.wait(2000)
cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()

cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
// Billing details
cy.get('#billname').should('be.visible').should('exist').type("Bowthika")
cy.get('#billing_phone').should('be.visible').should('exist').type("65432789")
cy.get('#billing_email').should('be.visible').should('exist').type("bowthika@gmail.com")

cy.get('#billing_address_1').should('be.visible').should('exist').type("XXX")
cy.get('#billing_address_2').should('be.visible').should('exist').type("coimbatore")
cy.get('#billing_city').should('be.visible').should('exist').type("Coimbatore")
cy.get('#select2-billing_state-container').should('be.visible').should('exist').click()
cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
cy.get('#billing_postcode').type("646464")
// Click place order btn
cy.get('#place_order').should('be.visible').should('exist').click()
    cy.wait(5000)
    // Assert error message
    cy.get('[data-id="travname"]').should('be.visible').should('exist')
    .should('have.text','\n\t\t\tFirst / Given name is a required field.\t\t')
    cy.get('[data-id="dob"]').should('be.visible').should('exist')
    .should('have.text','\n\t\t\tDate of birth is a required field.\t\t')


})
it("Validate I/P field with Invalid data's",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
     
    // To check Dummy ticket for Visa Application checkbox
cy.get('#product_549').should('be.visible').should('exist').check()

// Give Inputs to input fields


cy.get('#travname').should('be.visible').should('exist').type("Bowthika")
cy.get('#travlastname').should('be.visible').should('exist').type("Ravi")
cy.get('#order_comments').should('be.visible').should('exist').type("Not yet any commands")
cy.get('#dob').should('be.visible').should('exist').click()
cy.wait(2000)
cy.get('.ui-datepicker-year').select("1998")
cy.get('.ui-datepicker-month').select("Feb")
cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
cy.get('#sex_1').should('be.visible').should('exist').click()
cy.get('#traveltype_1').should('be.visible').should('exist').click()
cy.get('#fromcity').should('be.visible').should('exist').type("Chennai")
cy.get('#tocity').should('be.visible').should('exist').type("Dubai")
cy.get('#departon').should('be.visible').should('exist').click()
cy.wait(2000)
cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
cy.get('#notes').should('be.visible').should('exist').type("No additional information")

cy.get('#appoinmentdate').should('be.visible').should('exist').click()
cy.wait(2000)
cy.get('.ui-datepicker-next > .ui-icon').click()
cy.wait(2000)
cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()

cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
// Billing details
cy.get('#billname').should('be.visible').should('exist').type("Bowthika")
cy.get('#billing_address_1').should('be.visible').should('exist').type("123 ricemill")
cy.get('#billing_address_2').should('be.visible').should('exist').type("coimbatore")
cy.get('#billing_city').should('be.visible').should('exist').type("Coimbatore")
cy.get('#select2-billing_state-container').should('be.visible').should('exist').click()
cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
cy.get('#billing_postcode').type("646464")
// Click place order btn
cy.get('#place_order').should('be.visible').should('exist').click()
    cy.wait(5000)
    // Assert error message
   cy.get('[data-id="billing_phone"]').should('be.visible').should('exist')
   .should('have.text','\n\t\t\tBilling Phone is a required field.\t\t')
   cy.get('[data-id="billing_email"]').should('be.visible').should('exist')
   .should('have.text','\n\t\t\tBilling Email address is a required field.\t\t')


})