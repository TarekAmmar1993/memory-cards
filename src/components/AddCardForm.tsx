"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import firebaseApp from "../Firebase/firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  questionPreview: z.string().min(2, {
    message: "Question preview must be at least 2 characters.",
  }),
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
  answer: z.string().min(10, {
    message: "Answer must be at least 10 characters.",
  }),
});

export const AddCardForm = ({ setShowModal }: { setShowModal: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const db = getFirestore(firebaseApp);

    addDoc(collection(db, "Cards"), {
      answer: values.answer,
      question: values.question,
      questionPreview: values.questionPreview,
    });
    setShowModal(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative h-[60vh] w-[60vw] space-y-8 rounded-2xl bg-amber-400 p-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FormField
          control={form.control}
          name="questionPreview"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Question Preview
              </FormLabel>
              <FormControl>
                <Input placeholder="Brian?" {...field} />
              </FormControl>
              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Question
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Where is Brian?" {...field} />
              </FormControl>

              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Answer
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Brian is in the kitchen" {...field} />
              </FormControl>

              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="absolute right-8 bottom-8 cursor-pointer rounded-lg border-2 border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-400"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
