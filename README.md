# smpp

<header>
  <h1>
    Estudos do projeto Kamailio
  </h1>
</header>
<div style='display:flex; gap: .5em; margin-bottom: .3em'>
  <img src='https://img.shields.io/badge/SMPP-red' />
  <img src='https://img.shields.io/badge/NPM-yellow' />
</div>

| 🪧 Informações        | 🚀                |
| --------------------- | ----------------- |
| ✨ Nome               | Estudo sobre SMPP |
| 🏷️ Tecnologias usadas | Node, npm, SMPP   |

---

## 📚 Sobre o SMPP

O SMPP (Short Message Peer-to-Peer) é um protocolo de comunicação
usado para enviar e receber mensagens curtas (SMS) entre SMSCs (Short Message Service Centers)
e ESMEs (External Short Messaging Entities).
O SMPP é um protocolo de comunicação de mensagens de texto que permite a troca de mensagens entre SMSCs e ESMEs.

## Como o protocolo SMPP funciona?
O SMPP é um protocolo de comunicação de mensagens de texto que permite a troca de mensagens entre SMSCs e ESMEs.

### O que é SMSc e ESME?
Para entender o protocolo SMPP, é importante entender o que são SMSCs e ESMEs.
SMS Center (SMSC): O SMSC é um componente de rede que armazena, encaminha e entrega mensagens SMS.
Entidade de Mensagens Curtas Externa (ESME): A ESME é um aplicativo ou sistema que envia ou recebe mensagens SMS.
Em resumo, o SMSC é uma infraestrutura de rede que gerencia mensagens SMS, enquanto a ESME é um aplicativo ou sistema que envia ou recebe mensagens SMS.

Exemplo:
  - O nosso servidor SMPP é um SMSC;
  - Enviamos a mensagem para um número atráves de uma aplicação (ESMC);
  - Está mensagem é passada para o SMSC;
  - SMSC redireciona essa mensagem para o número;

![image](https://github.com/user-attachments/assets/b838a787-829d-47f9-8ff1-a710c7436e40)

O SMPP assim como HTTP tem uma tamanho fixo de bytes para cada requisição SMPP.

__[Exemplo de corpo de requisição usando submit_sm / submit_sm_resp](https://smpp.org/#smppexample)__


### Comandos SMPP
Há uma lista de comandos smpp que deixarei abaixo uma parte

| Command ID                   | Value              | Purpose                                                                                       |
|------------------------------|--------------------|-----------------------------------------------------------------------------------------------|
| bind_receiver                | 0x00000001         | Establish a receiver bind.                                                                    |
| bind_receiver_resp           | 0x80000001         |                                                                                               |
| bind_transmitter             | 0x00000002         | Establish a transmitter bind.                                                                  |
| bind_transmitter_resp        | 0x80000002         |                                                                                               |
| query_sm                     | 0x00000003         | Query status of previously submitted message.                                                |
| query_sm_resp                | 0x80000003         |                                                                                               |
| submit_sm                    | 0x00000004         | Submit message to the Message Center for onward delivery to mobile / short message entity (SME). |
| submit_sm_resp               | 0x80000004         |                                                                                               |
| deliver_sm                   | 0x00000005         | Send message to ESME from MC (typically delivery receipt or mobile originated SMS).          |
| deliver_sm_resp              | 0x80000005         |                                                                                               |
| unbind                       | 0x00000006         | Unbind from MC and close SMPP session.                                                       |
| unbind_resp                  | 0x80000006         |                                                                                               |
| replace_sm                   | 0x00000007         | Replace a previously submitted message that is pending delivery.                             |
| replace_sm_resp              | 0x80000007         |                                                                                               |
| cancel_sm                    | 0x00000008         | Cancel delivery of previously submitted message(s).                                          |
| cancel_sm_resp               | 0x80000008         |                                                                                               |
| bind_transceiver             | 0x00000009         | Establish a transceiver bind.                                                                 |
| bind_transceiver_resp        | 0x80000009         |                                                                                               |
| outbind                      | 0x0000000B         | Request ESME to bind (sent by MC).                                                          |
| outbind_resp                 | 0x8000000B         |                                                                                               |
| enquire_link                 | 0x00000015         | Initiate a check to confirm ESME/MC is still reachable.                                      |
| enquire_link_resp            | 0x80000015         |                                                                                               |
| submit_multi                 | 0x00000021         | Submit message to the Message Center for onward delivery to multiple mobiles / short message entities (SME). |
| submit_multi_resp            | 0x80000021         |                                                                                               |
| alert_notification           | 0x00000102         | Indicate to ESME that mobile subscriber has become available.                                |
| data_sm                      | 0x00000103         | Submit packet to MC for onward delivery to SME or from MC to ESME.                          |
| data_sm_resp                 | 0x80000103         |                                                                                               |
| broadcast_sm                 | 0x00000111         | Submit message to the Message Center for onward delivery to mobiles in a specified geographical area or set of areas. |
| broadcast_sm_resp            | 0x80000111         |                                                                                               |
| query_broadcast_sm           | 0x00000112         | Query status of previously submitted broadcast message.                                      |
| query_broadcast_sm_resp      | 0x80000112         |                                                                                               |
| cancel_broadcast_sm          | 0x00000113         | Cancel delivery of previously submitted broadcast message.                                   |
| cancel_broadcast_sm_resp     | 0x80000113         |                                                                                               |
| generic_nack                 | 0x80000000         | Acknowledge unrecognized or corrupt PDU.                                                    |
| Reserved                     | 0x00010200-0x000102FF | Reserved for MC vendors to define                                                              |
|                              | 0x80010200-0x800102FF | Reserved for MC vendors to define                                                              |
