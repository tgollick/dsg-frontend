import React from "react";

type Props = {
  name: String;
  review_text: String;
  profile_photo: String;
  rating: number;
  date: number;
};

const Review = (props: Props) => {
  return (
    <div className="bg-[#1e1e1e] p-2 w-full max-w-[450px] h-full max-h-[250px] rounded-md text-white">
      <p className="italic w-full overflow-hidden">"{props.review_text}"</p>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Review;
