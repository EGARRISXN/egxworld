'use client'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import {sendEmail} from '@/lib/sendEmail'
import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const {handleSubmit, formState} = form

  function onSubmit(data) {
    sendEmail(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-8 xl:px-2 xl:text-xl 2xl:text-2xl'>
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl className='border-foreground'>
                <Input placeholder='Jane Doe' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl className='border-foreground'>
                <Input placeholder='account@email.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({field}) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl className='border-foreground'>
                <div>
                  <textarea
                    className='w-full rounded border border-foreground bg-background p-2'
                    rows={4}
                    placeholder="I'm listening..."
                    {...field}
                  ></textarea>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-center'>
          <Button
            variant='outline'
            size='sm'
            className='w-60 bg-red-400 hover:bg-red-500 xl:w-96'
            type='submit'
            disabled={formState.isSubmitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
