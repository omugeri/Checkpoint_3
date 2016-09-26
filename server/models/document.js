const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  Title: String,
  Content: String,
  Owner: String,
  Permissions: String,
  CreatedAt: { type: Date, default: Date.now },
  ModifiedAt: { type: Date, default: Date.now },
});
documentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Document', documentSchema);
