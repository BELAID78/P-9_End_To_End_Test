describe('Je suis connecté en tant qu’administrateur', function() {

    beforeEach(function(browser, done) {
        browser
        .url('http://127.0.0.1:8080/')
        .waitForElementVisible('body')
        .setValue('input[data-testid="admin-email-input"]', 'admin@test.tld')
        .setValue('input[data-testid="admin-password-input"]', 'admin')
        .click('button[data-testid="admin-login-button"]')
        .waitForElementVisible('.dashboard-content');

        done()
    })

    describe('Je clique sur un ticket de note de frais et il est en statut en attente', function() {
        it('Le formulaire de la note de frais est affiché avec l’ensemble des champs remplis sauf son statut. Il est modifiable', function() {
            browser
            .click('[data-testid="arrow-icon1"]')
            .click('div#open-billd7vVuoPrxhBZog2Nya6oCW')
            .execute(function() {
                let haveAcceptButton = document.querySelector('[data-testid="dashboard-form"] #btn-accept-bill') !== null
                return haveAcceptButton
            }, [], function(result){
                browser.verify.equal(result.value, true)
            })
            .pause(1000)
            .end();
        })
    })

    describe('je clique sur un ticket en attente, Je clique sur le champ commentaire', function() {
        it('Je peux insérer un commentaire', function(browser) {
            browser
            .click('[data-testid="arrow-icon1"]')
            .click('div#open-billd7vVuoPrxhBZog2Nya6oCW')
            .execute(function() {
                let haveAcceptButton = document.querySelector('[data-testid="dashboard-form"] #btn-accept-bill') !== null
                return haveAcceptButton
            }, [], function(result){
                browser.verify.equal(result.value, true)
            })
            .click('[data-testid="commentary2"]')
            .setValue('[data-testid="commentary2"]', 'un test commentaire')
            .execute(function() {
                return document.querySelector('[data-testid="commentary2"]').value
            }, [], function(result) {
                browser.verify.equal(result.value, 'un test commentaire')
            })
            .pause(1000)
            .end();
        })
    });
})