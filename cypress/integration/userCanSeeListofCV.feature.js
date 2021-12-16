describe("User can see experience", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays basic information", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".header").should("contain", "shagufta batool");
    });
  });

  it("displays previous work experience", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".header").should("contain", "Next plc");
    });
  });
});
