import RegistrationToday from "../PageObjects/codebox.cy";

describe ('Codebox',function(){

    
    it('FormRegistraion',function(){
    
    const data =new RegistrationToday()
    data.visit()
    data.fillFirst("Bowthika")
    data.fillLast("Ravi")
    data.fillEmail("bowthika@gmail.com")
    data.fillPhone("76657657")
    data.fillCourse("Selenium Automation")
    data.fillMonth("October")
    data.fillHow()
    
    data.submit()
    
    })
})