const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({ where: { id: req.params.id } });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(404).json({ message: 'Tag not found' });
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a tag by its `id` value
  try {
    const tagData = Tag.destroy({ where: { id: req.params.id } })
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Tag not found' });
  }

});

module.exports = router;






// .then(numDeletedRows => {
//   if (numDeletedRows === 1) {
//     res.status(200).json({ message: 'Tag deleted successfully' });
//   } else {
//     res.status(404).json({ error: 'Tag not found' });
//   }
// })
// .catch(err => {
//   res.status(500).json({ error: 'Internal server error' });
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value

//   const tagData = Tag.destroy({ where: { id: req.params.id } });
//   res.status(200).json(tagData);

// });