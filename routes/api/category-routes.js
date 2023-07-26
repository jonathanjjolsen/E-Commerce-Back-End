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

//Update A Single Category by passing the ID number through the URL
router.put('/:id', async (req, res) => {
  try{
    const updateCategory = await Category.update(req.body, {where: {id: req.params.id}});
  res.json(updateCategory);
  } catch(err){
    res.status(500).json('Could Not Update The Category')
  }
});

//Deletes a Category by passing the ID number through the URL
router.delete('/:id', async (req, res) => {
  try{
      const deleteCategory = await Category.destroy({where: {id: req.params.id}});
      res.json(deleteCategory);
  } catch(err){
      res.status(500).json({message: 'Could Not Delete Category, Please Try Again'})
  }
});

module.exports = router;
