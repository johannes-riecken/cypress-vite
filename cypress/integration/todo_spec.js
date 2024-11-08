describe('To-Do App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new task', () => {
    cy.get('input[placeholder="Add a new task"]').type('New Task');
    cy.get('button[type="submit"]').click();
    cy.get('ul').first().should('contain', 'New Task');
  });

  it('should remove a task', () => {
    cy.get('input[placeholder="Add a new task"]').type('Task to be removed');
    cy.get('button[type="submit"]').click();
    cy.get('ul').first().should('contain', 'Task to be removed');
    cy.get('button').contains('Remove').click();
    cy.get('ul').first().should('not.contain', 'Task to be removed');
  });

  it('should filter completed tasks', () => {
    cy.get('input[placeholder="Add a new task"]').type('Task 1');
    cy.get('button[type="submit"]').click();
    cy.get('input[placeholder="Add a new task"]').type('Task 2');
    cy.get('button[type="submit"]').click();
    cy.get('ul').first().should('contain', 'Task 1');
    cy.get('ul').first().should('contain', 'Task 2');
    cy.get('input[type="checkbox"]').first().check();
    cy.get('h2').contains('Completed Tasks').next('ul').should('contain', 'Task 1');
    cy.get('h2').contains('Completed Tasks').next('ul').should('not.contain', 'Task 2');
  });

  it('should edit a task', () => {
    cy.get('input[placeholder="Add a new task"]').type('Task to be edited');
    cy.get('button[type="submit"]').click();
    cy.get('ul').first().should('contain', 'Task to be edited');
    cy.get('button').contains('Edit').click();
    cy.get('input[placeholder="Edit task"]').clear().type('Edited Task');
    cy.get('button').contains('Save').click();
    cy.get('ul').first().should('contain', 'Edited Task');
    cy.get('ul').first().should('not.contain', 'Task to be edited');
  });
});
