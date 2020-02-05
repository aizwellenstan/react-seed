import * as express from 'express';
import * as request from 'request';
// import { RESOURCE_HOST, RESOURCE_PROTOCOL } from '../config';

import { RESOURCE_PROTOCOL } from '../config';

const router = express.Router();

// Bind /api/* to original API server
// router.use('/api', (req, res) => {
//   const boundPath = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
//   req.pipe(request(boundPath)).pipe(res);
// });

router.use('/railsapi', (req, res) => {
  const boundPath = `http://127.0.0.1:4000//${req.path}`;
  // const boundPath = `${RESOURCE_PROTOCOL}://product.nadi3docms.com/api${req.path}`;
  req.pipe(request(boundPath)).pipe(res);
});

router.use('/alarmapi', (req, res) => {
  const boundPath = `${RESOURCE_PROTOCOL}://product.nadi3docms.com/Siemens${
    req.path
  }`;
  req.pipe(request(boundPath)).pipe(res);
});

export const dataSources = router;
