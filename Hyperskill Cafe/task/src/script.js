let title = document.getElementById("reviewTitle");
let text = document.getElementById("reviewText");
let name = document.getElementById("reviewName");
let submit = document.getElementById("reviewButton");
let row = document.getElementById("reviewsRow");
let form = document.querySelector("#reviewForm");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let titleVal = title.value;
    let textVal = text.value;
    let nameVal = name.value;
    if (!nameVal) nameVal = "Anonymous";

    row.insertAdjacentHTML("beforeend",
        "<div class=\"col-lg-4 col-md-6 py-3\">\n" +
        "          <div class=\"card h-100\">\n" +
        "            <div class=\"card-body\">\n" +
        "              <h4 class=\"card-title\">" + titleVal + "</h4>\n" +
        "              <blockquote class=\"blockquote mb-0\">\n" +
        "                <p><i>" + textVal + "</i></p>\n" +
        "                <footer class=\"text-end blockquote-footer\"><i>" + nameVal + "</i></footer>\n" +
        "              </blockquote>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>"
    );
});