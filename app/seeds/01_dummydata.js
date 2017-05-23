
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('expenses').insert([
        {id: 1, category: 'Groceries', amount: 35.47},
        {id: 2, category: 'Travel', amount: 339.58},
        {id: 3, category: 'Groceries', amount: 16.77}
      ]);
    });
};
