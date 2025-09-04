export interface SelectOption {
	value: string;
	label: string;
}

export interface FeedbackField {
	title: string;
	placeholder?: string;
	type: "text" | "email" | "tel" | "textarea" | "select" | "submit";
	required?: boolean;
	width?: 1 | 2;
	options?: SelectOption[];
}
