import { Dots, Feeling, Photo } from "../../svg";
import { BiMap } from "react-icons/bi";

import { GiMicrophone } from "react-icons/gi";
import { FaUserTag } from "react-icons/fa";
export default function AddToYourPost({ setShowPrev }) {
  return (
    <div className="addtoyourpost">
      <div className="addto_text">Add to your post</div>
      <div
        className="post_header_right hover1"
        onClick={() => {
          setShowPrev(true);
        }}
      >
        <Photo color="#45bd62" />
      </div>
      <div className="post_header_right hover1">
        <i className="tag_icon">
          <FaUserTag />
        </i>
      </div>
      <div className="post_header_right hover1">
        <Feeling color="#f7b928" />
      </div>
      <div className="post_header_right hover1">
        <i className="maps_icon">
          <BiMap color="red" />
        </i>
      </div>
      <div className="post_header_right hover1">
        <i className="microphone_icon">
          <GiMicrophone />
        </i>
      </div>
      <div className="post_header_right hover1">
        <Dots color="#65676b" />
      </div>
    </div>
  );
}
