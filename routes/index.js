const { Router } = require('express');

const router = Router();

router.use(require('./reviews.route'));
router.use(require('./services.route'));
router.use(require('./users.route'));
router.use(require('./turns.route'))
router.use(require('./callReq.route'))
module.exports = router