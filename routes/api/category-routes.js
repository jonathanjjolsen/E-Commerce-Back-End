const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product}]});
    res.json(categories);
  }catch(err){
    res.status(500).json({message: 'No Categories Found'})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const singleCategory = await Category.findByPk(req.params.id, {include: [{model: Product}]});
    res.json(singleCategory);
  }catch(err) {
    res.status(500).json({message: 'No Category Found With That Id'});
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
