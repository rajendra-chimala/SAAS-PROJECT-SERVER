import e from "express";
import { Table,Column,Model,DataType } from "sequelize-typescript";

@Table({
    tableName:"users",
    modelName:"User",
    timestamps:true,
})

export class User extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    declare id: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare email:string;

    @Column({
        type: DataType.ENUM('teacher', 'student', 'super-admin','institute'),
        defaultValue: 'student',
    })
    declare role: string;

}

export default User;

