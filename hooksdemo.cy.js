describe('Hooks',function()
  {
     before(() => {
          cy.log('******** This is setup block ******')
     })
    
     beforeEach(() => {
          cy.log('****** This is Login block******')
     })
    
     afterEach(() => {
          cy.log('****** This is Logout block******')
    })
    
     after(() => {
          cy.log('****** This is Tear down block******')
    })    

    it('Searching',function(){
        cy.log('*** This is for Searching Test ******')
    })


    it('Advanced Searching',function(){
        cy.log('*** This is for advanced testing ******')
    })


    it('Listing Products',function(){
        cy.log('***** This is for Listing products ******')
    })
})