Cypress.Commands.add('login', (type = 'standard_user') => {
    cy.fixture('user').then((data) => {
        const formData = data[type]
        cy.intercept('GET', 'https://www.saucedemo.com/icon-192x192.png').as('testAPI')

        cy.get('#user-name').clear().type(formData.username);
        cy.get('#password').clear().type(formData.password);
        cy.get('#login-button').click();
        cy.wait(1000);

        cy.wait('@testAPI').its('response.statusCode').should('eq', 200)
    })
})

Cypress.Commands.add('login', (type = 'problem_user') => {
    cy.fixture('user').then((data) => {
        const formData = data[type]

        cy.get('#user-name').clear().type(formData.username);
        cy.get('#password').clear().type(formData.password);
        cy.get('#login-button').click();
        cy.wait(1000);
    })
})

Cypress.Commands.add('completeFormOk', (type = 'valid') => {
    cy.fixture('datos').then((data) => {
        const formData = data[type]

        cy.get('[data-test="firstName"]').clear().type(formData.firstName)
        cy.get('[data-test="lastName"]').clear().type(formData.lastName)
        cy.get('[data-test="postalCode"]').clear().type(formData.postalCode)
        cy.get('[data-test="continue"]').click();
        cy.wait(1000);
    })
})

