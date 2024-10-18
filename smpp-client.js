const smpp = require('smpp');

// Cria a sessão SMPP
const session = new smpp.Session({ host: '127.0.0.1', port: 2775, auto_enquire_link_period: 10000 });

// Lida com a conexão da sessão
session.on('connect', () => {
  console.log('Connected');
  session.bind_transceiver({
    system_id: '669fe9cfe291c',
    password: '6f69c2e9',
  }, (pdu) => {
    if (pdu.command_status == 0) {
      // Bind bem-sucedido
      console.log('Successfully bound');
      sendSMS();
      // sendSubmitSMResp();
    } else {
      console.log('Bind failed');
    }
  });
});

// Função para enviar SMS
function sendSMS() {
  session.submit_sm({
    source_addr: 'short',
    destination_addr: '5521976718441',
    short_message: 'Hello, this is a test message'
  }, (pdu) => {
    if (pdu.command_status == 0) {
      console.log('Message sent successfully, message id:', pdu.message_id);
    } else {
      console.log('Message failed');
    }
  });
}

function sendSubmitSMResp() {
  session.submit_sm_resp({
    message_id: '12345'
  }, (pdu) => {
    if (pdu.command_status == 0) {
      console.log('Submit SM response sent');
    } else {
      console.log('Submit SM response failed');
    }
  });
}

// Lida com a resposta do enquire_link
session.on('enquire_link', (pdu) => {
  session.send(pdu.response());
});

// Lida com erros na sessão
session.on('error', (err) => {
  console.log('SMPP Error:', err);
});

// Lida com a desconexão da sessão
session.on('close', () => {
  console.log('SMPP Session closed');
});