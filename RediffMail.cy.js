import Rediff from "../PageObjects/Redifmail.cy";
 
describe('Pom suite',function(){
    it('entering credential',function(){
        const credential=new Rediff()
        credential.visit()
        credential.name('Bowthika')
        credential.rediffid('bowthika9916')
        credential.password('b@1234')
        credential.repassword('b@1234')
        credential.alter('bowthika@gmail.com')
        credential.mobno('123456789')
        credential.date('05')
        credential.month('SEP')
        credential.year('1994')
        credential.gender()
        credential.country('India')
        credential.city('Coimbatore')
        credential.captcha()
        cy.wait(10000)
        credential.submit()
        cy.title().should('eq','Rediffmail Free Unlimited Storage')
    })
 
})