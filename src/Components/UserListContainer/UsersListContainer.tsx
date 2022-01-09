import React from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form } from "formik";

import { SubscribeValidation } from "../../Core/Validations/SearchValidation";
import Input from "../Common/Input/Input";
import { showToast } from "../../Core/Utils/ShowToast";
import ToastTypes from "../../Core/Enums/ToastTypesEnum";

const UsersListContainer: React.FC = (): JSX.Element => {
  return (
    <div className="container px-10 w-35rem flex justify-center flex-col mx-auto bg-gray-200">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={() =>
          showToast(["Send Subscribe SuccessFully"], ToastTypes.success)
        }
        validationSchema={SubscribeValidation}
      >
        <Form className="flex justify-center mt-8 w-full">
          <Input
            Icon={<BsSearch />}
            name="search"
            className="p-2  text-right text-black outline-none"
            type="text"
            placeholder="جستجو نام فرد"
          />
        </Form>
      </Formik>
      <div className="flex justify-between">
        <AiOutlineClose className="mt-3 text-xl" />
        <input className="mt-3 w-4 h-4" type={"checkbox"} />

      </div>
    </div>
  );
};

export default UsersListContainer;
