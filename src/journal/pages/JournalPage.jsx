import { useDispatch, useSelector } from "react-redux";
import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { startNewNote } from "../../store/journal";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout className="animate__animated animate__fadeIn animate__faster">
     
      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        disabled={ isSaving }
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
