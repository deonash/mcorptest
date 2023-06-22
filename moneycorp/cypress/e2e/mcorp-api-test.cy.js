describe("The MCORP API TEST", () => {
  it("Get first activity from boaredapi", () => {
  cy.request({
  url: 'https://www.boredapi.com/api/activity?type=social&participants=2',
  failOnStatusCode: false,
}).as('details')

cy.get('@details').its('status').should('eq',200)
cy.get('@details').then((response ) =>
{  
expect(response.body).to.have.property('type', 'social')
expect(response.body).to.have.property('participants', 2)
cy.log(JSON.stringify(response.body))
})
  
})

 it("Get second activity from boaredapi", () => {
  cy.request({
  url: 'https://www.boredapi.com/api/activity?type=social&participants=2',
  failOnStatusCode: false,
}).as('details')

cy.get('@details').its('status').should('eq',200)
cy.get('@details').then((response ) =>
{  
expect(response.body).to.have.property('type', 'social')
expect(response.body).to.have.property('participants', 2)
cy.log(JSON.stringify(response.body))
})
  
})

 it("Get third activity from boaredapi", () => {
  cy.request({
  url: 'https://www.boredapi.com/api/activity?type=social&participants=2',
  failOnStatusCode: false,
}).as('details')

cy.get('@details').its('status').should('eq',200)
cy.get('@details').then((response ) =>
{  
expect(response.body).to.have.property('type', 'social')
expect(response.body).to.have.property('participants', 2)
cy.log(JSON.stringify(response.body))
})
  
})

})

