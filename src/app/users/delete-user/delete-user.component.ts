import {Component, EventEmitter, Input, Output} from "@angular/core";
import {UserService} from "../shared/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeleteUserConfirmComponent} from "../delete-user-confirm/delete-user-confirm.component";

@Component({
    selector: 'delete-user',
    templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent {
    @Input()
    public index: number;

    @Output()
    public userDeleted: EventEmitter<number> = new EventEmitter<number>();

    constructor(private userService: UserService, private modalService: NgbModal) {}

    public doDelete() {
        this.modalService.open(DeleteUserConfirmComponent).result.then(() => {
            this.userService.deleteUser(this.index);
            this.userDeleted.emit(this.index);
        }, () => {});
    }
}
