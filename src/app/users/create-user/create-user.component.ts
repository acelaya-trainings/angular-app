import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html'
})
export class CreateUserComponent {
    public user: User = {
        name: '',
        email: '',
    };

    @Output()
    public userChange = new EventEmitter<User>();

    constructor (private userService: UserService) {}

    createUser() {
        const user: User = Object.assign({}, this.user);

        this.userChange.emit(user);
        this.userService.createUser(user);

        // Clear user
        this.user.name = '';
        this.user.email = '';
    }

}
