describe('Tests Challenge QA Automation', { testIsolation: false }, () => {

    it('Visitar la página', () => {
        
        cy.visit('https://www.saucedemo.com/');
    })

    // Compra con user1
    it('Loguearse con el usuario standard_user', () => {

        //Loguearse utilizando Comando
        cy.login('standard_user', 200);

        // cy.get('#user-name').type('standard_user');
        // cy.get('#password').type('secret_sauce');
        // cy.get('#login-button').click();
    })

    it('Agregar Productos al Carrito', () => {

        //Agregando los productos al Carrito
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        // Realizar el Checkout
        cy.get('.shopping_cart_link').click(); // Ir al carrito
        cy.get('[data-test="checkout"]').click(); // Realizar al checkout

        //Completar el Formulario utilizando COMANDOS
        cy.completeFormOk('valid')

        //Finalizar la Compra
        cy.get('[data-test="finish"]').click(); // 

        //Validar que se realizo el Ckeckout
        cy.get('.complete-header').should('contain', 'Thank you for your order');
        
        //Realizar el Logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(500);
    })

    //Compra con user2
    it('Loguearse con el usuario problem_user', () => {

        //Loguearse utilizando Comandos
        cy.login('problem_user');

        // cy.get('#user-name').type('problem_user');
        // cy.get('#password').type('secret_sauce');
        // cy.get('#login-button').click();
    })

    it('Agregar Productos al Carrito', () => {

        //Agregando los productos al Carrito
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

        // Realizar el Checkout
        cy.get('.shopping_cart_link').click(); // Ir al carrito
        cy.get('[data-test="checkout"]').click(); // Realizar al checkout

        // Completar el Formulario
        cy.get('[data-test="firstName"]').type('Alejandro');
        cy.get('[data-test="lastName"]').type('Medina');
        cy.get('[data-test="postalCode"]').type('5000');
        cy.get('[data-test="continue"]').click();
        cy.wait(500);

        //Cancelando la Compra
        cy.get('#cancel').click();
        cy.get('#remove-sauce-labs-backpack').click(); //Limpiando el primer producto
        cy.get('#remove-sauce-labs-bike-light').click(); //Limpiando el segundo producto
        cy.get('#remove-sauce-labs-onesie').click(); //Limpiando el tercer producto
        cy.get('#continue-shopping').click();

        //Realizar el Logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    })

});
