import SignInPage from "../pages/signInPage"
import MainPage from "../pages/mainPage"
import user from "../fixtures/user.json"

const signInPage = new SignInPage ()
const mainPage = new MainPage ()

describe('Login - Sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.signInSucess.username, user.signInSucess.password)
    mainPage.checkMainPage()

  })

})

describe('Login - Falha', () => {
  it('Deve exibir mensagem de erro ao fazer login com credenciais inválidas', () => {

    signInPage.accessSignInPage()
    signInPage.signInSubmit(user.signInFail.username,user.signInFail.password)

  })

})