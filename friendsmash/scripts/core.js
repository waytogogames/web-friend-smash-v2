var g_useFacebook = true;

var defaults = {
  coins: 100,
  bombs: 3
}

var celebs = [{
  name: 'Einstein',
  picture: 'images/celebs/einstein.png'
},{
  name: 'Xzibit',
  picture: 'images/celebs/xzibit.png'
},{
  name: 'Goldsmith',
  picture: 'images/celebs/goldsmith.png'
},{
  name: 'Sinatra',
  picture: 'images/celebs/sinatra.png'
},{
  name: 'George',
  picture: 'images/celebs/george.png'
},{
  name: 'Jacko',
  picture: 'images/celebs/jacko.png'
},{
  name: 'Rick',
  picture: 'images/celebs/rick.png'
},{
  name: 'Keanu',
  picture: 'images/celebs/keanu.png'
},{
  name: 'Arnie',
  picture: 'images/celebs/arnie.png'
},{
  name: 'Jean-Luc',
  picture: 'images/celebs/jeanluc.png'
}];

$( document ).ready(function() {
	FB.init({
	  appId: 1423528977912411,
	  frictionlessRequests: true,
	  status: true,
	  version: 'v2.0'
	});

	FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
	FB.Event.subscribe('auth.statusChange', onStatusChange);
  showHome();

  $( document ).on( 'click', 'button.play', function() {
    onPlay();
  });

  $( document ).on( 'click', '#gameover button.close', onGameOverClose );

  $( document ).on( 'mousedown', '#canvas', onGameCanvasMousedown );
  
  $( document ).on( 'click', '#menu button.challenge', onChallenge );
  
  $( document ).on( 'click', '.friendselector .item', onChallengeItemClick );
  $( document ).on( 'click', '#friendselector button.challenge.send', onChallengeSend );
  $( document ).on( 'click', '#friendselector button.invitable_friends', onChallengeShowInvitableFriends );
  $( document ).on( 'click', '#friendselector button.friends', onChallengeShowFriends );
  
});

