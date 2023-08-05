import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "350px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  

  [theme.breakpoints.down("sm")]: {
    heading: {
      fontSize: "1.7rem",
      marginLeft: "-2rem",
    },
    image:{
      height: "3.5rem"
    },
    btnSignin:{
      padding: "4px",
      fontSize: "17px",
      minWidth: "100px"
    }
    // appBar:{
    // TODO adjust the navbar when user is login by removing the navbar and chang the width
    // }
  },
}));
