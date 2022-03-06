import React from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export const SingleProductPage1 = ({brand,pname,rating}) => {
  return (
    <>
     <h1>{brand}</h1>
      <p style = {{fontSize: "16px", color : "gray"}}>{pname}</p>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > *": {
              p: 2,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
              4.2
              <StarIcon />
            </Button>
            <Button>{rating}k Ratings</Button>
          </ButtonGroup>
        </Box>
        <hr />
      </div>
    </>
  )
}
