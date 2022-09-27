// visitXendit.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Visiting Xendit Dashboard', () => {
    it('I login to Xendit Dashboard', () => {
      cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev/' + 'login', {
        failOnStatusCode: false,
      }) 
        .get('input[name="email"]')
        .should('be.visible')
        .type("*****@email.com") // removed actual name for git upload
        .get('input[name="password"]')
        .type("*****") // removed actual password for git upload
        .get('button[type="submit"]').click()

 //    cy.get('div[class="fade error-label d-flex align-items-center  undefined alert alert-danger show"]')
 //         .contains("This device is not recognized. Please check your email to verify your device").should('be.visible')

    })

    it('Validate list of tabs shown on the left bar', () => {
      cy.wait(15000)
      var menuOptions = ["Home","Balance","Transactions","Reporting","Accept Payments","Payment Links","QR Codes","Send Payments","Customers"]
      for (let i = 0; i < menuOptions.length; i++) {
        switch (menuOptions[i]){
          case "Home":
            cy.get('[id="lhs-home"]').should('be.visible')
            break;
          case "Balance":
            cy.get('[id="lhs-balance"]').should('be.visible')
            break;
          case "Transactions":
            cy.get('[id="lhs-transactions-new"]').should('be.visible')
            break;
          case "Reporting":
            cy.get('[id="lhs-reporting"]').should('be.visible')
            break;
          case "Accept Payments":
            cy.get('[id="lhs-moneyin"]').should('be.visible')
            break;
          case "Payment Links":
            cy.get('[id="lhs-paymentlinks"]').should('be.visible')
            break;
          case "QR Codes":
            cy.get('[id="lhs-qr-code"]').should('be.visible')
            break;
          case "Send Payments":
            cy.get('[id="lhs-moneyout"]').should('be.visible')
            break;
          case "Customers":
            cy.get('[id="lhs-customers"]').should('be.visible')
            break;
        }
      }
    })
  })