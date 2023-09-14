describe('Api Alurapic', () => {
//    it('Dados da API', () => {
//        cy.request({
//            method:'POST',
//            url: 'http://localhost:3000/user/login',
//            body: Cypress.env()
//        }).then((res) => {
//            expect(res.status).to.be.equal(200)
//            expect(res.body).is.not.empty
//            expect(res.body).to.have.property('id')
//            expect(res.body.id).to.be.equal(4)
//       })
//    })

    it('Fotos do usuário', () => {
        cy.request({
            method:'GET',
            url: 'http://localhost:3000/fabica/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0]).to.be.equal('porquinho')
        })
    })
})

//É de extrema importância substituir informações confidenciais por dados fictícios ou dados que não possam ser rastreados até os indivíduos reais. Proteger os dados ajuda a reduzir os riscos de violações de privacidade e promove a segurança das informações sensíveis.