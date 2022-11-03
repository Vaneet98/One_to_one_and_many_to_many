const Service = require("../services");

module.exports = {
  addProduct: async (data) => {
    let productData = {
      productName: data.productName,
      productPrice: data.productPrice,
      userid: data.userid,
    };
    let product = Service.OneProductServie.addProduct(productData);
    return product;
  },
};
