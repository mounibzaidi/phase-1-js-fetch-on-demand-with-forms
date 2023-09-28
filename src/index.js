document.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = document.querySelector("input#searchByID");

        const userInput = input.value;

        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        fetch(`http://localhost:3000/movies/${userInput}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Movie not found");
                }
                return response.json();
            })
            .then((data) => {
                title.innerText = data.title;
                summary.innerText = data.summary;
            })
            .catch((error) => {
                title.innerText = "Movie not found";
                summary.innerText = "";
            });
    });
});
