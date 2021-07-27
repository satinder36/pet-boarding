import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// const useStyles = makeStyles({
//   root: {
//     width: 345,
//     minHeight: 300,
//     background: "#E5E7EB",
//   },
//   media: {
//     height: 200,
//     width:345,
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    minHeight: 300,
    background: "#E5E7EB",
  },
  media: {
    height: 200,
    width: 345,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function UserView({ userInfo }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log("clicked");
  };
  const { about, contact, fileUrl, name, username, location } = userInfo;
  return (
    // <div className="user-card">
    //   <p>{name}</p>
    //   <p>{contact}</p>
    //   <p>{username}</p>
    //   <p>{about}</p>
    //   <p>{location}</p>
    //   {/* <p>{fileUrl}</p> */}
    // </div>
    <div className="user-new-card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={fileUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* <p> */}
              {/* {expanded ? about : `${about.substring(0, 10)}...`} */}
              {/* </p> */}
              {about.substring(0, 10)}
            </Typography>
          </CardContent>
          <p>Location: {location}</p>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpen}>
            Read More
          </Button>
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{name}</h2>
              <p>
                {" "}
                <strong>Contact:</strong> {contact}
              </p>
              <p>
                {" "}
                <strong>Location:</strong> {location}
              </p>
              <p id="transition-modal-description">{about}</p>
            </div>
          </Fade>
        </Modal>
      </Card>
    </div>
  );
}

export default UserView;
