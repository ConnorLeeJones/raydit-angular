import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selected: string;
  id: number;
  user: User;
  options = ["Artists", "Albums"];


  constructor(private userService: UserService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getuserById(this.id).subscribe(user => this.user = user);
    this.selected = this.options[0];
    this.switchSelection(this.selected);

  }

  getSelected($event: any){
    console.log($event.target.innerText);
    this.options.push(this.selected);
    this.selected = $event.target.innerText;
    this.switchSelection(this.selected);
    console.log(this.showArtists())
  }

  switchSelection(option: string){
    this.selected = option;
    this.options = this.options.filter(obj => obj !== option);
  }

  showArtists(){
    if (this.selected == "Artists" && this.id)
      return true;
    return false;
  }

  showAlbums(){
    if (this.selected == "Albums" && this.id)
      return true;
    return false;
  }


}
