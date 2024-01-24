const router = require('express').Router();
const PlanController = require('../controller/membership_plan');


router.post('/add', async (req, res) => {
    res.send(await PlanController.add(req.body));
});
router.get('/', async (req, res) => {
    res.send(await PlanController.fetch());
});
router.get('/fetchmerchants', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await PlanController.fetchdata(req.query.businessId);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await PlanController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await PlanController.update(req.query.id, req.body);
	res.send(response);
})


module.exports = router;