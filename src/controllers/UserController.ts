import {Body, Get, JsonController, Param, Post} from 'routing-controllers';
import {UserService} from "../services/UserService";
import {Service} from "typedi";
import {User} from "../models/entities/User";
import {CreateUser} from "../models/dtos/User.dto";
import {Assert} from "../common/assertion/Assert";
import {HttpErrorCode} from "../common/error-handling/ErroCode";


/**
 * User Controller
 *
 * @author Yepeng Ding
 */
@JsonController('/users')
@Service()
export class UserController {

    constructor(
        /**
         * Inject user service
         */
        private userService: UserService
    ) {
    }

    /**
     * Get all users.
     *
     */
    @Get()
    async getAll() {
        return await this.userService.findAll();
    }

    /**
     * Get one user by id.
     *
     * @param id
     */
    @Get('/:id')
    async getOneById(@Param('id') id: number) {
        const user = await this.userService.retrieve(id);
        console.log(user)
        Assert.notNull(user, HttpErrorCode.NOT_FOUND, `User (id: ${id}) does not exist.`);
        console.log("asserted")
        return user;
    }

    /**
     * Create user.
     *
     * @param body
     */
    @Post()
    async create(@Body() body: CreateUser) {
        const user = new User();
        user.firstname = body.firstname;
        user.lastname = body.lastname;
        user.age = body.age;

        return await this.userService.create(user);
    }

}


