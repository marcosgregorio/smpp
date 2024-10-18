const smpp = require('smpp');

const server = smpp.createServer((session) => {
  console.log("New session established");

  session.on('bind_transceiver', (pdu) => {
    if (pdu.system_id === '669fe9cfe291c' && pdu.password === '6f69c2e9') {
      console.log("entrando no bind")
      session.send(pdu.response());
    } else {
      session.send(pdu.response({ command_status: smpp.ESME_RBINDFAIL }));
    }
  })

  session.on('submit_sm', (pdu) => {
    console.log('SMS received', pdu);
    session.send(pdu.response());
  })

  session.on('submit_sm_resp', (pdu) => {
    console.log('SMS response received');
  })

  session.on('enquire_link', (pdu) => {
    console.log("Enquire link received");
    // session.send(pdu.response());
  })

  session.on('deliver_sm', (pdu) => {
    console.log("Deliver SM received", pdu);
    session.send(pdu.response());
  })

  session.on('close', () => {
    console.log("Session closed");
  })
})

server.listen(2775, () => {
  console.log("Server started on port 2775");
})