const mongoose = require('mongoose');

const projectFields = {
  _id:0,
  name: 1,
  sysDep: 1
};

const RubyGemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [1, 'The value of path `{PATH}` (`{VALUE}`) should exceeds the minimum allowed length ({MINLENGTH}).'],
  },
  sysDep: [
    {
      type: String,
    }
  ],
});

RubyGemSchema.statics.list = function (gemsArr) {
  return this.find({
    name: {
      $in: gemsArr,
    }
  }, projectFields);
};

RubyGemSchema.statics.listAll = function () {
  return this.find({}, projectFields);
};

const RubyGem = mongoose.model('RubyGem', RubyGemSchema);

module.exports = RubyGem;
