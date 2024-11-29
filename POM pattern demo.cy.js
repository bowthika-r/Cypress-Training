/* when we have more pages 
TC1 = Login page 
TC2 = registration page => needs intraction with TC1 (duplicate the elemnets of TC1) // redudancy is one problem // updation of all needs
TC3 = booking page => needs intraction with TC1 & Tc2 (duplicate the elemnets of TC1 & TC2) // so we are using POM

1. In POM , We create class for each page => write all the locators in one class (object identifiers)
2. In actual coding , we use the locators from the class

Advantages : Reusability ,  Maintanability
*/

/// <reference types ="cypress" /> 

import loginpage from "./Pageobject/Loginpage"

describe(" POM demo", ()=>{
    it('valid login', ()=>{
        const lp = new loginpage()
        lp.visit()
        lp.firstname("Bowthika")
        lp.lastname("admin")
        lp.username("bowthika_r")
        lp.submit()
        
        
    })
})