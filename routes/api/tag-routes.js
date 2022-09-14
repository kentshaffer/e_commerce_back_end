const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include: [Product]}).then(tagData => res.json(tagData)).catch(err => res.json(err))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({where: {id: req.params.id}, include: [Product]}).then(tagData => res.json(tagData)).catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(tagData => res.json(tagData)).catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {where: {id: req.params.id}}).then(tagData => res.json(tagData)).catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: {id: req.params.id}})
});

module.exports = router;
