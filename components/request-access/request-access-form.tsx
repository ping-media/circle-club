"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

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
    .max(80, "Full Name must be at most 80 characters."),
  phone: z
    .string()
    .min(8, "Enter valid phone number")
    .max(30, "Enter valid phone number"),
  email: z.string().email("Enter valid email"),
  service: z.string().min(1, "Service category required"),
  // eventDate: z.string().min(1, "Event date required"),
  eventDate: z.date("Event date required"),
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
      eventDate: undefined,
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast(
      "Thanks! Your request has been submitted. Our team will contact you shortly.",
    );
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-5 lg:gap-8 mt-10 lg:mt-14 pb-6 lg:pb-0"
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
                  <Input
                    placeholder="EMAIL"
                    type="email"
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
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="p-4 justify-start text-left font-normal border-t-0 border-r-0 border-l-0 rounded-none border-b border-[#530E104D] text-brown-100 ring-0 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-[#530E104D] shadow-none bg-transparent hover:bg-transparent text-base md:text-sm"
                      >
                        {field.value
                          ? format(field.value, "PPP")
                          : "EVENT DATE"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

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
                    className="p-4 border-t-0 border-r-0 border-l-0 rounded-none border-b border-[#530E104D] placeholder:text-brown-100 resize-none h-30 md:h-34 shadow-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-[#530E104D]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs mt-2" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-brown-100 hover:bg-brown-100/95 text-white uppercase tracking-[0.2em] rounded-none px-3 py-5"
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
    className="p-4 border-t-0 border-r-0 border-l-0 rounded-none border-b border-[#530E104D] placeholder:text-brown-100 outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus:outline-none focus:border-[#530E104D] shadow-none"
    {...props}
  />
));
