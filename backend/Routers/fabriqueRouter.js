const express=require ('express')
const router =express.Router()
const fabrique =require ('../Controllers/fabriqueController')

router.post('/add',fabrique.addFabrique)
router.get('/get',fabrique.getFabrique)
router.put('/:id',fabrique.updateFabrique)
router.delete('/:id',fabrique.deleteFabrique)
module.exports = router 

