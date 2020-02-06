import * as express from 'express';
import * as request from 'request';
// // import { RESOURCE_HOST, RESOURCE_PROTOCOL } from '../config';

// import { RESOURCE_PROTOCOL } from '../config';

const router = express.Router();

// Bind /api/* to original API server
// router.use('/api', (req, res) => {
//   const boundPath = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
//   req.pipe(request(boundPath)).pipe(res);
// });

router.use('/assetspage', (req, res) => {
  // const boundPath = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
  const boundPath = `https://product.nadi3docms.com/assetmanage`;
  req.pipe(request(boundPath)).pipe(res);
});

export const dataSources = router;
