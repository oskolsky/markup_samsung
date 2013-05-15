$(function() {

  forms.init();
  
  // Modernizr
  // http://modernizr.com/
  // ----------------------------------------------------------------------------------------------------
  Modernizr.load([

    // CSS Transitions
    // http://www.w3.org/TR/css3-transitions/
    // ----------------------------------------------------------------------------------------------------
    {
      test: Modernizr.csstransitions,
      nope: "/js/polyfill/css-transitions.js"
    },

    // enquire.js
    // http://wickynilliams.github.com/enquire.js/
    // ----------------------------------------------------------------------------------------------------
    {
      test: window.matchMedia,
      yep: "/js/vendor/enquire.min.js",
      callback: function(url, result, key) {
        if (result == true) {
          var $body = $("body");
          function handlerFactory(className) {
            return {
              match: function() {
                $body.addClass(className);
              },
              unmatch: function() {
                $body.removeClass(className);
              }
            };
          }
          enquire
            .register("screen and (max-width: 640px)", handlerFactory("media__phone"))
            .register("screen and (min-width: 641px) and (max-width: 940px)", handlerFactory("media__tablet"))
            .listen();
        }
      }
    },

    // jquery.placeholder.js
    // https://github.com/serby/jquery.placeholder.js
    // ----------------------------------------------------------------------------------------------------
    {
      test: Modernizr.input.placeholder,
      nope: "/js/polyfill/vendor/jquery.placeholder.js",
      callback: function(url, result, key) {
        if (result === false) {
          $("input, textarea").placeholder();
        }
      }
    }

  ]);

});