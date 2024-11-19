import { Ui } from "./ui.module.js";
export class Details {
  constructor(id) {
    $("#btnClose").on("click", (event) => {
      $("#details").addClass("d-none");
      $(".home").removeClass("d-none");
      $(".navbar").removeClass("d-none");
      $(".wrapper").removeClass("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    const loading = document.getElementById("loading");
    loading.classList.remove("d-none");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "93f11ce573mshf7ee4b339e477f0p16f211jsn55d02fda8b71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    loading.classList.add("d-none");
    const result = await response.json();
    console.log(result);
    new Ui().displayDetails(result);
  }
}
