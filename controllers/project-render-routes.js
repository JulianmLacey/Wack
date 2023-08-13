const router = require('express').Router()

router.get('/create', async (req, res) => {
    res.render('projectcreate');
})


module.exports = router;