const Models = require("../models");

// -------------HasOne method for one to one -------------

Models.UserModels.hasOne(Models.OneProductModels, {
  //foreignKey: "userId",
  as: "ProductDetails",
});

exports.getUser = () => {
  return Models.UserModels.findAll({
    attributes: ["id", "name", "address"],
    include: [
      {
        model: Models.OneProductModels,
        as: "ProductDetails",
      },
    ],
  });
};

//----------------------belongsTo method for one to one-------------
Models.OneProductModels.belongsTo(Models.UserModels, {
  //foreignKey: "userid",
  as: "UserDetails",
});

exports.getUserbelongsto = () => {
  return Models.OneProductModels.findAll({
    attributes: ["productName", "ProductPrice"],
    include: [
      {
        model: Models.UserModels,
        attributes: ["id", "name", "address"],
        as: "UserDetails",
      },
    ],
  });
};

// -------------hasMany method for one to many -------------

Models.UserModels.hasMany(Models.ManyProductModels, {
  foreignKey: "manyUserId",
  as: "AllProductDetails",
});

exports.getUserhasmany = () => {
  return Models.UserModels.findAll({
    attributes: ["id", "name", "address"],
    include: [
      {
        model: Models.ManyProductModels,
        attributes: ["productNames", "productPrices"],
        as: "AllProductDetails",
      },
    ],
  });
};
