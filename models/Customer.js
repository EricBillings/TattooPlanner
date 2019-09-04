module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Customer.associate = function(models) {
        Customer.hasMany(models.Tattoo, {
            onDelete: "cascade"
        })
    }
    Customer.prototype.validatePassword = function (val) {
        return this.password === val;
      }
    return Customer;
}