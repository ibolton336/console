const express = require('express');
const path = require('path');
const app = express();
const port = 9001;
const axios = require('axios');

const setupWebSocket = require('./setupWebSocket');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log('path', __dirname);

app.use(express.static(path.join(__dirname, '../dist'))); //  "public" off of current is root

// setupWebSocket(app, axios);

// const kc = new k8s.KubeConfig();
// kc.loadFromDefault();
// const opts = {};
// kc.applyToRequest(opts);
// const eventsURL = `${kc.getCurrentCluster().server}/api/v1/namespaces/openshift-migration/events`;
// debugger;
// axios
//   .get(eventsURL, {
//     headers: { Authorization: `Bearer sha256~qguusApWYRCzj6z9itc9znhkQGSdEDiGCvTwfSk4E6k` },
//   })
//   .then(
//     (response) => {
//       if (response.data) {
//         console.log(`statusCode: ${response.statusCode}`);
//       }
//       console.log(`body: ${response.data}`);
//     },
//     (error) => {
//       if (error) {
//         console.log(`error: ${error}`);
//       }
//     },
//   );

app.listen(port, () => {
  console.log(`Dynamic demo plugin app listening at http://localhost:${port}`);
});
