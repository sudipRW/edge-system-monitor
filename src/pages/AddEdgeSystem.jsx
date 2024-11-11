import React, { useContext, useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Checkbox,
  Box,
  Button,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  ListItemText,
  CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { AutoFixHigh } from "../assets/icons";
import { useTheme } from "@mui/styles";
import { PortainerContext } from "../context-api/PortainerContext";
import { AlertContext } from "../context-api/AlertContext";

const AddEdgeSystem = () => {
  const theme = useTheme();
  const { addEdgeSystem, fetchAllGroups, fetchAllTags } =
    useContext(PortainerContext);
  const { setAlertData } = useContext(AlertContext);
  const navigate = useNavigate();
  const [apiPlaceholder, setApiPlaceholder] = useState("");
  const [createdEdgeSystem, setCreatedEdgeSystem] = useState([]);
  const [groups, setGroups] = useState([]);
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    apiUrl: "",
    name: "",
    groupId: 1,
    tagIds: [],
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Check if the input is the multiple Select (tagIds)
    if (name === "tagIds") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: typeof value === "string" ? value.split(",") : value, // Ensure value is an array
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    const hostname = window.location.hostname;
    const port = window.location.port || "9000";
    const apiPlaceholder = `http://${hostname}:${port}`;
    setApiPlaceholder(apiPlaceholder);

    const fetchData = async () => {
      try {
        const groups = await fetchAllGroups();
        const tags = await fetchAllTags();
        console.log(tags);
        setTags(tags);
        setGroups(groups);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleConnect = async () => {
    try {
      const response = await addEdgeSystem(
        formData.name,
        formData.apiUrl,
        formData.groupId,
        formData.tagIds
      );
      if (response.data) {
        setCreatedEdgeSystem(response?.data);
        navigate(`/edge-system/${response?.data?.Id}/info`);
        setFormData({
          name: "",
          apiUrl: "",
          groupId: 1,
          tagIds: [],
        });
        setAlertData({
          ...response,
          message: response?.message,
        });
      }
    } catch (err) {
      setAlertData({ ...err, message: err?.message });
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Adding Edge System...
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Typography variant="h5" color="textSecondary">
        Quick Setup
      </Typography>
      <Paper elevation={2} className="p-4">
        <div className="flex gap-2 items-center">
          <div
            className="w-[40px] h-[40px] flex justify-center items-center rounded-full"
            style={{ backgroundColor: `${theme?.palette?.secondary?.["50"]}` }}
          >
            <AutoFixHigh
              sx={{ color: `${theme?.palette?.secondary?.["A200"]}` }}
            />
          </div>
          <Typography>Edge System Wizard</Typography>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 mt-4">
            <Typography variant="body1">Add RO</Typography>
            <Typography variant="body2" color="textSecondary">
              Connect to your Docker Standalone environment.
            </Typography>
          </div>

          <Typography variant="body1">
            Connect to existing environments
          </Typography>

          <Box className="">
            <TextField
              type="text"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. RO1"
              color="secondary"
              required
              className="w-full md:w-[300px]"
            />
          </Box>
          <Box className="">
            <TextField
              type="text"
              label="Portainer API server URL"
              name="apiUrl"
              value={formData.apiUrl}
              onChange={handleInputChange}
              placeholder={apiPlaceholder}
              color="secondary"
              required
              className="w-full md:w-[300px]"
            />
          </Box>
          <div className="flex flex-col gap-2">
            <Typography variant="body1">Metadata</Typography>
            <FormControl className="w-full md:w-[300px]">
              <InputLabel id="group-label" color="secondary">
                Group
              </InputLabel>
              <Select
                labelId="group-label"
                id="poll-frequency"
                name="groupId"
                value={formData.groupId}
                label="Group"
                color="secondary"
                onChange={handleInputChange}
              >
                {groups &&
                  groups.map((group) => (
                    <MenuItem value={group?.Id} key={group?.Id}>
                      {group?.Name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl className="w-full md:w-[300px]">
              <InputLabel id="tags-label" color="secondary">
                Tags
              </InputLabel>
              <Select
                labelId="tags-label"
                id="tags-select"
                multiple
                name="tagIds"
                renderValue={(selected) =>
                  tags
                    .filter((tag) => selected.includes(tag?.ID))
                    .map((tag) => tag?.Name)
                    .join(", ")
                }
                label="Tags"
                color="secondary"
                value={formData.tagIds}
                onChange={handleInputChange}
              >
                {tags.map((tag) => (
                  <MenuItem key={tag?.ID} value={tag?.ID}>
                    <Checkbox
                      checked={formData.tagIds.includes(tag?.ID)}
                      color="secondary"
                    />
                    <ListItemText primary={tag?.Name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button
            color="secondary"
            variant="contained"
            className="md:w-[150px] mt-4"
            disabled={formData.name == "" || formData.apiUrl == ""}
            onClick={handleConnect}
          >
            Connect
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default AddEdgeSystem;
