const Login = function (Sequelize, DataTypes) {
    const model = Sequelize.define(
        'rol_login',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false,
                unique: true,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        {
            tableName: 'rol_login',
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};

module.exports = Login;
