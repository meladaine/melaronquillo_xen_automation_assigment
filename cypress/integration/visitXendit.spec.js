// visitXendit.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Visiting Xendit Dashboard', () => {
    it('I navigate to Xendit Dashboard', () => {
      cy.visit('https://xendit-dashboard-ui-live.us-west-2.stg.tidnex.dev')
    })
    it('I input the correct username and password', () => {
        cy.get('input[name="email"]').type("#deleted my actual username for upload#")
        cy.get('input[name="password"]').type("#deleted my actual password for upload#")
        cy.get('button[type="submit"]').click()
      })
    it('I should see device verification error message', () => {
        cy.get('div[class="fade error-label d-flex align-items-center  undefined alert alert-danger show"]').contains("This device is not recognized. Please check your email to verify your device").should('be.visible')
    }
    )
  })