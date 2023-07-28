import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../../../redux/features/themeSlice";

export default function DisplayAccessibility({ setVisible }) {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.darkTheme.value);
  // const compactMode = useSelector((state) => state.theme.compactMode);

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkTheme;
    Cookies.set("darkTheme", newDarkMode);
    dispatch(newDarkMode ? dark(true) : light(false));
  };

  // const handleToggleCompactMode = () => {
  //   const newCompactMode = !compactMode;
  //   dispatch(setCompactMode(newCompactMode));
  // };

  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">{/* ... */}</div>
      <div className="mmenu_main">
        <div className="small_circle" style={{ width: "50px" }}>
          <i className="dark_filled_icon"></i>
        </div>
        <div className="mmenu_col">
          <span className="mmenu_span1">Dark Mode</span>
          <span className="mmenu_span2">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </span>
        </div>
      </div>
      <label htmlFor="darkOff" className="hover1">
        <span>Off</span>
        <input
          type="radio"
          name="dark"
          id="darkOff"
          checked={!darkTheme}
          onChange={handleToggleDarkMode}
        />
      </label>
      <label htmlFor="darkOn" className="hover1">
        <span>On</span>
        <input
          type="radio"
          name="dark"
          id="darkOn"
          checked={darkTheme}
          onChange={handleToggleDarkMode}
        />
      </label>

      {/* Toggle Compact Mode */}
      <div className="mmenu_main">
        <div className="small_circle" style={{ width: "50px" }}>
          <i className="compact_icon"></i>
        </div>
        <div className="mmenu_col">
          <span className="mmenu_span1">Compact mode</span>
          <span className="mmenu_span2">
            Make your font size smaller so more content can fit on the screen.
          </span>
        </div>
      </div>
      <label htmlFor="compactOff" className="hover1">
        <span>Off</span>
        <input
          type="radio"
          name="compact"
          id="compactOff"
          // checked={!compactMode}
          // onChange={handleToggleCompactMode}
        />
      </label>
      <label htmlFor="compactOn" className="hover1">
        <span>On</span>
        <input
          type="radio"
          name="compact"
          id="compactOn"
          // checked={compactMode}
          // onChange={handleToggleCompactMode}
        />
      </label>
    </div>
  );
}
