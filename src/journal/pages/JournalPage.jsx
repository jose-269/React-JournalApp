import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
      {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugiat possimus laboriosam veniam quisquam nemo fugit blanditiis assumenda quis nihil impedit ducimus, reiciendis inventore et illo vitae eligendi? Iste, quasi!</Typography> */}


      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton size='large' sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}>
        <AddOutlined sx={{ fontSize: 30}} />
      </IconButton>


    </JournalLayout>
  );
};
