const RubyGem = require('../../models/RubyGem');

// for testing
const listAllGems = (req, res) => {
  RubyGem.listAll()
  .then((gems) => {
    res.json(gems);
  })
  .catch(handleError(res));
};

const createGem = (req, res) => {
  RubyGem.create({
    name: req.body.name,
    sysDep: req.body.sysDep,
  })
  .then((gemDoc) => {
    res.json(gemDoc);
  })
  .catch(handleError(res));
};

const listGemsSysDep = (req, res) => {
  const gemsArr = req.body.gems.map(gem => gem[0]);
  RubyGem.list(gemsArr)
  .then((data) => {
    res.json(data);
  })
  .catch(handleError(res));
};

function handleError(res) {
  return (err) => {
    console.log(err);
    res.status(500).send(err);
  };
}

module.exports = {
  listAllGems,
  createGem,
  listGemsSysDep,
};
