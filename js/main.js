(function() {
  var lineMaker = new LineMaker({
      // position: if fixed the lines container will have fixed position.
      position: 'fixed',
      // The lines settings:
      //
      // top, left, width, height: numerical for pixels or string for % and viewport units. Examples: 2 || '20%' || '50vw'.
      // color: the (bg)color of the line.
      // hidden: defines if the line is rendered initially or hidden by default.
      // animation: animation properties for the line
      // 		duration: animation speed.
      // 		easing: animation easing (animejs easing. To see all possible values console animejs.easings).
      // 		delay: animation delay.
      // 		direction: line animation direction. Possible values: TopBottom || BottomTop || LeftRight || RightLeft || CenterV || CenterH.
      lines: [
        {top: 0, left: '20%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '40%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '60%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
        {top: 0, left: '80%', width: 1, height: '100vh', color: '#efe2e1', hidden: true, animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }}
      ]
  });

  setTimeout(function() {
    disableButtons();
    lineMaker.animateLinesIn(enableButtons);
  }, 500);

  /*
  methods:

  // Shows all lines with an animation.
  // callback is optional.
  - lineMaker.animateLinesIn([callback]);

  // Hides all lines with an animation.
  // callback is optional.
  - lineMaker.animateLinesOut([callback]);

  // Shows one line with an animation.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  // animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
  - lineMaker.animateLineIn(lineIndex [,animationSettings]);

  // Hides one line with an animation.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  // animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
  - lineMaker.animateLineOut(lineIndex [,animationSettings]);

  // Shows all lines.
  - lineMaker.showLines();

  // hides all lines.
  - lineMaker.hideLines();

  // Shows one line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.showLine(lineIdx);

  // Hides one line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.hideLine(lineIdx);

  // Creates a line.
  // settings is optional: same settings passed in LineMaker.options.lines for one line.
  - lineMaker.createLine([settings]);

  // Removes all lines.
  - lineMaker.removeLines();

  // Removes a line.
  // lineIndex: index/position of the line in the LineMaker.options.lines array.
  - lineMaker.removeLine(lineIdx);

  */

  var ctrls = [].slice.call(document.querySelectorAll('.actions > button'));
  ctrls.forEach(function(ctrl) {
    ctrl.setAttribute('disabled', true);
  });

  function enableButtons() {
    ctrls.forEach(function(ctrl) {
      ctrl.removeAttribute('disabled');
    });
  }

  function disableButtons() {
    ctrls.forEach(function(ctrl) {
      ctrl.setAttribute('disabled', true);
    });
  }

  document.querySelector('#animateOut').addEventListener('click', function() {
    disableButtons();
    lineMaker.animateLinesOut(enableButtons);
  });

  document.querySelector('#animateIn').addEventListener('click', function() {
    disableButtons();
    lineMaker.animateLinesIn(enableButtons);
  });

  document.querySelector('#hideAll').addEventListener('click', function() {
    lineMaker.hideLines();
  });

  document.querySelector('#showAll').addEventListener('click', function() {
    lineMaker.showLines();
  });

  /**
   * from: http://stackoverflow.com/a/1527820
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var randomColors = ['#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B','#000'],
    randomEasings = ['easeOutExpo','easeOutCirc','easeOutSine','easeOutQuad','easeOutQuart','easeOutQuint','easeInOutExpo','easeInOutCirc','easeInOutSine','easeInOutQuad','easeInOutQuart','easeInOutQuint'],
    totalColors = randomColors.length,
    totalEasings = randomEasings.length;

  document.querySelector('#create').addEventListener('click', function() {
    var rand = getRandomInt(0, 1);

    lineMaker.createLine({
      top: rand ? 0 : getRandomInt(1, 99) + '%',
      left: rand ? getRandomInt(1, 99) + '%' : 0,
      width: rand ? getRandomInt(1,15) : '100vw',
      height: rand ? '100vh' : getRandomInt(1,15),
      color: randomColors[getRandomInt(0, totalColors-1)],
      animation: {
        duration: getRandomInt(500,1800),
        easing: randomEasings[getRandomInt(0, totalEasings-1)],
        delay: getRandomInt(0,100),
        direction: rand ? 'TopBottom' : 'LeftRight'
      }
    });
  });

  document.querySelector('#createAnimate').addEventListener('click', function() {
    disableButtons();

    var rand = getRandomInt(0, 1);

    lineMaker.createLine({
      top: rand ? 0 : getRandomInt(1, 99) + '%',
      left: rand ? getRandomInt(1, 99) + '%' : 0,
      width: rand ? getRandomInt(1,15) : '100vw',
      height: rand ? '100vh' : getRandomInt(1,15),
      color: randomColors[getRandomInt(0, totalColors-1)],
      hidden: true,
      animation: {
        duration: getRandomInt(500,1800),
        easing: randomEasings[getRandomInt(0, totalEasings-1)],
        delay: getRandomInt(0,100),
        direction: rand ? 'TopBottom' : 'LeftRight'
      }
    });

    lineMaker.animateLineIn(lineMaker.getTotalLines()-1, { complete: enableButtons });
  });

  document.querySelector('#removeAll').addEventListener('click', function() {
    lineMaker.removeLines();
  });

})();
