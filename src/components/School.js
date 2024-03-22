import React from "react";
// import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const School = (props) => {
  return (
    <div className="flex gap-1 rounded-2xl bg-hoverColor px-6 py-3 my-2 md:text-[24px]">
      <div className="w-[10%]">{props.no}</div>
      <div className="w-[30%] truncate">{props.name}</div>
      <div className="w-[60%] truncate">{props.description}</div>
    </div>
  );
};

export default School;
