const hostUrl = "https://www.moneycorp.com/en-gb/";

describe("The MCORP application loads", () => {
  it("navigates to MCORP", () => {
	  
	 cy.visit({
  url: 'https://www.moneycorp.com/en-gb/',
  failOnStatusCode: false,
})   
cy.wait(10)

  });

  it("click on language button", () => {
    cy.get('#language-dropdown-flag').click();
  });
  
  it("select us language", () => {
    cy.xpath('//*[@id="nav-languages-overlay"]/div[2]/ul/li[9]/a/div').click();
	
  });
 
 it("click on foreign exchange solutions", () => {
    cy.xpath('/html/body/section/div[2]/div[7]/section/div/article[1]/a').click();
	
  });

 it("verify we landed on foreign exchange solutions page", () => {
  cy.title().should('eq', 'Foreign Exchange Solutions | moneycorp USA')	
 
  });
 it("click search and type", () => {
  cy.get('nav_search').type('international payements').click()
  }); 
 it("verify we landed on international payment page", () => {
  cy.title().should('eq', 'Search')	
  });


   
  
  
});
