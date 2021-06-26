describe('Check if page contains hello world', () => {
    it('should contain hello world', () => {
        cy.visit("localhost:1234")
        .contains("hello world")
    })
})
