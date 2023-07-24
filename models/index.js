// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'category_id'})

// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'})

// Products belongToMany Tags (through ProductTag)
// Through ProductTag Model
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
// Through ProductTag Model
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
