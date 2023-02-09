/// <reference types="Cypress" />

describe('Home page', () => {
    //It define o caso de testes
    it('app deve estar online', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})

