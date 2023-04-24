import React from "react";
import DaumPostcode from "react-daum-postcode";

interface PostProps {
  company: {
    address: string;
  };
  setcompany: (company: { address: string }) => void;
}

interface Address {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

const Post: React.FC<PostProps> = (props) => {
  const complete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={complete} />
    </div>
  );
};

export default Post;
