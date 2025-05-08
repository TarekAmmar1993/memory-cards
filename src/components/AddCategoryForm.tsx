"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useRef, useState } from "react";
import firebaseApp from "../Firebase/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const formSchema = z.object({
  categoryName: z.string().min(2, {
    message: "Qname must be at least 2 characters.",
  }),
  categoryImage: z
    .custom<File[]>()
    .refine(
      (files) => files?.[0]?.type.startsWith("image/"),
      "File must be an image",
    )
    .optional(),
});

export const AddCategoryForm = ({ setShowModal }: { setShowModal: any }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const db = getFirestore(firebaseApp);

    addDoc(collection(db, "Categories"), {
      categoryName: values.categoryName,
    });
    setShowModal(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length) {
      form.setValue("categoryImage", files, { shouldValidate: true });
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    form.setValue("categoryImage", files, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative h-[60vh] w-[60vw] space-y-8 rounded-2xl bg-amber-600 p-8"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FormField
          control={form.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Category Name
              </FormLabel>
              <FormControl>
                <Input placeholder="Next js?" {...field} />
              </FormControl>
              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold text-indigo-700">
                Category Image
              </FormLabel>
              <div
                onClick={handleClick}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-100"}`}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={handleChange}
                  ref={inputRef}
                  className="hidden"
                />
                {field.value?.[0] ? (
                  <p>{field.value[0].name}</p>
                ) : (
                  <p className="text-gray-500">
                    Drag & drop an image here, or click to select
                  </p>
                )}
              </div>
              <FormMessage />
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
