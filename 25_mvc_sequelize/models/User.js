const User = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
        'prac38',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        {
            tableName: 'prac38',
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};

module.exports = User;
