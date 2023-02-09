describe('Deverá ser realizado uma nova transação com sucesso.', () => {
    it('Realizar uma nova transação', () => {
        //Entender o fluxo corretamente manual 
        //Maepar os elementos que iremos reagir 
        //Descrever as interações com o cypress
        //Adicionar as asserções que a gente precisa 



      cy.visit('https://dev-finance.netlify.app/')
      cy.get('#transaction > .button').click()
      cy.screenshot('Teste')
      
      cy.wait(1000)
      
              
    })
  })
  