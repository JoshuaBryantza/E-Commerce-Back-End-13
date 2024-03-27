// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define the associations
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This should match the column name in the Product table
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // This should match the column name in the Product table
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // This should match the column name in the ProductTag table
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // This should match the column name in the ProductTag table
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)