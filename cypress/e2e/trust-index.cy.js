describe('Trustindex - Automation', () => {
  it('Navigating and triggering the update', () => {
    cy.fixture('secrets').then((credentials) => {
    cy.fixture('config').then((config) => {
      cy.visit(credentials.url + '/wp-admin')
      cy.wait(1500)
      cy.get('input[id="user_login"]').click()
        .type(credentials.username)
      cy.get('input[id="user_pass"]').click()
        .type(credentials.password)
      cy.get('input[id=wp-submit]').click()
      cy.visit(credentials.url + '/wp-admin/admin.php?page=wp-reviews-plugin-for-google%2Fsettings.php&tab=my-reviews')
      cy.get('a').contains(config.label_fr).click({force:true})
      cy.wait(15000)
    })
    })
  })
})