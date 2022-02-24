import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //enables communication with the server
import { Article } from '../classes/article'; // imports class with all its defined instances

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
   
  newsApiurlOne = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eeee21a4090644c3b184587ca6b8df35"
  topStory = new Article('','','','') //creates new article instance
  topStories:any[] = [];
  // static topStories: never[]; //quick fix recommendation

  constructor( private http:HttpClient) { 

  }
  fetchTopStoriesBBC(){
   //using promises
   let promise = new Promise((resolve,reject)=>{
     this.http.get<any>(this.newsApiurlOne).toPromise().then(
       response => {
          this.topStory = new Article('','','','')
          this.topStory.article = response.article
          this.topStory.title = response.title
          this.topStory.description = response.description
          // this.topStories.push(this.topStory)
        resolve(console.log('Top stories can be fetched' + JSON.stringify(response.articles[0])))
       }, error =>{
         reject(error)
       }
     )
   })
   return promise   
  }
}
