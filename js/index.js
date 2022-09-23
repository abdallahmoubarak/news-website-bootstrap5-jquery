// const newsdata = [
//   {
//     title: "Roseland revisions revealed",
//     content:
//       "Anthony Mendoza, a young Roseland resident, has been appointed to complete the term of Rocio Mondragón Reyes, outgoing member of the Roseland Public Schools Board of Trustees. She has resigned her position as she moves out of the area.",
//   },
//   {
//     title: "Fran Fleet: Her accidental career fit like a glove",
//     content:
//       "How did a a nice young woman from Turlock end up fixing baseball gloves?",
//   },
//   {
//     title: "Nominate your Sonoma County hero",
//     content: "Tell us who you think should be a Sonoma County Gazette hero!",
//   },
//   {
//     title: "Geyserville gushing in",
//     content: "Lots of foodie news for us this month.",
//   },
// ];

const news = (newslist) => {
  list = "";
  newslist.map((item) => {
    list += `<div class="card w-75 mx-auto">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">
            ${item.content}
          </p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>`;
  });
  return list;
};
$(document).ready(() => {
  $.get(
    "http://localhost/github/news-website-bootstrap5-jquery/api/get_news.php",
    (data) => {
      $("#newslist").html(news(JSON.parse(data)));
    }
  );
}, "json");
// document.getElementById("newslist").innerHTML = news(newsdata);
