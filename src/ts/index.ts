import { Pizza } from "./models/Pizza";

document.addEventListener("DOMContentLoaded", async () => {
	//* Load Pizza Data
	const pizzas = await Pizza.loadAll();

	console.log(pizzas);
});
