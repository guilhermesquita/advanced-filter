import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'tbl_products'})
export class PgProduct extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number
}
