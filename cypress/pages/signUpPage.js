class SignUpPage {
    
    selectorsList(){

        const fields = {

            firstName: "[data-test='signup-first-name']",
            lastName: "[data-test='signup-last-name']",
            lastNameRequired: "#lastName-helper-text",
            username: "[data-test='signup-username']",
            password: "[data-test='signup-password']",
            confirmPassword: "[name='confirmPassword']",
            signUpButton: "[data-test='signup-submit']",
            signUpTitle: "[data-test='signup-title']"

        }

        return fields
    }

    checkSignUpPage(){

        cy.location('pathname').should('equal','/signup')
        cy.get(this.selectorsList().signUpTitle).should('be.visible')

    }

    signUpSubmit(firstName, lastName, username, password, confirmPassword){

        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).type(lastName)
        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(confirmPassword)
        cy.get(this.selectorsList().signUpButton).click()

    }

    fillAndCheckRequired(firstName, username, password, confirmPassword){

        cy.get(this.selectorsList().firstName).type(firstName)
        cy.get(this.selectorsList().lastName).click()
        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().lastNameRequired).should('be.visible')
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().confirmPassword).type(confirmPassword)
        cy.get(this.selectorsList().signUpButton).should('be.disabled')

       
    }

}

export default SignUpPage