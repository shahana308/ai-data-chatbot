describe("Chat Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow a user to input a query and receive a response", () => {
    cy.intercept("POST", "**/v1/chat/completions*", {
      statusCode: 200,
      body: {
        choices: [
          {
            message: {
              content: "The meaning of life is subjective.",
            },
          },
        ],
      },
    }).as("postDataAnalysis");

    cy.get('input[placeholder="Enter your query..."]').type(
      "What is the meaning of life?"
    );

    cy.get("button").contains("Submit").click();

    cy.wait("@postDataAnalysis").its("response.statusCode").should("eq", 200);

    cy.get("p").should("contain", "The meaning of life is subjective.");
  });
});
