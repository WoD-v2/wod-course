import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column()
    char_name: string;

    @Column()
    avatar: string;

    @Column()
    is_admin: boolean;

    @Column()
    char_class: string;

    @Column("int")
    money: number;

    @Column("int")
    rm_currency: number;

    @Column({type: "int", default: 1})
    level: number;

    @Column({default: 0})
    arms_item_equiped: number;

    @Column({default: 0})
    legs_item_equiped: number;

    @Column({default: 0})
    feet_item_equiped: number;

    @Column({default: 0})
    lefthand_item_equiped: number;

    @Column({default: 0})
    righthand_item_equiped: number;

    @Column({default: 0})
    head_item_equiped: number;

    @Column({default: 0})
    thorax_item_equiped: number;
}
