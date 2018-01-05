import {Component, EventEmitter, Input, Output} from "@angular/core";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'delete-user',
    templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent {
    @Input()
    public index: number;

    @Output()
    public userDeleted: EventEmitter<number> = new EventEmitter<number>();

    constructor(private userService: UserService) {}

    public doDelete() {
        this.userService.deleteUser(this.index);
        this.userDeleted.emit(this.index);
    }
}
