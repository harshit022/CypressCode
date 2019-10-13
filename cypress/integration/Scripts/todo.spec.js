///<reference types="cypress" />
import {Pafefunctions} from "../Page-Objects/Pagefunctions"
describe("Test TodoMvc React",()=>{
    const todo = new Pafefunctions();
    before("Open Url",()=>{
 
       todo.navigate("http://todomvc.com/examples/react/#/");
    })
    it("Todo Item should be added in dropdown",()=>{     
        todo.addtodo('IPhones{Enter}');
        todo.validateTodoText(0,'IPhones');
    })
    
    it("should have lable Clear completed when clicking checkox for item",()=>{
        cy.get('.toggle').click();
        cy.get('.clear-completed').should('to.be.visible');
    })
    it("should not visible item lable when clicking Clear completed when clicking checkox for item",()=>{
        cy.get('.clear-completed').click();
        cy.get('.clear-completed').should('not.to.be.visible');
    })

    it("Adding two items and verify length of dropdown",()=>{
        cy.get('.new-todo').type('IPhones{Enter}');
        cy.get('.new-todo').type('Android{Enter}');
        cy.get('.todo-list > li').should('have.length','2')
    })
    })