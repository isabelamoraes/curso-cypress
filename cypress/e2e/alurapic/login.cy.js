describe('Login de usuários Alurapic', () => {
  beforeEach(() => {
    cy.visit('/')

    /* Exemplo de verificação controlada utilizando stub */
    //cy.intercept("POST", "https://apialurapic.herokuapp.com/user/login", { statusCode: 400}).as('stubPost')
  })

  it('fazer login de usuário válido', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'))

    /* Utilizando o stub criado */
    //cy.wait('@stubPost')

    cy.contains('a', '(Logout)').should('be.visible')
  })

  it('fazer login de usuário inválido', () => {
    cy.login('isabela', '123')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password')
    })
  })
})