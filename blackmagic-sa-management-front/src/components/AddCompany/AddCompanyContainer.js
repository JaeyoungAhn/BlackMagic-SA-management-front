import React, { useState } from "react";
import axios from "axios";

const AddCompanyContainer = ({ setSelectedMenu }) => {
  const [companyName, setCompanyName] = useState("");

  const onChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8080/company",
      data: {
        companyName: companyName,
      },
    }).then((response) => {
      console.log(response);
      alert("기관 등록을 완료하였습니다.");
      setSelectedMenu("company-list");
    });
  };
  return (
    <div className="board-container">
      <h1>기관 정보 등록</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeCompanyName}
          type="text"
          maxLength={50}
          placeholder="기관명을 입력하세요."
        />
        <button>등록</button>
      </form>
    </div>
  );
};

export default AddCompanyContainer;
