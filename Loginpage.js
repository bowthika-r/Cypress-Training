/// <reference types="cypress" />

class loginpage{

    visit()
    {
        cy.visit("https://mytestingthoughts.com/Sample/home.html")
    }
    firstname(value)
    {
      const field=cy.get('[name=first_name]')
        field.clear()
        field.type(value)
        return this


    }
    lastname(value)
    {
      const field=cy.get('[name = last_name]')
        field.clear()
        field.type(value)
        return this
 }
  
    username(value){
        const field = cy.get('[name =user_name]')
        field.clear()
        field.type(value)
        return this
    }

    submit(){
        const button = cy.get('[type=submit]')
        button.click()
    }
}

export default loginpage