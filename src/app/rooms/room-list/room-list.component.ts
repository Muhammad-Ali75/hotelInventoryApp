import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent {
  @Input () rooms: RoomsList[]=[]
  @Output () selectedRoom = new EventEmitter<RoomsList>();

  selectRoom (room : RoomsList) {
    this.selectedRoom.emit(room)
  }
}
