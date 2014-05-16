var friendCache = {};




function login(callback) {
  FB.login(callback);
}
function loginCallback(response) {
  console.log('loginCallback',response);
  if(response.status != 'connected') {
    top.location.href = 'https://www.facebook.com/appcenter/friendsmashsample';
  }
}
function onStatusChange(response) {
  if( response.status != 'connected' ) {
    login(loginCallback);
  } else {
    getMe(function(){
      renderWelcome();
      showHome();
    });
  }
}
function onAuthResponseChange(response) {
  console.log('onAuthResponseChange', response);
}

function getMe(callback) {
  FB.api('/me', {fields: 'id,name,first_name,picture.width(120).height(120)'}, function(response){
    if( !response.error ) {
      friendCache.me = response;
      callback();
    } else {
      console.error('/me', response);
    }
  });
}