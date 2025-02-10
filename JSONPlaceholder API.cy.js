context('API Testing using JSON Placeholder website', function(){
    it('GET POSTS', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    it('PUT POSTS', function(){
        cy.request({
            method :"PUT",
            "url":'https://jsonplaceholder.typicode.com/posts/5',
            "headers":{
                'Content-Type':"application/json",
            },
            "Body":{
                  "userId": 1,
                    "id": 1,
                    "title": "This is a title",
                    "body": "This is a body of the text"                  
            }
        }).then((response =>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));   
        }))
    })

    it('POST POSTS', function(){
        cy.request({
            "method" :"POST",
            "url" :'https://jsonplaceholder.typicode.com/posts',
            "body":{
                "userId": 1,
                "id": 10001,
                "title": "this is title that has been posted",
                "body": "this is title that has been posted"
                        }
        }).then((response =>{
            cy.log(JSON.stringify(response.body));     
        }))
    })

    it('PUT POSTS', function(){

        const body ={"userId": 1,
                "id": 10001,
                "title": "this is title that has been posted",
                "body": "this is title that has been posted"
                        }
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/99',body).then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    it('DELETE POSTS', function(){

       
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/99').then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    it('GET COMMENTS', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/comments').then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    it('POST COMMENTS', function(){
        cy.request({
            "method" :"POST",
            "url" :'https://jsonplaceholder.typicode.com/comments',
            "body":{
               
                "postId": 1,
                "id": 101,
                "name": "Posted comments",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                        }
        }).then((response =>{
            cy.log(JSON.stringify(response.body));     
        }))
    })


    it('PUT COMMENTS', function(){

        const body ={"userId": 1,
                "id": 10,
                "title": "this is title that has been commented",
                "body": "this is title that has been commented"
                        }
        cy.request('PUT','https://jsonplaceholder.typicode.com/comments/10',body).then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    
    it('DELETE COMMENTS', function(){

       
        cy.request('DELETE','https://jsonplaceholder.typicode.com/comments/10').then((response) => {

            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));            
          });      
    
    })

    it('WORKING ON ROUTES - GET POST ', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts').then((response =>{
            expect(response.status).to.eq(200)
        }))
    })
    

    it('WORKING ON ROUTES - GET POST 1', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((response =>{
            expect(response.status).to.eq(200)
        }))
    })

    it('WORKING ON ROUTES - GET COMMENTS ', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1/comments').then((response =>{
            expect(response.status).to.eq(200)
        }))
    })

    it('WORKING ON ROUTES - GET COMMENTS 1', function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/comments?postId=1').then((response =>{
            expect(response.status).to.eq(200)
        }))
    })
})