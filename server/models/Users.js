module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING, //is a string
            allowNull: false //has to exist
        },
        password: {
            type: DataTypes.STRING, //is a string
            allowNull: false //has to exist
        },
    })
    
    // Users.associate = (models) => {
    //     Users.hasMany(models.Posts, {
    //         onDelete: "cascade"
    //     })
    // }
    return Users

}