import { createCustomElement } from "@servicenow/ui-core";
import "@servicenow/now-template-card";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const cardsData = [
	{
		tagline: { icon: "tree-view-long-outline", label: "Process" },
		actions: [
			{ id: "share", label: "Copy URL" },
			{ id: "close", label: "Mark Complete" },
		],
		heading: { label: "Hanges when trying to print Visio docs" },
		content: [
			{ label: "State", value: { type: "string", value: "Closed" } },
			{ label: "Assigned", value: { type: "string", value: "Carla S" } },
			{ label: "Priority", value: { type: "string", value: "Low" } },
			{ label: "SLA", value: { type: "string", value: "No SLA Set" } },
		],
		footerContent: { label: "Updated", value: "2019-01-15 08:41:09" },
	},
	{
		tagline: { icon: "tree-view-long-outline", label: "Process" },
		actions: [
			{ id: "share", label: "Copy URL" },
			{ id: "close", label: "Mark Complete" },
		],
		heading: { label: "Printer is out of toner" },
		content: [
			{ label: "State", value: { type: "string", value: "Closed" } },
			{ label: "Assigned", value: { type: "string", value: "Carla S" } },
			{ label: "Priority", value: { type: "string", value: "Low" } },
			{ label: "SLA", value: { type: "string", value: "No SLA Set" } },
		],
		footerContent: { label: "Updated", value: "2019-01-15 08:41:09" },
	},
	{
		tagline: { icon: "tree-view-long-outline", label: "Process" },
		actions: [
			{ id: "share", label: "Copy URL" },
			{ id: "close", label: "Mark Complete" },
		],
		heading: {
			label: "Submit attachment to malware sandbox and review the results",
		},
		content: [
			{ label: "State", value: { type: "string", value: "Closed" } },
			{ label: "Assigned", value: { type: "string", value: "Carla S" } },
			{ label: "Priority", value: { type: "string", value: "Low" } },
			{ label: "SLA", value: { type: "string", value: "No SLA Set" } },
		],
		footerContent: { label: "Updated", value: "2019-01-15 08:41:09" },
	},
	{
		tagline: { icon: "tree-view-long-outline", label: "Process" },
		actions: [
			{ id: "share", label: "Copy URL" },
			{ id: "close", label: "Mark Complete" },
		],
		heading: { label: "Can't read an email" },
		content: [
			{ label: "State", value: { type: "string", value: "Closed" } },
			{ label: "Assigned", value: { type: "string", value: "Carla S" } },
			{ label: "Priority", value: { type: "string", value: "Low" } },
			{ label: "SLA", value: { type: "string", value: "No SLA Set" } },
		],
		footerContent: { label: "Updated", value: "2019-01-15 08:41:09" },
	},
];

const view = (state) => {
	const { cardsData } = state;

	return (
		<section className="card-list">
			{cardsData.map((card) => (
				<now-template-card-assist
					className="card-list__card"
					key={card.heading.label}
					tagline={card.tagline}
					actions={card.actions}
					heading={card.heading}
					content={card.content}
					footerContent={card["footer-content"]}
					configAria={{}}
				></now-template-card-assist>
			))}
		</section>
	);
};

createCustomElement("x-551066-static-list", {
	initialState: {
		cardsData,
	},
	renderer: { type: snabbdom },
	view,
	styles,
});
