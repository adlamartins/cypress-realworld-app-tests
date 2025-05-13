import SignInPage from "../pages/signInPage"
import MainPage from "../pages/mainPage"
import NewTransactionPage from "../pages/newTransactionPage"
import user from "../fixtures/user.json"

const signInPage = new SignInPage ()
const mainPage = new MainPage ()
const newTransactionPage = new NewTransactionPage ()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    
    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.signInSucess.username, user.signInSucess.password)

    mainPage.checkMainPage()
    mainPage.openNewTransaction()

    newTransactionPage.checkNewTransactionPage()
    newTransactionPage.sucessPayment("10", "restaurant")
    

  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it.only('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {

    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.signInSucess.username, user.signInSucess.password)

    mainPage.openNewTransaction()

    newTransactionPage.checkNewTransactionPage()
    newTransactionPage.invalidPayment("10000000", "shopping")

  });
});