import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService],
})

export class UserComponent {
    name: string = "Tihomir";
    email: string = "tivanov.melon.com";
    address: address = {
        country: "Bulgaria",
        city: "Veliko Tarnovo",
        street: "Some Streen Name 23"
    }
    hobbies: string[];
    showHobbies: boolean;
    posts: post[];

    constructor(private postsService: PostsService){
        this.name = 'Ivanov';
        this.hobbies = [ 'Coding', 'Gaming', 'BeeKeeping' ];

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies(){
        if(this.showHobbies) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }

    addHobby(hobby: string){
        this.hobbies.push(hobby);
    }

    deleteHobby(index: number){
        this.hobbies.splice(index, 1);
    }
}

interface address {
    country: string;
    city: string;
    street: string;
}

interface post {
    id: number,
    title: string,
    body: string
}