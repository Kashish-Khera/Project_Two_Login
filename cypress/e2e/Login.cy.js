import LoginPage from "../PageObjects/LoginPage";

describe('Login Test suite', () => {
  it('1. Login with correct credentials', () => {

    cy.clearCookies();
    cy.clearLocalStorage();
   
    LoginPage.visit_login_page()
    cy.fixture("login_creds").then((creds) =>{

        LoginPage.login(creds.username , creds.password)
    })
    LoginPage.check_dashboard_text()

  });
});