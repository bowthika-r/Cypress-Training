describe('Bookings API ', function(){
    it('Create Tokens', function(){
        cy.request({
            method:'POST',
            url :'https://restful-booker.herokuapp.com/auth',
            body :{
                "username" : "admin",
                "password" : "password123"
            }}).then((response =>{
                //expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body));
            }))
    })

    it('GET BOOKINGSID', function(){
        cy.request({
            method :'GET',
            url :'https://restful-booker.herokuapp.com/booking'
        }).then((response =>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        }))
    })

    it('GET BOOKINGS',function(){
        cy.request({
            method :'GET',
            url :'https://restful-booker.herokuapp.com/booking/1'
        }).then((response =>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        }))
    })

    it('CREATE BOOKING',function(){
        cy.request({
            method :'POST',
            url :'https://restful-booker.herokuapp.com/booking',
            header:{
                'Content-Type' :"application/json"
              },
            body :{
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((response =>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        }))
    })
    it('UPDATE BOOKING ',function(){
        const token = Cypress.env('authToken'); // Retrieve stored token

        cy.request({
            method :'PUT',
            url :'https://restful-booker.herokuapp.com/booking/2622',
            header:{
                'Content-Type' :"application/json",
                "Cookie": `token=${token}`
              },
              failOnStatusCode: false,
            body :{
                "firstname" : "James",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((response =>{
            expect(response.status).to.eq(403)
            cy.log(JSON.stringify(response.body)); 
            
        }))
    })


    it('DELETE BOOKING', function(){
        cy.request({
            method :'DELETE',
            url :'https://restful-booker.herokuapp.com/booking/1',
            header:'Cookie: token=abc123',
            failOnStatusCode: false}).then((response =>{
                expect(response.status).to.eq(403)
                cy.log(JSON.stringify(response.body)); 
                
            }))
    })

    it('PING HEALTH CHECK', function(){
        cy.request('GET','https://restful-booker.herokuapp.com/ping').then((response =>{
            expect(response.status).to.eq(201)
        }))
    })

})