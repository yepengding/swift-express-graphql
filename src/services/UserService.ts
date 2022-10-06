import {Service} from 'typedi';
import {getUserRepository} from "../repositories/UserRepository";
import {User} from "../models/entities/User";

/**
 * User Service
 *
 * @author Yepeng Ding
 */
@Service()
export class UserService {

    public async findAll(): Promise<User[]> {
        return (await getUserRepository()).find();
    }

    public async retrieve(id: number): Promise<User | null> {
        return (await getUserRepository()).findOneBy({id});
    }

    public async retrieveByUsername(username: string): Promise<User | null> {
        return (await getUserRepository()).findOneBy({username});
    }

    public async create(user: User): Promise<User> {
        return (await getUserRepository()).save(user);
    }

    public async exists(username: string): Promise<boolean> {
        return await this.retrieveByUsername(username).then(user => user !== null)
    }

}
