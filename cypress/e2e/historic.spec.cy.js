import SignInPage from "../pages/signInPage"
import MainPage from "../pages/mainPage"
import HistoricsPage from "../pages/historicsPage"
import user from "../fixtures/user.json"

const signInPage = new SignInPage ()
const mainPage = new MainPage ()
const historicsPage = new HistoricsPage ()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {

    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.signInSucess.username, user.signInSucess.password)

    mainPage.checkMainPage()
    mainPage.openUsersTransactionHistory()

    historicsPage.transactionsList()

  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    
    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.userWithNoTransactions.username, user.userWithNoTransactions.password)

    mainPage.checkMainPage()
    mainPage.openUsersTransactionHistory()

    historicsPage.noTransactionsList()

  });
});