document
    .addEventListener("DOMContentLoaded", () => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => {
                const list = document.getElementById("score-list");

                data.forEach((item) => {
                    const li = document.createElement("li");
                    li.className = item.category.toLowerCase();

                    const img = document.createElement("img");
                    img.src = item.icon;
                    img.alt = `${item.category} Icon`;

                    const span = document.createElement("span");
                    span.className = "subject";
                    span.textContent = item.category;

                    const div = document.createElement("div");
                    div.className = "score";

                    const spanValue = document.createElement("span");
                    spanValue.className = "value";
                    spanValue.textContent = item.score;

                    const spanSlash = document.createTextNode(" / 100");

                    div.appendChild(spanValue);
                    div.appendChild(spanSlash);

                    li.appendChild(img);
                    li.appendChild(span);
                    li.appendChild(div);

                    list.appendChild(li);
                });
            });
    })
    .catch((error) => console.error("Error loading the data:", error));
