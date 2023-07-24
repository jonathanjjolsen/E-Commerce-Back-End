const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

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

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
