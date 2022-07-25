//create function to create and export model so it can be accessed in other files
//Datatypes variable
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING, //is a string
            allowNull: false //has to exist
        },
        postText: {
            type: DataTypes.STRING, //is a string
            allowNull: false //has to exist
        },
        username: {
            type: DataTypes.STRING, //is a string
            allowNull: false //has to exist
        }
    })
    
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    }
    return Posts

}