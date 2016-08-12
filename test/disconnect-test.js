describe('SDK disconnect', function () {
  it('should remove oauth_token and make isConnected false', function () {
    SC.initialize({
      oauth_token: 'oauth_token'
    });

    assert.ok(SC.isConnected());
    
    SC.disconnect();
    
    assert.ok(!SC.isConnected());
  });
});
