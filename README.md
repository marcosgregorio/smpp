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
[Exemplo de corpo de requisição usando submit_sm / submit_sm_resp](https://smpp.org/#smppexample)
