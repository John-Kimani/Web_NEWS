import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //enables communication with the server

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {
    //insert bbc url link from newsAPI
    newsApiurl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eeee21a4090644c3b184587ca6b8df35"

  constructor( private http:HttpClient) { 

  }
  fetchTopStoriesBBC(){
   //using promises
   let topStory = new Promise((resolve,reject)=>{
     this,this.http.get<any>(this.newsApiurl).toPromise().then(
       response => {

        resolve(console.log('Top stories can be fetched'))
       }, error =>{
         reject(console.log('Top stories cant be fetched'))
       }
     )
   })
   return topStory   
  }
}
