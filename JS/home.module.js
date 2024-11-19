import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Home {
  constructor() {
    $(".nav-link").on("click", (event) => {
      $(".nav-link").removeClass("active");
      $(event.currentTarget).addClass("active");
      const category = $(event.currentTarget).attr("data-category");
      this.getGames(category);
    });
    this.loading = document.getElementById("loading");
    this.detail = document.getElementById("details");

    this.ui = new Ui();
    this.getGames("MMORPG");
  }

  async getGames(category) {
    this.loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "93f11ce573mshf7ee4b339e477f0p16f211jsn55d02fda8b71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    this.loading.classList.add("d-none");

    const result = await response.json();
    this.ui.displayDataGames(result);

    $(".card").on("click", (event) => {
      this.detail.classList.remove("d-none");
      $(".home").addClass("d-none");
      $(".navbar").addClass("d-none");
      $(".wrapper").addClass("d-none");
      let id = $(event.currentTarget).attr("data-id");
      console.log(id);
      new Details(id);
    });
  }

  //-------------
}
