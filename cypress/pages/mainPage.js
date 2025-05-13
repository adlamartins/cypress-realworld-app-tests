class MainPage {
    
    selectorsList(){

        const fields = {

            mainContainer: "[data-test='main']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            transactionHistory: "[data-test='nav-personal-tab']"
        }

        return fields
    }


    checkMainPage(){

        cy.location('pathname').should('equal','/')
        cy.get(this.selectorsList().mainContainer).should('be.visible')
        
    }

    openNewTransaction(){

        cy.get(this.selectorsList().newTransactionButton).click()
    }

    openUsersTransactionHistory(){

        cy.get(this.selectorsList().transactionHistory).click()
        cy.location('pathname').should('equal','/personal')
    }

}

export default MainPage