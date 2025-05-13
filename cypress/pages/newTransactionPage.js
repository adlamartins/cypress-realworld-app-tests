class NewTransactionPage {
    
    selectorsList(){

        const fields = {

            mainContent: "[data-test='main']",
            contact: "[data-test='user-list-item-uBmeaz5pX']",
            amount: "[data-test='transaction-create-amount-input']",
            note: "[data-test='transaction-create-description-input']",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            sucessAlert: "[data-test='alert-bar-success']"

        }

        return fields
    }

    checkNewTransactionPage(){

        cy.location('pathname').should('equal','/transaction/new')
        cy.get(this.selectorsList().mainContent).should('be.visible')

    }


    sucessPayment(amount, note){

        cy.get(this.selectorsList().contact).click()
        cy.get(this.selectorsList().amount).type(amount)
        cy.get(this.selectorsList().note).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().sucessAlert).should('be.visible')      

    }
    
    invalidPayment(amount, note){

        cy.get(this.selectorsList().contact).click()
        cy.get(this.selectorsList().amount).type(amount)
        cy.get(this.selectorsList().note).type(note)
        cy.get(this.selectorsList().payButton).click()
        // Deveria exibir mensagem de erro. BUG REPORT
        
    }
}

export default NewTransactionPage