const net = require('net');

const client = new net.Socket();

client.connect(10001, 'serverip', () => {
  console.log('Connected');
  client.write('Hello, server! Love, Client.');
});

client.on('data', data => {
  processReceivedData(data.toString());
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', err => {
  console.error('Error occurred:', err);
});

function processReceivedData(data) {
  console.log(data)
}
