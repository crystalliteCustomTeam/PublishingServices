"use client"
// Next
import Image from "next/image"
// Media
import CheckIcon from "media/children-book-illustrations/checkGreen.png"
// React Hook Form
import { useForm } from "react-hook-form"
// React
import { useState } from "react"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a string",
    })
    .min(7, {
      message: "phone must be at least 7 characters.",
    })
    .max(14, {
      message: "phone must be at most 14 characters.",
    })
    .regex(/^\d+$/, {
      message: "phone number can only contain digits.",
    }),
  message: z.string(),
})
export default function PremiumServices({ label = false }) {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const filteredValues = Object.entries(values).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== false) {
          acc[key] = value
        }
        return acc
      },
      {}
    )
    console.log(filteredValues)
  }
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-[80px]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-x-5 gap-y-8">
            <div className="max-w-[700px]">
              <h2 className="font-montserrat max-w-[600px] text-[40px] font-bold leading-normal mb-3">
                Premium Children Illustrations Services Tailored To Your Needs
              </h2>
              <p className="font-comfortaa text-base font-medium leading-normal">
                Are you looking for professional children illustrations services
                to help share your story? Our children illustrations company is
                here to make it happen. We have a team of the best illustrators
                for hire who excel at crafting everything from detailed
                narratives to tales of adventure or stories of struggle and
                success. We’ll help give your story the voice it deserves—one
                that inspires and resonates with your audience.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-5">
                {[
                  "Children Illustrations",
                  "eBook Writing",
                  "Book Editing",
                  "Book Formatting",
                  "Book Marketing",
                  "Book Cover Designs",
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex font-comfortaa text-base font-medium leading-normal items-center gap-x-2"
                  >
                    <Image src={CheckIcon} alt="icon" className="shrink-0" />
                    <span className="block">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 gap-5 bg-[#F2F2F2] p-[40px] rounded-[20px] max-w-[450px] ms-auto text-center"
                >
                  <div>
                    <h3 className="font-comfortaa text-[21px] font-bold text-primary leading-normal">
                      UP TO 50% OFF ON
                    </h3>
                    <h4 className="font-comfortaa text-[16px] font-bold leading-normal mb-5">
                      Children Illustrations Package
                    </h4>
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Full Name <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Email Address{" "}
                            <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>
                            Phone Number <span className="text-primary">*</span>
                          </FormLabel>
                        )}
                        <FormControl>
                          <Input
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal py-7 mb-1 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        {label && (
                          <FormLabel>Talk About Your Project</FormLabel>
                        )}
                        <FormControl>
                          <Textarea
                            className="!text-sm font-comfortaa rounded-none px-5 text-black font-normal placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary h-[150px] py-6"
                            placeholder="Talk About Your Project"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="rounded-none relative text-center items-center justify-start inline-block overflow-hidden transition-all bg-primary  hover:bg-secondary group h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[55px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]"
                  >
                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary "></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      {loading ? "Loading..." : "Claim discount!"}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
