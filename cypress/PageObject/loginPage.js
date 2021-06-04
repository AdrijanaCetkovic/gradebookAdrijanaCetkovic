class AuthLogin {
    get email() {
        return cy.get("#email")
    }

    get password() {
        return cy.get("#userPassword")
    }

    get submitBtn() {
        return cy.get(".btn")
    }

  login(email,password){
      this.email(email)
      this.password(password)
      this.submitBtn.click()
  }
}

export const authLogin = new AuthLogin()