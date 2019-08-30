module.exports = function(sequelize,DataTypes){
    const Tattoo = sequelize.define("Tattoo",{
        text:{
            type:DataTypes.STRING,
            validate:{
                allowNull:false
            }
        },
        font:{
            type:DataTypes.STRING
        },
        location:{
            type:DataTypes.STRING
        },
        colors:{
            type:DataTypes.STRING
        },
        size:{
            type:DataTypes.STRING
        },
        specs:{
            type:DataTypes.STRING
        }
        
    });
    Tattoo.associate = function(models){
        Tattoo.belongsTo(models.Customer,{
            foreignKey:{
                allowNull: false
            }
        })
    }
    return Tattoo
}