"use client"
import Image from "next/image"
import CF from "media/contactForm.png"
import CF2 from "media/contactForm2.png"
import CF3 from "media/contactForm3.png"
import { usePathname } from "next/navigation"
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
export default function ContactForm({ label = false }) {
  const pathname = usePathname()

  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
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

  const images = {
    "/home": CF,
    "/book-promotion-services": CF2,
    "/children-book-services": CF3,
  }

  const selectedImage = images[pathname] || CF

  return (
    <section>
      <div className="py-[60px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="hidden md:block">
              <Image
                src={selectedImage}
                alt="Best Publishing Services"
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center ms-auto">
              <h4 className="text-black font-montserrat uppercase font-bold text-[14px] md:text-[13px] lg:text-[15px] xl:text-[20px] 2xl:text-[25px]">
                Sign-Up for
              </h4>
              <h4 className="text-primary font-montserrat uppercase font-bold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px]">
                Free Quote
              </h4>
              <p className="text-[13px] font-comfortaa">
                Work directly with publishing’s most acclaimed and sought-after
                professionals, <br className="hidden xl:block" /> including #1
                New York Times-bestselling writers.
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className="grid grid-cols-1 gap-5 mt-8"
                >
                  <div className="grid grid-cols-2 gap-5 items-center">
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
                              className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-6 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                              className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-6 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
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
                              Phone Number{" "}
                              <span className="text-primary">*</span>
                            </FormLabel>
                          )}
                          <FormControl>
                            <Input
                              className="!text-sm font-comfortaa rounded-none !bg-[#F3F3F3] px-5 text-black font-normal py-6 placeholder:text-text_color bg-text_color/10 focus-visible:ring-primary"
                              placeholder="Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="rounded-none relative text-center items-center justify-start inline-block overflow-hidden transition-all bg-primary  hover:bg-secondary group h-[30px] sm:h-[30px] md:h-[30px] lg:h-[40px] xl:h-[50px] 2xl:h-[50px] content-center text-white uppercase font-extrabold font-montserrat text-[2.5dvw] sm:text-[10px] md:text-[10px] lg:text-[13px] 2xl:text-[15px]"
                    >
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary "></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        {loading ? "Loading..." : "Submit"}
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
