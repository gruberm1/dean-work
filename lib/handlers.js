var mailgun = require('mailgun-js')({apiKey:"key-c0c6233f2ba108fd0bfbb38256bd45a7", domain: "sandboxb3f4bfb283e14195b4a2c233bf386090.mailgun.org"});

var Handlers = {};

Handlers.sendHandler = function(request, reply) {
  console.log(request);
}

Handlers.contactHandler = function(request, reply) {

  if(request.method === 'get') {
    reply.view('contact');
  } else {
    var data = {
      from: request.payload.email,
      to:"matt.t.gruber@gmail.com",
      subject: "New Client",
      text: "Phone Number: " + request.payload.phone + "\n" + request.payload.message
    };

    mailgun.messages().send(data, function(error, body){
      if (error){
        console.log("ERROR!!! ",error)
      }
      reply.redirect("/sent");
    });

  }


}

module.exports = Handlers;

