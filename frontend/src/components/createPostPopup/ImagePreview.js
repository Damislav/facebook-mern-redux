import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";

export default function ImagePreview({ text, user, setText }) {
  return (
    <div className="overflow_a">
      <EmojiPickerBackgrounds text={text} user={user} setText={setText} type2 />
    </div>
  );
}
