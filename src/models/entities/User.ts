import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"
import {Field, ObjectType} from "type-graphql";

/**
 * User Entity
 *
 * @author Yepeng Ding
 */
@ObjectType()
@Entity()
export class User {

    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    username: string

    @Field()
    @Column()
    firstname: string

    @Field()
    @Column()
    lastname: string

    @Field()
    @Column()
    age: number

    @Field()
    @CreateDateColumn()
    createdAt?: Date

    @Field()
    @UpdateDateColumn()
    updatedAt?: Date

}
