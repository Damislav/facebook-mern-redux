export default function Bio({
  infos,
  handleBioChange,
  max,
  setShowBio,
  updateDetails,
  placeholder,
  name,
}) {
  return (
    <div className="add_bio_wrap">
      <textarea
        placeholder={placeholder}
        name={name}
        value={infos?.bio}
        maxLength="100"
        className="textarea_blue details_input"
        onChange={handleBioChange}
      ></textarea>
      <div className="remaining">{max} characters remaining</div>
      <div className="flex">
        <div className="flex flex_left">
          <i className="public_icon"></i>Public
        </div>
        <div className="flex flex_right">
          <button className="gray_btn" onClick={() => setShowBio(false)}>
            Cancel
          </button>
          <button className="blue_btn" onClick={() => updateDetails()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
