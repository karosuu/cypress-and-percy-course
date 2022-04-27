describe('Integration test with visual testing', function () {
  beforeEach(() => cy.visit('index.html') );

  it('Loads the homepage', function () {
    // Load the page or perform any other interactions with the app.
    cy.visit('index.html')

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  })

  it('Checks for invalid email', () => {
    cy.get('#email').type('johndoe-example.com');
    cy.percySnapshot();
  })
  
  it('Enable submition after all mandatory fields are filled', () => { 
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#agree').check()
    cy.percySnapshot();
  })
});