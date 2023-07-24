const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Get Tags
router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({
      include: [{model: Product}]
    })
    res.json(tags)
  } catch(err) {
    res.status(500).json({message: 'No Tags Found'})
  }
});

//Gets a single tag by passing its ID number through the URL
router.get('/:id', async (req, res) => {
  try{
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.json(singleTag);
  }catch(err){
    res.status(500).json({message: 'Could Not Find Tag With Matching ID'});
  }
});

//Create Tag Route
router.post('/', async (req, res) => {
  try{
    const newTag = await Tag.create(req.body);
    res.json(newTag);
  }catch(err){
    res.status(500).json({message: 'Could Not Create New Tag, Please Try Again.'})
  }
});

//Update A Single Tag by passing the ID number through the URL
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

//Delete A Single Tag by passing the ID number through the URL
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
