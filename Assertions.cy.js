


describe("Assertion demo", function(){

    it("Implicit Assertion - URL", ()=>{

        /* Capturing url mulitple times while using should

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com') // Assertion with Include keyword
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        */

        //Capturing the url single time using should assertion
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com') // Assertion with Include keyword
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        // capturing url and checking multiple assertions using " and "
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.url().should('include','orangehrmlive.com') // Assertion with Include keyword
         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         .and('not.contain','greenhrm') // not - negative assertion


    })

    it("Implicit Assertion - title checking" , function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
    })


    it("Implicit Assertion - element verification" , function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.orangehrm-login-branding > img').should("be.visible") // logo present or not
        .and("exist") // logo exist or not

        cy.xpath("//a").should("have.length",'5') // checking the no of anchor tags in the webpage


        // value verification

        cy.get("input[placeholder='Username']").type("Admin")
        .and("have.value","Admin")
    })

        it("explicit assertion", function(){
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()


            let expectname= 'Dashboard' 
            
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then( (x) =>{

                let actualname = x.text()

                expect(actualname).to.equal(expectname)

                assert.equal(actualname,expectname)

            })

        })


})