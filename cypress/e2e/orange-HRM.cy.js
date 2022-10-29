describe('testing OrangeHRM site', () => {
  it('visit site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123'+'{enter}');
    cy.get('.orangehrm-header-container > button.oxd-button').click();
    cy.get('[name="firstName"]').type('Cristian-Andrei');
  })

  //THIS IS THE MASTER BRANCH
  //CARE E TREABA CU REBASE
  it('test new branch', () => {
    //THIS IS BRANCH-3
    //THIS IS BRANCH-2
<<<<<<< HEAD
    //SA VEDEM CUM MANIPULAM COMMIT HISTORY
=======
    //CREATE NEW PULL REQUEST
>>>>>>> 5d947bc67d190342d81db5fd2cca83245a85e03e
  })
})