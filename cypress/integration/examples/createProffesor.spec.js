const faker=require('faker')
const locators=require('../../fixtures/locators.json')
import authLogin from '../../PageObject/loginPage'
describe('visit url',()=>{
    beforeEach(()=>{
        cy.visit('/login')
        cy.get(locators.navigation.addProfessorbtn).click()
        authLogin.login('adriadric@yahoo.com','as332101')
    })
    
    it('create new professor',()=>{
        cy.get(locators.addProfesor.professorName).type('pera')
        cy.get(locators.addProfesor.professorLastName).type('peric')
        cy.get(locators.addProfesor.submit).click()
    })
})