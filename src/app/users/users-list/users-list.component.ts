import {Component, OnInit} from '@angular/core';
import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

    public users: Array<User>;

    constructor (private userService: UserService) {}

    ngOnInit(): void {
        this.users = this.userService.listUsers();
    }

    addUser(user: User) {
        this.users.push(user);
    }

    deleteUser(index: number) {

    }

}
