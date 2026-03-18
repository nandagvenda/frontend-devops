describe ('testes referentes a pagina do curso', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5501/cursos.html')
    })
    
    it ('validar ordenação dos cursos', () => {
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('th').contains('Cursos').click()
        cy.get('table tbody tr:first-child td:first-child')
            .should('contain','Administração')
    })

    it ('validar filtro dos cursos', () => {
        cy.get('input[type=search]').type('Ciência da Computação')
        cy.get('table tbody tr').should('have.length', 1)
    })

    it ('validar filtro por semestre', () => {
        cy.get('input[type=search]').type('10 semestres')
        cy.get('table tbody tr').should('have.length', 2)
    })

})