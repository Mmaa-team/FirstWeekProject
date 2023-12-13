const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbNAME = process.env.DB_NAME;
const dbDIALECT = process.env.DIALECT;

const sequelize = new Sequelize(dbNAME, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDIALECT,
  logging: true,
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to the database NEVER GIVE UPPP"))
  .catch((err) =>
    console.error("Unable to connect to the database  NEVER GIVE UPPP:", err)
  );

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.dotenv = dotenv;
db.Users = require("./user_model.js")(sequelize, DataTypes);
db.Items = require("./item_model.js")(sequelize, DataTypes);
db.Basket = require("./basket_model.js")(sequelize, DataTypes);
db.Creator = require("./creator_model.js")(sequelize, DataTypes);
db.Post = require("./post_model.js")(sequelize, DataTypes);
db.Comment = require("./comment_mode.js")(sequelize, DataTypes);
db.Collection = require("./collection_model.js")(sequelize, DataTypes);
db.Brand = require("./brand_model.js")(sequelize, DataTypes);
db.FollowingBrand = require("./followingBrand_model.js")(sequelize, DataTypes);
db.FollowingCreator = require("./followingCreator_model.js")(
  sequelize,
  DataTypes
);
db.Favorite = require("./favorite_model.js")(sequelize, DataTypes);



/////relations between Items and Users  through Basket/////
db.Items.belongsToMany(db.Users, { through: db.Basket });
db.Users.belongsToMany(db.Items, { through: db.Basket });

/////relations between Creator and Post /////
db.Creator.hasMany(db.Post, {
  foreignKey: "creatorId",
});
db.Post.belongsTo(db.Creator);

/////relations between  Comment and post  &&  Comment and users /////
db.Users.hasMany(db.Comment, {
  foreignKey: "userId",
});
db.Comment.belongsTo(db.Users);

db.Post.hasMany(db.Comment, {
  foreignKey: "postId",
});
db.Comment.belongsTo(db.Post);

/////relations between Creator and Brand  through Collection/////

db.Creator.belongsToMany(db.Brand, { through: db.Collection });
db.Brand.belongsToMany(db.Creator, { through: db.Collection });



/////relations between  collection and items  /////
db.Collection.hasMany(db.Items, {
  foreignKey: "collectionId",
});
db.Items.belongsTo(db.Collection);

/////relations between  following and creator    /////
db.Creator.belongsToMany(db.Users, { through: db.FollowingCreator });
db.Users.belongsToMany(db.Creator, { through: db.FollowingCreator });

/////relations between  following and Brand    /////
db.Brand.belongsToMany(db.Users, { through: db.FollowingBrand });
db.Users.belongsToMany(db.Brand, { through: db.FollowingBrand });



///relations between Items and Users  through Favorite/////
db.Items.belongsToMany(db.Users, { through: db.Favorite });
db.Users.belongsToMany(db.Items, { through: db.Favorite });

// db.sequelize.sync({ force: true });

module.exports = db;
