import React, { useEffect, useState } from "react";

import "./Infinifyscroll.css";

const Infinityscoll = () => {

    const [limit] = useState(5);
    let page = 1;
  
    async function getPosts() {
      console.log('getPosts() 호출');
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
      );  
      const data = await res.json();
      console.log(data)
      return data;
    }
  
    async function showPosts() {
      console.log('showPosts() 호출');
      const posts = await getPosts();
    
      posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
          <div class="number">${post.id}</div>
          <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
          </div>
        `;
    
        let postsContainer = document.getElementById('posts-container');
        postsContainer.appendChild(postEl);      
      });
    }
    
    function showLoading() {
      console.log('showLoading() 호출');
      let loading = document.querySelector('.loader');
      loading.classList.add('show');
    
      setTimeout(() => {
        loading.classList.remove('show');
    
        setTimeout(() => {
          page += 1;
          showPosts();        
        }, 300);
      }, 1000);
    }
  
    useEffect(() => {   
      showPosts();
  
      window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
          if (scrollTop + clientHeight >= scrollHeight) {
            showLoading();      
          }
      })    
    });
  
    return (
      <div className="body">
        <br />
        <h1>My Blog</h1>    
  
        <div className="filter-container">
          <input          
            className="filter"
            placeholder="Filter posts..."
          />
        </div> 
  
          <div id="posts-container"></div>
          
          <div className="loader">        
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>        
          </div>  
  
      </div>
     );
}

export default Infinityscoll;