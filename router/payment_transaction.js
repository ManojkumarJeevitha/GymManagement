const router = require('express').Router();
const transactionController = require('../controller/payment_transaction');


router.post('/add', async (req, res) => {
    res.send(await transactionController.add(req.body));
});
router.get('/', async (req, res) => {
    res.send(await transactionController.fetch());
});
router.get('/fetchlservice', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await transactionController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await transactionController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await transactionController.update(req.query.id, req.body);
	res.send(response);
})


module.exports = router;