// Copyright 2022, University of Colorado Boulder

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener( 'deviceready', onDeviceReady, false );

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log( 'Running cordova-' + cordova.platformId + '@' + cordova.version );
  document.getElementById( 'deviceready' ).classList.add( 'ready' );

  if ( window.speechSynthesis ) {
    alert( 'Cordova has speech synthesis! You may not need a plugin' );
  }

  const simFrame = document.getElementById( 'sim-frame' );
  const simFrameWindow = simFrame.contentWindow;
  if ( simFrameWindow.speechSynthesis || simFrameWindow.SpeechSynthesisUtterance ) {
    alert( 'Your sim frame has SpeechSynthesis?' );
  }

  simFrame.src = 'quadrilateral_en_phet.html?postMessageOnLoad';

  // Try to set the speechSynthesis and SpeechSynthesisUtterance objects/classes in the
  // simulation window because they will not be available in an android Webview.
  // TODO: For some reason these are gone by the simulation `load` event. Probably need to set these in the sim.
  simFrameWindow.speechSynthesis = {};
  simFrameWindow.SpeechSynthesisUtterance = {};

  window.addEventListener( 'message', event => {
    const data = JSON.parse( event.data );
    console.log( 'message received', data.type );

    if ( data.type === 'load' ) {
      TTS.speak( 'Simulation loaded' );
    }

    // TODO: Send this event from the simulation with postMessage.
    if ( data.type === 'speech-synthesis' ) {
      console.log( data.stringToSpeak );
      TTS.speak( data.stringToSpeak );
    }
  } );
}
