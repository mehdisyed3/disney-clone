"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  input: z.string()
})

function SearchInput() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log('>>>',values)
    router.push(`/search/${values.input}`)
    form.reset()
  }

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>

    </Form>
  )
}

export default SearchInput