/// <reference types="Cypress" />
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe("Signup", () => {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('Incorrect Document', function() {

        var deliver = signupFactory.deliver()

        deliver.cpf = 'ab000000035'

        signup.go()

        signup.fillForm(deliver)

        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})

