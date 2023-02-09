/// <reference types="Cypress" />
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe("Signup", () => {

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('Incorrect Email', function() {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()

        signup.fillForm(deliver)

        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
})

