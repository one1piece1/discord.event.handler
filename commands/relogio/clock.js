const client = require('../../index.js')
const moment = require('moment');
const tz = require('moment-timezone');
const chalk = require('chalk');


const { timezone, formatodahora, formatodadata, canaldehoras, canaldadata, intrevalohoras, intrevalodata} = require('./clockconfig.js');

client.once('ready', () => {
// Hora

  const horasAgora = moment().tz(timezone).format(formatodahora);
  const canaldeHoras = client.channels.cache.get(canaldehoras);

  canaldeHoras.edit({ name: `🕒 ${horasAgora}` }, 'Prolyn3 BOT Atualizou a Hora')
    .catch(console.error);

  setInterval(() => {
    const atualizahoraagora = moment().tz(timezone).format(formatodahora);
    canaldeHoras.edit({ name: `🕒 ${atualizahoraagora}` }, 'Prolyn3 BOT Atualizou a Hora')
      .catch(console.error);
  }, intrevalohoras);

// Data
  const dataAgora = moment().tz(timezone).format(formatodadata);
  const canaldaData = client.channels.cache.get(canaldadata);

  canaldaData.edit({ name: `📅 ${dataAgora}` }, 'Prolyn3 BOT Atualizou a Data')
    .catch(console.error);

  setInterval(() => {
    const atualizadataAgora = moment().tz(timezone).format(formatodadata);
    canaldaData.edit({ name: `📅 ${atualizadataAgora}` }, 'Prolyn3 BOT Atualizou a Data')
      .catch(console.error);
  }, intrevalodata);

});
  