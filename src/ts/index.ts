import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;

const createPizzaTemplate = (pizza: PizzaProps): string => {
	return `
		<div class="pizza">
			<h2>${pizza.title}</h2>
			<p class="toppings">${pizza.toppings.join(", ")}</p>
			<p>${pizza.description}</p>
			<span>£${pizza.price}</span>
		</div>
	`;
};

const renderTemplates = (templates: string[], parent: Element): void => {
	const templateElement = document.createElement("template");

	for (const t of templates) {
		templateElement.innerHTML += t;
	}

	parent.append(templateElement.content);
};

document.addEventListener("DOMContentLoaded", async () => {
	//* Load Pizza Data
	const pizzas = await Pizza.loadAll();

	//* Create template for each pizza
	const pizzaTemplates = pizzas.map(createPizzaTemplate);

	//* Render Pizza templates to DOM
	renderTemplates(pizzaTemplates, rootElement);
});
