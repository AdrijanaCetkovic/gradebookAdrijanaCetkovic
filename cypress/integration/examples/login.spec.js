const locators=require('../../fixtures/locators.json')
const data =require('../../fixtures/data.json')
describe('visit url',()=>{
    beforeEach(()=>{
        cy.visit('/login')
    })
    it('login btn',()=>{
        cy.get(locators.navigation.loginBtn).click()
    })
    it('login with valid data',()=>{
        cy.get(locators.login.email).type(data.user.email)
        cy.get(locators.login.password).type(data.user.password)
        cy.get(locators.login.loginL).click()
    })
})