const router = require('express').Router();
const { MySQLClient, sql } = require('../lib/database/client.js');

router.get('/:id', async (req, res, next) => {
  let id = req.params.id;

// 非同期関数を呼び出して、その結果を変数に格納する
const queryOfDetail = await sql('SELECT_SHOP_DETAIL_BY_ID');
const queryOfReview = await sql('SELECT_SHOP_REVIEW_BY_SHOP_ID');

// 変数をPromise.all内で使用する
Promise.all([
  MySQLClient.executeQuery(queryOfDetail, [id]),
  MySQLClient.executeQuery(queryOfReview, [id])
])
.then((results) => {
    let data = results[0][0]
    data.reviews = results[1] || []
    res.render('./shops/index.ejs', data)
  }).catch((err) => {
    console.error(err)
    next(err)
  })
});

module.exports = router;
