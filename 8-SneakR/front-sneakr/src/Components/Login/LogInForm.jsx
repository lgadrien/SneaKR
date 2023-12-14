import React, { useEffect } from "react";


function LogInForm () {

  function handleCallbackResponse (response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "487203499998-ldr8lbadrf3bauvb0d39d752d5n1388l.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen mt-auto">
      <div id="signInDiv"></div>
    </div>
  );
}

export default LogInForm;
