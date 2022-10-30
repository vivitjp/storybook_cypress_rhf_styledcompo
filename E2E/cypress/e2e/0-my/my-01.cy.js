describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays', () => {
        cy.get('button').should('have.length', 2)
    })
})