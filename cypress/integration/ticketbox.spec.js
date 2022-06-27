describe('Integration test with visual testing', function () {
  beforeEach(() => cy.visit('index.html'));

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

  it('Updates the agreements on fullname, tickets, quantity, and type', () => {
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#ticket-quantity').select('4')
    cy.get('#vip').check()
    cy.percySnapshot();
  });

  const successfulFormSubmission = 'Shows a success message aftyer form submission'
  it(successfulFormSubmission, () => {
    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#agree').check()
    cy.contains('Confirm Tickets').click()
    cy.percySnapshot(successfulFormSubmission, {
      percyCSS: `.success span {display: none;}`
    });
  })
});