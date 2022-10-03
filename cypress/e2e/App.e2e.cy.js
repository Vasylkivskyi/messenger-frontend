describe("App E2E", () => {
  it("Should login", () => {
    cy.visit("/login");
    cy.get("input[type=email]").should("have.value", "");
    cy.get("input[type=email]")
      .type("pavlo@gmail.com")
      .should("have.value", "pavlo@gmail.com");

    cy.get("input[type=password]").type("pavlo").should("have.value", "pavlo");

    cy.get("button").should("have.text", "Submit");
    cy.get("button").click();

    cy.contains("Taras").click();
    cy.get(".textarea").type("Hello Taras");
    cy.get(".send-icon-wrapper").click();
    cy.contains("Hello Taras");
  });
});
