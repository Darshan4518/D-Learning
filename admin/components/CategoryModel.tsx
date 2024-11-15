import React from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "@/severActions/categoryAction";
import { Category } from "@/app/categories/page";

export function CategoryModal() {
  const queryclient = useQueryClient();
  const createMutation = useMutation({
    mutationFn: async (formdData: FormData) => await createCategory(formdData),
    onSuccess: (data) => {
      console.log(data);
      queryclient.setQueryData(["categories"], (elm: Category[]) => {
        console.log(elm);
        if (elm?.length === 0) {
          return [data];
        } else {
          return [...elm, data];
        }
      });
    },
  });

  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <Plus />
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h2 className=" my-3 text-xl font-bold">Upload Category</h2>
            <form action={(FormData) => createMutation.mutate(FormData)}>
              <Input placeholder=" Enter Category" name="category" />
              <div className=" w-full flex justify-center my-5">
                <Button className="">Submit</Button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
