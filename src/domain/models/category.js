import { Model, DataTypes } from "sequelize";
import sequelize from "../../infrastructure/database/config/database.js";

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false, // desactiva timestamps
    createdAt: false, // desactiva la columna "createdAt"
    sequelize,
    modelName: "Category",
    tableName: "category",
  }
);

export default Category;
