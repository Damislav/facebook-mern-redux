import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../../../redux/features/themeSlice";
import { memoizedDarkThemeSelector } from "../../../redux/features/selectors";

export default function DisplayAccessibility({ setVisible }) {
  const dispatch = useDispatch();
  const darkTheme = useSelector(memoizedDarkThemeSelector);

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkTheme.value;
    dispatch(newDarkMode ? dark(true) : light(false));
    Cookies.set("darkTheme", newDarkMode);
  };

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
          checked={!darkTheme.value}
          onChange={handleToggleDarkMode}
        />
      </label>
      <label htmlFor="darkOn" className="hover1">
        <span>On</span>
        <input
          type="radio"
          name="dark"
          id="darkOn"
          checked={darkTheme.value}
          onChange={handleToggleDarkMode}
        />
      </label>
    </div>
  );
}
