
// Simulate the DDBB.
const CATEGORIES = [{'idCategory': 1, 'categoryName': 'Computing'},
  {'idCategory': 2, 'categoryName': 'Novel'},
  {'idCategory': 3, 'categoryName': 'Tourism'}
];

const getCategories = () => {
  return {
    data: CATEGORIES
  }
};

module.exports = {
  getCategories
};
