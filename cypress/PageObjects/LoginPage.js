class LoginPage
{

    usernamefield = "input[placeholder='Username']"
    passwordField = "input[placeholder='Password']"
    loginButton = "button[type='submit']"
    dashboard_text = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"


    visit_login_page()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    login(username,password)
    {
        cy.get(this.usernamefield).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginButton).click()
    }

    check_dashboard_text()
    {
        cy.get(this.dashboard_text).should("have.value" , "Dashboard")

    }
}

export default new LoginPage