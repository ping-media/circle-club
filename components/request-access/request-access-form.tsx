"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input as ShadcnInput } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import React from "react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full Name must be at least 5 characters.")
    .max(12, "Full Name must be at most 12 characters."),
  phone: z
    .string()
    .min(10, "Enter valid phone number")
    .max(10, "Enter valid phone number"),
  email: z.string().email("Enter valid email"),
  service: z.string().min(1, "Service category required"),
  eventDate: z.string().min(1, "Event date required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const RequestAccessForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("Request from submitted successfully.");
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-5 md:gap-8 mt-10 md:mt-14 pb-6 md:pb-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="FULL NAME"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="PHONE NUMBER"
                    autoComplete="off"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="EMAIL" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="SERVICE CATEGORY"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DateInput field={field} />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="MESSAGE"
                    autoComplete="off"
                    className="p-4 border-none rounded-none border-b-2 border-[#530E104D] placeholder:text-brown-100 resize-none h-30 md:h-34"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-brown-100 text-white uppercase tracking-[0.2em] rounded-none px-3 py-5"
          >
            Submit Request
          </Button>
        </form>
      </Form>
    </>
  );
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof ShadcnInput>
>(({ className, ...props }, ref) => (
  <ShadcnInput
    className="p-4 border-none rounded-none border-b-2 border-[#530E104D] placeholder:text-brown-100 ring-0 outline-none focus:outline-none
      focus:ring-0 focus:ring-offset-0 focus:border-[#530E104D]"
    {...props}
  />
));

const DateInput = ({
  field,
}: {
  field: {
    value: string;
    onChange: (value: string) => void;
  };
}) => {
  const hiddenDateRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative">
      {/* Styled Visible Input */}
      <Input
        readOnly
        value={field.value}
        placeholder="EVENT DATE"
        onClick={() => hiddenDateRef.current?.showPicker?.()}
        className="p-4 border-none rounded-none border-b-2 border-[#530E104D] placeholder:text-brown-100 cursor-pointer"
      />

      {/* Hidden Native Date Input */}
      <input
        ref={hiddenDateRef}
        type="date"
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        className="absolute inset-0 opacity-0 pointer-events-none"
      />
    </div>
  );
};
