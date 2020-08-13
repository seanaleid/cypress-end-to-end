describe("Testing form inputs", () => { 
    // you can use context instead of describe
    // it or specify 
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    }) 

    it("adding text to inputs and submits th form", () => {
        cy.get('[data-cy="name"]').type('Sean').should('have.value', 'Sean');
        cy.get('[data-cy="email"]').type('seanaleid@gmail.com').should('have.value', 'seanaleid@gmail.com');

        // test for textarea 
        cy.get('[data-cy="motivation"]').type('I want to help').should('have.value', 'I want to help');

        cy.get('[data-cy="positions"]').select('Tabling').should('have.value', 'Tabling');

        cy.screenshot('my-name-of-image')
        cy.get('[data-cy="terms"]').check().should('be.checked');

        cy.get('[data-cy="submit"]').click();
    })
})