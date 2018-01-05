import {Component, EventEmitter, Input, Output} from "@angular/core";
import {UserService} from "../shared/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserModalComponent} from "../user-modal/user-modal.component";
import {User} from "../shared/user.model";

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.component.html'
})
export class EditUserComponent {
    @Input()
    public index: number;
    @Output()
    public userEdited: EventEmitter<User> = new EventEmitter<User>();

    constructor(private userService: UserService, private modalService: NgbModal) {}

    public openEdit() {
        const modal = this.modalService.open(UserModalComponent);
        modal.componentInstance.user = this.userService.listUsers()[this.index];
        modal.componentInstance.isEdition = true;

        modal.result.then((user: User) => {
            this.userService.updateUser(this.index, user);
            this.userEdited.emit(user);
        });
    }
}
