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
    lineMaker.animateLinesIn();
  }, 500);
})();
