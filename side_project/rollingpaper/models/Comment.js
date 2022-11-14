const Comment = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
        'rol_comment',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false,
            }
        },
        {
            tableName: 'login_comment',
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};

module.exports = Comment;
