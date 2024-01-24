const router = require('express').Router();
const memberController = require('../controller/member');


router.post('/add', async (req, res) => {
    res.send(await memberController.add(req.body));
});
router.get('/', async (req, res) => {
    res.send(await memberController.fetch());
});
router.get('/fetchlorders', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await memberController.fetchdata(req.query.id);
	res.send(response);
});
router.delete('/delete', async (req, res) => {
	const response = await memberController.delete(req.query.id);
	res.send(response);
});
router.put('/update', async (req, res) => {
	const response = await memberController.update(req.query.id, req.body);
	res.send(response);
});


module.exports = router;