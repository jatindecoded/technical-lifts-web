import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}

export const formSchema = z.object({
  name: z.string({ message: "Name is required" }).min(1, "Name is required"),
  phone: z
    .string({ message: "Phone number is required" })
    .min(10, "Enter a valid phone number"),
  inquiry: z.string({ message: "Please select an inquiry type" }).min(1),
  message: z.string().optional(),
  agree: z.literal(true, { message: "You must agree to continue" }),
});
