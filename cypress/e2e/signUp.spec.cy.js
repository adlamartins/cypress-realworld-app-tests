import SignInPage from "../pages/signInPage"
import SignUpPage from "../pages/signUpPage"

const signInPage = new SignInPage ()
const signUpPage = new SignUpPage ()

describe('Registro de Usuário - Sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    signInPage.accessSignInPage()
    signInPage.goToSignUp()

    signUpPage.checkSignUnPage()
    signUpPage.signUpSubmit("Maria", "Martins", "testemaria", "#teste", "#teste")
    
    signInPage.checkSignInPage()

  })

})

describe('Registro de Usuário - Falha', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

    signInPage.accessSignInPage()
    signInPage.goToSignUp()

    signUpPage.checkSignUpPage()

    signUpPage.fillAndCheckRequired("Maria", "testemaria1", "#teste", "#teste")     

  })

})