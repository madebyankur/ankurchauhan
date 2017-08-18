(function() {
  var lineMaker = new LineMaker({
      position: 'fixed',
      lines: [
        {top: 0, left: '20%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '40%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '60%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '80%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }}
      ]
  });

  setTimeout(function() {
    lineMaker.animateLinesIn();
  }, 500);
})();
