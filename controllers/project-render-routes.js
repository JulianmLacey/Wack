const router = require('express').Router()

router.get('/create', async (req, res) => {
    res.render('project-create');
})


module.exports = router;