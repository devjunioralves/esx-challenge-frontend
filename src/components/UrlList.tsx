import { Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useUrl } from "../hooks/useUrl";

const UrlList: React.FC = () => {
  const { urls, removeUrl } = useUrl();

  return (
    <List>
      {urls.map(({ id, url }) => (
        <ListItem key={id}>
          <ListItemText primary={url} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeUrl(id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default UrlList;
