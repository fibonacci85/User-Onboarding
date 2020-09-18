describe('testing our form', function(){ 
    beforeEach(function(){
        cy.visit('http://localhost:3003');  
    });
    it('add test to inputs and submits', function(){
       cy.get('.name')
        .type('Joey Emeterio')
        .should('have.value', "Joey Emeterio")

        cy.get('.email')
        .type('joe@joey.com')
        .should('have.value', "joe@joey.com")

        cy.get('.password')
        .type('Kittie123')
        .should('have.value', "Kittie123")

        cy.get("input[name='checkbox']")
        .check()
        .should('be.checked')

        cy.get('button').click();
       
    });
});

