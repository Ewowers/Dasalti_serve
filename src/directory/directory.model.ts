import { Column, Model, Table, DataType } from 'sequelize-typescript';
export interface CreateDirectory {
  category: string;
  title: string;
}
@Table({ tableName: 'directory' })
export class Directory extends Model<Model, CreateDirectory> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  category: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;
}
