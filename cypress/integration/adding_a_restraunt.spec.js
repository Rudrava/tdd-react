describe("adding a restraunt", () => {
  it("displays the restraunt in the list and add it", () => {
    cy.visit("http://localhost:1234");
    const restrauntName = "Zaika";

    cy.get('[data-test="newRestrauntName"]').should("not.be.visible");
    cy.get('[data-test="no-restaurant-message"]').should("exist");

    cy.get('[data-test="addRestrauntButton"]').click();
    cy.get('[data-test="newRestrauntName"]').type(restrauntName);
    cy.get('[data-test="saveNewRestrauntButton"]').click();

    cy.get('[data-test="no-restaurant-message"]').should("not.exist");
    cy.get('[data-test="newRestrauntName"]').should("not.be.visible");

    cy.contains(restrauntName);
  });
});
