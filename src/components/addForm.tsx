'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import firebase from '../Firebase/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  questionPreview: z.string().min(2, {
    message: 'Question preview must be at least 2 characters.',
  }),
  question: z.string().min(10, {
    message: 'Question must be at least 10 characters.',
  }),
  answer: z.string().min(10, {
    message: 'Answer must be at least 10 characters.',
  }),
});

export const AddForm = ({ setShowModal }: { setShowModal: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    firebase.firestore().collection('Cards').add({
      questionPreview: values.questionPreview,
      question: values.question,
      answer: values.answer,
    });
    setShowModal(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-8 bg-amber-400 w-[60vw] h-[60vh] p-8 rounded-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FormField
          control={form.control}
          name="questionPreview"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-indigo-700 text-xl">
                Question Preview
              </FormLabel>
              <FormControl>
                <Input placeholder="Brian?!" {...field} />
              </FormControl>
              <FormMessage className="text-red-500 text-start" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-indigo-700 text-xl">
                Question
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Where is Brian?" {...field} />
              </FormControl>

              <FormMessage className="text-red-500 text-start" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-indigo-700 text-xl">
                Answer
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Brian is in the kitchen" {...field} />
              </FormControl>

              <FormMessage className="text-red-500 text-start" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" cursor-pointer absolute bottom-8 right-8 border-2 rounded-lg bg-indigo-500 border-indigo-500 text-white hover:bg-indigo-400"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
