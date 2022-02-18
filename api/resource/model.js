const db = require('../../data/dbConfig')

async function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where('resource_id', id).first();
  }

async function add (resource) {
    const [id] = await db('resources').insert(resource);
    return findById(id);
  }

module.exports = {
  find,
  findById,
  add
}
