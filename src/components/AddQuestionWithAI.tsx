"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import firebaseApp from "../Firebase/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GoogleGenAI } from "@google/genai";

const formSchema = z.object({
  subject: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
});

export const AddQuestionWithAI = ({ setShowModal }: { setShowModal: any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const main = async (subject: string) => {
    const question = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "generate a quick question about" + subject,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "generate a quick answer to this question: " + question.text,
    });

    const db = getFirestore(firebaseApp);
    setDoc(doc(db, "Cards", subject), {
      answer: response.text,
      question: question.text,
      questionPreview: subject,
    });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    main(values.subject);
    setShowModal(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative h-[20vh] w-[60vw] space-y-8 rounded-2xl bg-amber-400 p-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Give me a subject
              </FormLabel>
              <FormControl>
                <Input placeholder="rabbits?" {...field} />
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
