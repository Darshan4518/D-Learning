import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "@/severActions/categoryAction";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Category } from "@/app/categories/page";

export function CategoryUpdateModal({
  selectedCategory,
  open,
  setOpen,
}: {
  selectedCategory: Category;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [categoryValue, setCategoryValue] = useState("");

  useEffect(() => {
    setCategoryValue(selectedCategory.category);
  }, [selectedCategory]);

  const queryclient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: async (formdData: FormData) =>
      await updateCategory(formdData, selectedCategory?._id),
    onSuccess: (data) => {
      setOpen(false);
      queryclient.setQueryData(["categories"], () => {});
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className=" lg:text-4xl text-2xl font-bold text-center">
          Updated Category
        </DialogTitle>

        <form action={(FormData) => updateMutation.mutate(FormData)}>
          <Input
            placeholder=" Enter Category"
            name="category"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          />
          <div className=" w-full flex justify-center my-5">
            <Button className=" ">update</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
