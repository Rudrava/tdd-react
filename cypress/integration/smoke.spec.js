describe("Check if page contains hello world", () => {
  it("should render Namuste", () => {
    cy.visit("localhost:1234").contains("Namuste");
  });
});
