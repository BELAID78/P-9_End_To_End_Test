describe('given user as guest', function() {
    describe('when the user go to home page', function() {
      it('then it should see the home page', function(browser) {
        browser
          .url('http://127.0.0.1:8080/')
          .waitForElementVisible('body')
          .assert.titleContains('Billed')
          .pause(1000)
          .end();
      });
    })
  }); 