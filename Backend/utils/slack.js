const axios = require('axios');

exports.sendToSlack = async (message) => {
  return await axios.post(process.env.SLACK_WEBHOOK_URL, { text: message });
};
