// NØV3X AUTH SYSTEM

let novexUser = null;
let novexAuthReady = false;

auth.onAuthStateChanged(function(user) {

  novexAuthReady = true;

  if (!user) {

    novexUser = null;

    // Only redirect if this is NOT the login page
    if (
      !window.location.pathname.endsWith("login.html")
    ) {
      window.location.replace("login.html");
    }

    return;
  }

  novexUser = user;

  console.log(
    "NØV3X SESSION ACTIVE:",
    user.email
  );

});
