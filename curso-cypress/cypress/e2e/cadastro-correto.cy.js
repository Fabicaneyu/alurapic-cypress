describe('Página de cadastro', () => {
  it('Preencher os campos do formulário de forma incorreta', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('fabi@email.com.br')
    cy.get('[data-test="fullName"]').type('Fabi Canedo')
    cy.get('[data-test="registerUserName"]').type('fabica')
    cy.get('[data-test="registerPassword"]').type('fabi1234')
    cy.contains('button', 'Register').click();    
  })
})
