import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //enables communication with the server

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
   
  newsApiurlOne: any;
  newsAPIurlTwo: any;
  newsAPIkey:any;
  topStories: any;

  constructor( private http:HttpClient) { 

    this.newsApiurlOne = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eeee21a4090644c3b184587ca6b8df35"
    this.topStories = []

  }
  fetchTopStoriesBBC(){
   //using promises
   let topStory = new Promise((resolve,reject)=>{
     this,this.http.get<any>(this.newsApiurlOne).toPromise().then(
       response => {
          this.topStories = response.article
        resolve(console.log('Top stories can be fetched'))
       }, error =>{
         reject(error)
       }
     )
   })
   return topStory   
  }
}
