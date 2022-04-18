console.log("Handle news app with this js file");
// 23792f5ad70342fc805b8a646d6c41bb

let newsAccordian = document.getElementById('newsAccordian');

let source = 'bbc-news';
let apiKey = '23792f5ad70342fc805b8a646d6c41bb';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let news = "";
        articles.forEach(function(element, index) {
            news += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                <b>Breaking News ${index+1}: </b> ${element["title"]}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordian">
                            <div class="accordion-body">
                                ${element["content"]}<a href="${element["url"]}" target="_blank">Read more here...</a>
                            </div>
                        </div>
                    </div>`;
            console.log(element["title"]);
        });
        newsAccordian.innerHTML = news;
        // console.log(json);
    } else {
        console.log("Some error occured!");
    }
}

xhr.send();
