// have to install the cypress file upload plugin using command "npm install --save-dev cypress-file-upload" 
// Add an import commands.js "import 'cypress-file-upload';""

//Uploading a file in the web (Any file type you may upload. first you have to add it in fixtures folder)


describe('fileupload', ()=>{

    it('File upload test', ()=>{

        cy.visit("https://demo.automationtesting.in/Register.html")

        const myimagefile = "Puppy.jpg"
        cy.get('#imagesrc').attachFile('Puppy.jpg');

    })

    it('Mutiple file uploads', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['example.json', 'orangehrm.json','Puppy.jpg']);
    })

})