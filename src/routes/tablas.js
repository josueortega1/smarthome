const {Router}=require('express');
const router = Router();

const {getClima} = require('../controllers/tablasControl');

router.route('/clima')
    .get(getClima)

module.exports = router
