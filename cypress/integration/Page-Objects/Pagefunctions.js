export class Pafefunctions{
    navigate(url){
        cy.visit(url)
    }

    addtodo(todotext)
    {
        cy.get('.new-todo').type(todotext+'{Enter}');
    }
    validateTodoText(todoIndex,expectedText)
    {
        cy.get(`.todo-list li:nth-child(${todoIndex+1}) label`).should('have.text',
        expectedText)
    }
}