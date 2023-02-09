describe('Realizando o Acesso na página do DevFinance com sucesso.', () => {
  it('Deverá verificar se o Sistema está funcionando', () => {
    cy.visit('https://dev-finance.netlify.app/')
    cy.screenshot('Evidências realizada com sucesso')
   
  })
})