export type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type FormFieldType = HTMLInputTypeAttribute | "textarea" | "submit";

export interface FormField {
  title: string;
  placeholder?: string;
  type: FormFieldType;
  required?: boolean;
  width?: 1 | 2;
}
