import SignInPage from "../pages/signInPage"
import SignUpPage from "../pages/signUpPage"

const signInPage = new SignInPage ()
const signUpPage = new SignUpPage ()

describe('Registro de Usuário - Sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    signInPage.accessSignInPage()
    signInPage.goToSignUp()

    signUpPage.checkSignUpPage()
    signUpPage.signUpSubmit("Maria", "Martins", "testemaria", "#teste", "#teste")
    
    signInPage.checkSignInPage()

  })

})

describe('Registro de Usuário - Falha', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

    signInPage.accessSignInPage()
    signInPage.goToSignUp()

    signUpPage.checkSignUpPage()

    signUpPage.fillAndCheckRequired("Maria", "testemaria1", "#teste", "#teste")     

  })


  it('Deve exibir mensagem de erro ao se a senha conter menos que 4 caracteres', () =>{

    signInPage.accessSignInPage()
    signInPage.goToSignUp()

    signUpPage.checkSignUpPage()

    signUpPage.checkPassword("Maria", "Madalena", "testemaria2", "123")

  })

})