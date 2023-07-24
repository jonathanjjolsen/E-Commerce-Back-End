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

//Finds a single category by passing the ID number through the URL
router.get('/:id', async (req, res) => {
  try{
    const singleCategory = await Category.findByPk(req.params.id, {include: [{model: Product}]});
    res.json(singleCategory);
  }catch(err) {
    res.status(500).json({message: 'No Category Found With That Id'});
  }
});

//Create New Category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  }catch(err){
    res.status(500).json({message: 'Could Not Create New Category, Please Try Again'});
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
