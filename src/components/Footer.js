import React from "react";
import "./Footer.scss";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


export default function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Shivakumar and SatyaSandeep
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    // <div className="footer">
    //   Made with love by Shiva Kumar Mangina and Sandeep Kumar
    // </div>
    <div mt={5}>
    <Copyright />
  </div>
  );
}
