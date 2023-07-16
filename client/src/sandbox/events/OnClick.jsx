import { Button } from "@mui/material";

const OnClick = () => {
  const handleClick = e => console.log(e);

  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      sx={{ m: 2 }}
    >
      Click Me!
    </Button>
  );
};

export default OnClick;