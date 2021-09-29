//initial the api

let main_news = document.getElementById("main_news");
let biz_news = document.getElementById("biz_news");
//grabbing the news



  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee273065dfsfw332323c406167`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      //console.log(articles);
      let newshtml = "";
      articles.slice(-9).forEach(function(element) {
          let news = `<div class="card my-3 d-flex" style="width: 22rem;">
                      <img class="card-img-top image" src="${element["urlToImage"]}" alt="Card image cap">
                      <div class="card-body">
                       <a href="${element["url"]}"><h5 class="card-title">${element["title"]}</h5></a><br><br>
                       <a href="${element["url"]}" class="btn btn-primary fix">Read More</a>
                      </div>
              </div>`;
              newshtml += news;
      });
        main_news.innerHTML = newshtml;
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send()
