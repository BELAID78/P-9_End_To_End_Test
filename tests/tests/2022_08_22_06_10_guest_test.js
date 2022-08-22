describe('Je suis un visiteur non connecté', function() {
  describe('je click directement sur le button se connecter', function() {
    it('Je reste sur la page Login et je suis invité à remplir le champ manquant', function(browser) {
      browser
      .url('http://127.0.0.1:8080/')
      .waitForElementVisible('body')
      .click('button[data-testid="admin-login-button"]')
      .execute(function() {
        return document.querySelector('[data-testid="form-admin"]').checkValidity()
      }, [], function(result){
        browser.verify.equal(result.value, false).
        assert.titleContains('Billed')
      })
      .pause(1000)
      .end();
    })
  })

  describe('Je remplis le champ e-mail du login administrateur au mauvais format et je clique sur le bouton se connecter', function() {
    it('Je reste sur la page Login et je suis invité à remplir le champ e-mail au bon format', function(browser) {
      browser
      .url('http://127.0.0.1:8080/')
      .waitForElementVisible('body')
      .setValue('input[data-testid="admin-email-input"]', 'admin.email.com')
      .click('button[data-testid="admin-login-button"]')
      .execute(function() {
        return document.querySelector('[data-testid="form-admin"]').checkValidity()
      }, [], function(result) {
        browser.verify.equal(result.value, false).
        assert.titleContains('Billed')
      })
      .pause(1000)
      .end();
    })
  })
});