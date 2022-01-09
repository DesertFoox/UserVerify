import React from "react";

import Input from "../Common/Input/Input";

const UsersListContainer: React.FC = () => {
  return (
    <div className="container bg-slate-200">
      <Input type="text" placeholder="جستجو نام فرد"/>
    </div>
  );
};

export default UsersListContainer;
