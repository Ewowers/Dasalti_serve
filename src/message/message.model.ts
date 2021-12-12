import { Column, Model, Table, DataType } from 'sequelize-typescript';
export interface CreateMessage {
  email: string;
  fullName: string;
  subject: string;
  message: string;
}
@Table({ tableName: 'message' })
export class Message extends Model<Model, CreateMessage> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING })
  fullName: string;
  @Column({ type: DataType.STRING })
  subject: string;
  @Column({ type: DataType.TEXT })
  message: string;
}
