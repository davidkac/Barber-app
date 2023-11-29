import { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons() {
    const [alignment, setAlignment] = useState('right');
  
    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
  

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="right"
          aria-label="right aligned"
          style={{ color: "rgb(188 146 90)" }}
        >
          <FormatAlignRightIcon style={{ fontSize: "30px" }} />
        </ToggleButton>
      </ToggleButtonGroup>

    </>
  );
}
