describe("adding a restraunt", () => {
  it("displays the restraunt in the list and add it", () => {
    cy.visit("http://localhost:1234");
    const restrauntName = "Zaika";

    // modla not visible
    cy.get('[data-test="newRestrauntName"]').should("not.be.visible");
    // no res message exists
    cy.get('[data-test="no-restaurant-message"]').should("exist");

    // checks input field on modal is on focus

    // opens and closes the modal with cancle
    cy.get('[data-test="addRestrauntButton"]').click();
    cy.focused().should("have.attr", "data-test", "newRestrauntName");

    cy.get('[data-test="newRestrauntName"]').type("foo");
    cy.get('[data-test="cancelNewRestaurantForm"]').click();

    // opens modal and adds restaurant
    cy.get('[data-test="addRestrauntButton"]').click();
    // checks if field is always empty on open
    cy.get('[data-test="newRestrauntName"]').invoke("val").should("eq", "");
    cy.get('[data-test="newRestrauntName"]').type(restrauntName);
    cy.get('[data-test="saveNewRestrauntButton"]').click();

    // checks restaurant name clears out
    cy.get('[data-test="addRestrauntButton"]').click();
    cy.get('[data-test="newRestrauntName"]').invoke("val").should("eq", "");
    cy.get('[data-test="cancelNewRestaurantForm"]').click();

    // checks if modal was closed and new restaurant  was added
    cy.get('[data-test="no-restaurant-message"]').should("not.exist");
    cy.get('[data-test="newRestrauntName"]').should("not.be.visible");

    cy.contains(restrauntName);
  });
});
