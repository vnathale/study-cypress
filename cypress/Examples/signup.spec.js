/// <reference types="Cypress" />
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe("Signup", () => {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function() {

        var deliver = signupFactory.deliver()

        signup.go()

        signup.fillForm(deliver)

        signup.submit()

        //Validando cadastro efetuado
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })
})

