class HistoricsPage {
    
    selectorsList(){

        const fields = {

            noTransactions: "[data-test='empty-list-header']",
            personalTransactions: ".MuiListSubheader-root"

        }

        return fields
    }


    checkMainPage(){

       
        
    }

    openNewTransaction(){

       
    }

    transactionsList(){

        cy.get(this.selectorsList().personalTransactions).should('be.visible')
     }

    noTransactionsList(){

        cy.get(this.selectorsList().noTransactions).should('be.visible')
    }

}

export default HistoricsPage