import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import { useUrl } from "../hooks/useUrl";

const UrlList: React.FC = () => {
  const { urls, removeUrl, editUrl } = useUrl();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newUrl, setNewUrl] = useState<string>("");

  const handleEditClick = (id: string, currentUrl: string) => {
    setEditingId(id);
    setNewUrl(currentUrl);
  };

  const handleUpdateClick = async (id: string) => {
    await editUrl(id, newUrl);
    setEditingId(null);
    setNewUrl("");
  };

  return (
    <List>
      {urls.map(({ id, url }) => (
        <ListItem key={id}>
          {editingId === id ? (
            <>
              <TextField
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                size="small"
                sx={{ mr: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdateClick(id)}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <ListItemText primary={url} />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeUrl(id)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditClick(id, url)}
              >
                Edit
              </Button>
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default UrlList;
