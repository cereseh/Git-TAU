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
<<<<<<<<< Temporary merge branch 1
    //CREATE NEW PULL REQUEST
=========
    //SA VEDEM CUM MANIPULAM COMMIT HISTORY
>>>>>>>>> Temporary merge branch 2
  })
})