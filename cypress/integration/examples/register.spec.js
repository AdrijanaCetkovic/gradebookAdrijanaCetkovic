const locators=require('../../fixtures/locators.json')
const faker = require('faker');
const data=require('../../fixtures/data.json')

let userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}
describe('register',()=>{
    it('visit url',()=>{
        cy.visit('/login')
        cy.get(locators.navigation.loginBtn).should('exist')
        cy.get(locators.navigation.registerBtn).should('exist')
        cy.get(locators.navigation.gradebooks).should('exist')
        cy.get(locators.navigation.allProfesors).should('exist')
        cy.get(locators.navigation.addGradebook).should('exist')
        cy.get(locators.navigation.addProfessor).should('exist')
        cy.get(locators.navigation.myGradebook).should('exist')
        cy.url('include',"/login")
        cy.get(locators.navigation.naslov).should('have.text','Please Login.')
    })
    it('register vith valid data',()=>{
        cy.get(locators.navigation.registerBtn).click()
        cy.get(locators.register.firstName).type(userData.randomName)
        cy.get(locators.register.lastName).type(userData.randomLastName)
        cy.get(locators.register.email).type(userData.randomEmail)
        cy.get(locators.register.password).type(data.user.password)
        cy.get(locators.register.passwordConfirm).type(data.user.password)
        cy.get(locators.register.Check).click({force: true})
        cy.get(locators.register.register).click()
    })
})