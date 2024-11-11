import React, { useState, useContext } from "react";
import {
  Typography,
  Paper,
  Tooltip,
  IconButton,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { HelpOutline } from "@mui/icons-material";
import { PortainerContext } from "../context-api/PortainerContext";
const AddStacks = () => {
  const { createStack } = useContext(PortainerContext);
  const [formData, setFormData] = useState({
    name: "",
    composeContent: "",
  });
  const [loading, setLoading] = useState(false);
  const edgeSystemState = JSON.parse(sessionStorage.getItem("edgeSystemState"));
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const lineNumbers = formData.composeContent
    .split("\n")
    .map((_, index) => index + 1)
    .join("\n");

  const handleDeployStack = async () => {
    setLoading(true);
    try {
      const data = await createStack(edgeSystemState?.edgeSystemId, formData);
      console.log(data);
      if (data) {
        setLoading(false);
        setFormData({
          name: "",
          composeContent: "",
        });
      }
    } catch (err) {
      setLoading(false);
      console.log(err?.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Deploying the Stack...
        </Typography>
      </div>
    );
  }

  console.log(formData);
  return (
    <div className="pb-4 flex flex-col gap-2">
      <Typography variant="h5">Create Stack</Typography>
      <Paper className="p-6 rounded-lg shadow-md space-y-4">
        <Box className="">
          <TextField
            fullWidth
            required
            type="text"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. my-group"
            color="secondary"
          />
        </Box>
        <div className="flex items-center justify-between">
          <Typography variant="h6" className="text-gray-700">
            Web editor
          </Typography>
          <Tooltip title="Search (Ctrl+F)">
            <Typography className="text-gray-500 text-sm">
              Ctrl+F for search
            </Typography>
          </Tooltip>
        </div>

        <Typography variant="body2" className="text-gray-500">
          You can get more information about Compose file format in the{" "}
          <a
            href="https://docs.docker.com/compose/compose-file/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            official documentation
          </a>
          .
        </Typography>

        <div className="flex items-center space-x-2">
          <Tooltip title="Information">
            <IconButton size="small">
              <HelpOutline fontSize="small" color="secondary" />
            </IconButton>
          </Tooltip>
          <Typography variant="body2" className="text-gray-500">
            Define or paste the content of your docker compose file here
          </Typography>
        </div>

        <div className="flex bg-gray-50 rounded-md border border-gray-200 overflow-hidden">
          {/* Line Numbers */}
          <pre
            className="bg-gray-100 text-gray-500 text-right text-sm p-3 select-none"
            style={{ minWidth: "40px" }}
          >
            {lineNumbers}
          </pre>

          {/* Text Area */}
          <textarea
            name="composeContent"
            value={formData.composeContent}
            onChange={handleInputChange}
            rows={25}
            placeholder="Paste your Docker Compose file content here..."
            className="flex-1 p-3 font-mono text-sm text-gray-800 outline-none resize-none"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeployStack}
        >
          Deploy the Stack
        </Button>
      </Paper>
    </div>
  );
};

export default AddStacks;
