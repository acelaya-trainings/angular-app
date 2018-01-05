import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage";
import {User} from "./user.model";

@Injectable()
export class UserService {
    private static STORAGE_KEY: string = 'users_list';

    constructor(private storage: LocalStorageService) {}

    listUsers(): Array<User> {
        return this.storage.get<Array<User>>(UserService.STORAGE_KEY) || [];
    }

    createUser(user: User): Array<User> {
        let users = this.listUsers();
        users.push(user);
        this.storeUsers(users);
        return users;
    }

    deleteUser(index: number): Array<User> {
        let users = this.listUsers();
        if (typeof users[index] === 'undefined') {
            return users;
        }

        users.splice(index, 1);
        this.storeUsers(users);
        return users;
    }

    updateUser(index: number, user: User): Array<User> {
        let users = this.listUsers();
        if (typeof users[index] === 'undefined') {
            return users;
        }

        users[index] = user;
        this.storeUsers(users);
        return users;
    }

    private storeUsers(users): void {
        this.storage.set(UserService.STORAGE_KEY, users);
    }

}
