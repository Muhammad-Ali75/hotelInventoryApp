import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
hotelName="Pearl Continental"
numberOfRooms=10
hideRooms=false
rooms: Room={
  availableRooms:10,
  bookedRooms:1,
  totalRooms: 11,
}
roomsList: RoomsList[] =[]

selectedRoom!: RoomsList

toggle(){
  this.hideRooms=!this.hideRooms
}
ngOnInit() :void {
  this.roomsList = [{
    roomNumber:1,
    roomType: 'Delux',
    amenities: 'AC, WiFi, Bluetooth',
    price: 100,
    photos: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date("11-Nov-2022"),
    checkoutTime: new Date("14-Nov-2022"),
    rating: 4.5
  },
  {
    roomNumber:2,
    roomType: 'Felux',
    amenities: 'AC, Bluetooth',
    price: 200,
    photos: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date("14-Nov-2022"),
    checkoutTime: new Date("15-Nov-2022"),
    rating: 3.5
  },
  {
    roomNumber:3,
    roomType: 'Pelux',
    amenities: 'AC, Bluetooth, TV',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date("17-Dec-2022"),
    checkoutTime: new Date("25-Dec-2022"),
    rating: 4.9
  }
  ]
}
selectRoom(room: RoomsList){
  console.log(room);
  this.selectedRoom=room
}
addRoom(){
  const room: RoomsList={
    roomNumber:4,
    roomType: 'Plux',
    amenities: 'AC, Bluetooth, TV',
    price: 600,
    photos: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date("17-Dec-2022"),
    checkoutTime: new Date("25-Dec-2022"),
    rating: 4.9
  }
  this.roomsList=[...this.roomsList,room]
}
}
