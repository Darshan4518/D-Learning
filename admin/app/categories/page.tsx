"use client";
import { CategoryModal } from "@/components/CategoryModel";
import { CategoryUpdateModal } from "@/components/CategoryUpdateDailog";
import { deleteCategory, getAllCategory } from "@/severActions/categoryAction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit2, Loader2, Trash2 } from "lucide-react";
import React, { useState } from "react";

export type Category = {
  _id: string;
  category: string;
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    _id: "",
    category: "",
  });
  const [open, setOpen] = useState(false);
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAllCategory(),
    staleTime: 300000,
  });

  const queryclient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: any) => {
      await deleteCategory(id);
    },
    onSuccess: (data, id) => {
      queryclient.setQueryData(["categories"], (elm: Category[]) => {
        return elm?.filter((category: Category) => category?._id !== id);
      });
    },
  });

  const handleCategory = (category: Category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  return (
    <div className=" max-w-6xl mx-auto my-2 p-3">
      <div className=" w-full items-center flex  justify-between">
        <h1 className=" md:text-3xl text-2xl font-bold text-gray-950">
          Category
        </h1>
        <CategoryModal />
      </div>
      <div className=" my-10 flex items-center gap-2 flex-wrap">
        {isPending && (
          <div className=" mx-auto my-10">
            <Loader2 className=" animate-spin " />
          </div>
        )}
        {!isPending &&
          data?.map((category: Category, ind: number) => (
            <div
              key={ind}
              className=" p-3 px-5 border gap-3 border-gray-200 rounded-md max-w-xs flex justify-between items-center"
            >
              <span className=" capitalize">{category?.category}</span>
              <div className=" flex items-center gap-3">
                <Edit2
                  className=" size-5 cursor-pointer"
                  onClick={() => handleCategory(category)}
                />
                <Trash2
                  className=" size-5 cursor-pointer"
                  onClick={() => deleteMutation.mutate(category?._id)}
                />
              </div>
            </div>
          ))}
      </div>
      <CategoryUpdateModal
        open={open}
        setOpen={setOpen}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Categories;
