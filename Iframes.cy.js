//const cypress = required("cypress")

describe('handling frames', () => {  // this ia a test suite
    it('approach', function() {   // this is one of the testcase
       cy.visit("https://ui.vision/demo/webtest/frames/");
       const iframe = cy.get("frame[src='frame_2.html']").its('0.contentDocument.body').should('be.visible').then(cy.wrap)//have to capture both iframe and document
       iframe.get("[name='mytext2']").type("welcome")
    })

  })