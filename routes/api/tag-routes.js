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
router.put('/:id', async (req, res) => {
  try{
    const updateTag = await Tag.update(req.body, {where: {id: req.params.id}});
  res.json(updateTag);
  } catch(err){
    res.status(500).json('Could Not Update The Tag')
  }
});

//Delete A Single Tag by passing the ID number through the URL
router.delete('/:id', async (req, res) => {
  try{
    const deleteTag = await Tag.destroy({where: {id: req.params.id}});
    res.json(deleteTag);
  } catch(err){
    res.status(500).json({message: 'Could Not Delete Tag, Please Try Again'})
  }
});

module.exports = router;
