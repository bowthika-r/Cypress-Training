context('Swagger Demo API', function(){

    it('PETS - Add new pet', function(){
      cy.request({
        method:"POST",
        url :"https://petstore.swagger.io/v2/pet",
        headers :{
          'Content-Type':'application/json'
        },
        body :{
          
            "id": 1234,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          
        }

      }).then((response =>{
       expect(response.status).to.eq(200)
      }))
    })

    it('GET THE ADDED PET(GET)', function(){
      cy.request({
        method : 'GET',
        url :"https://petstore.swagger.io/v2/pet/1234"
      }).then((response)=>{
        expect(response.status).to.equal(200)
      })
    })

    it('UPDATE THE ADDED PET (PUT)', function(){
      cy.request({
        method:"PUT",
        url :"https://petstore.swagger.io/v2/pet",
        headers :{
          'Content-Type':'application/json'
        },
        body :{
          
            "id": 1234,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie pomerian",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "sold"
          
        }

      }).then((response =>{
       expect(response.status).to.eq(200)
      }))

    })

    it('DELETE THE PET(DELETE)', function(){
      cy.request({
        method:"DELETE",
        url:"https://petstore.swagger.io/v2/pet/1234"
      }).then((response =>{
        expect(response.status).to.eq(200)
      }))
    })



    it('STORE/INVENTORY (GET)', function(){
      cy.request('GET','https://petstore.swagger.io/v2/store/inventory').then((response =>{
        expect(response.status).to.eq(200)
      }))
    })

    it('PLACE ORDER', function(){    
      
      cy.request({method : 'POST',
        url :'https://petstore.swagger.io/v2/store/order', 
        headers :{
          'Content-Type':'application/json'
        },
        body :{
          "id": 85521517,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2025-02-08T04:03:49.641Z",
        "status": "placed",
        "complete": true
        }}).then((response =>{
        expect(response.status).to.eq(200)
      }))
    })

    it('GET THE ORDER', function(){    
      
      cy.request({method : 'GET',
        url :'https://petstore.swagger.io/v2/store/order/85521517',         
        }).then((response =>{
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body));
      }))
    })
    
    it('DELETE THE ORDER', function(){
      cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/store/order/85521517', // Replace with correct order ID
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Order deleted successfully');
      });
    })


    it('USER OPERATIONS (POST)', function(){
      cy.request({
        method:"POST",
        url :"https://petstore.swagger.io/v2/user/createWithList",
        headers :{
          'Content-Type' :"application/json"
        },
        body :
          [
            {
              "id": 0,
              "username": "bowthika_ravi",
              "firstName": "Bowthika",
              "lastName": "Ravi",
              "email": "bowthika@qa.com",
              "password": "uytyut@123",
              "phone": "87876767",
              "userStatus": 0
            }
          ]
        
      }).then((response =>{
        expect(response.status).to.equal(200)
        cy.log(JSON.stringify(response.body));
      }))
    })
  
    
    it('USER OPERATIONS (PUT)', function(){
      cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/bowthika_ravi", // Use the username you created
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          id: 0,  // Keep the same user ID
          username: "bowthika_ravi",
          firstName: "Bowthika Updated",
          lastName: "Ravi Updated",
          email: "updated_bowthika@qa.com",
          password: "newPassword@123",
          phone: "9999999999",
          userStatus: 1
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
      });
      
    })

    it('DELETE USER (DELETE)', function(){

      cy.request("DELETE", "https://petstore.swagger.io/v2/user/bowthika_ravi").then((response) => {
        expect(response.status).to.eq(200);
        
      });     
      
    })

    it('POST USER WITH ARRAY', function(){
      cy.request({
        method:"POST",
        url :"https://petstore.swagger.io/v2/user/createWithArray",
        headers :{
          'Content-Type' :"application/json"
        },
        body :
        [
          {
            "id": 0,
            "username": "bow",
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": "string",
            "phone": "string",
            "userStatus": 0
          }
        ]
        
      }).then((response =>{
        expect(response.status).to.equal(200)
        cy.log(JSON.stringify(response.body));
      }))



      
      it('PUT USER WITH ARRAY', function(){
        cy.request({
          method: "PUT",
          url: "https://petstore.swagger.io/v2/user/bow", // Use the username you created
          headers: {
            "Content-Type": "application/json"
          },
          body: {
            id: 0,  // Keep the same user ID
            username: "bowthika_ravi",
            firstName: "Bowthika Updated",
            lastName: "Ravi Updated",
            email: "updated_bowthika@qa.com",
            password: "newPassword@123",
            phone: "9999999999",
            userStatus: 1
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
        
      })

      it('GET USER WITH ARRAY', function(){
        cy.request('GET','https://petstore.swagger.io/v2/user/bow').then((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));
        });
      })
   })
})