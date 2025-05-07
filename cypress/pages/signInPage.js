class SignInPage {
    
    selectorsList(){

        const selectors = {

            username: "[data-test='signin-username']",
            password: "[data-test='signin-password']",
            signInButton: "[data-test='signin-submit']",
            signUpButton: "[data-test='signup']",
            accessInvalid: "[data-test='signin-error']",
            signInForm: ".SignInForm-paper",
            mainContainer: "[data-test='main']"
                       
        }

        return selectors
    }

    accessSignInPage(){

        cy.visit('/signin')

    }

    signInSubmit(username, password){

        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().signInButton).click()

    }

    goToSignUp(){

        cy.get(this.selectorsList().signUpButton).click()        
    }

    checkAccessInvalid(){

        cy.get(this.selectorsList().accessInvalid)
    }

    checkSignInPage(){

        cy.location('pathname').should('equal','/signin')
        cy.get(this.selectorsList().signInForm).should('be.visible')
    }

    checkLoginSuccess(){

        cy.location('pathname').should('equal','/')
        cy.get(this.selectorsList().mainContainer).should('be.visible')
        
    }

}

export default SignInPage