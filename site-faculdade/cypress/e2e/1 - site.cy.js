describe('teste da página inicial site faculdade', () => {
  it('acessar a página inicial', () => {
    cy.visit('http://localhost:5501/index.html')
    cy.contains('Faculdade Tech')
  })

  it('acessar a página cursos', () => {
    cy.visit('http://localhost:5501/index.html')
    cy.get('nav a').contains('Cursos').click()
    cy.url().should('include', 'cursos.html')

  })
})