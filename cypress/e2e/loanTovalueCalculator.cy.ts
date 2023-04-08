describe("Testing LoanToValueCalculator", () => {
  it("it returns a result when depositValue and purchaseValue are inputted", () => {
    cy.visit("http://localhost:3000");

    // Get an input, type into it
    cy.get("#depositValue").type("{backspace}10.00");
    cy.get("#purchasePrice").type("{backspace}100.00");

    // Get the button, click it
    cy.get("button").click();

    //  Verify that the value has been updated
    cy.get("#loanValue").should("have.text", "90%");
  });

  it("it returns a 'is required' error in the input field when text input is blank", () => {
    cy.visit("http://localhost:3000");

    // Get an input, type into it
    cy.get("#depositValue").type("{backspace}");
    cy.get("#purchasePrice").type("{backspace}");

    // Get the button, click it
    cy.get("button").click();

    //  Verify that the error exists
    cy.get("#depositValueError").should(
      "have.text",
      "Deposit value is required"
    );
    cy.get("#purchasePriceError").should(
      "have.text",
      "Purchase price is required"
    );
  });

  it("it returns a 'must be a number' error in the input field when text input is not a number", () => {
    cy.visit("http://localhost:3000");

    // Get an input, type into it
    cy.get("#depositValue").type("{backspace}qwerty");
    cy.get("#purchasePrice").type("{backspace}qwerty");

    // Get the button, click it
    cy.get("button").click();

    //  Verify that the error exists
    cy.get("#depositValueError").should(
      "have.text",
      "Deposit value must be a number"
    );
    cy.get("#purchasePriceError").should(
      "have.text",
      "Purchase price must be a number"
    );
  });
});
