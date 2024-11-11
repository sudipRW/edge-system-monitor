import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { Group, Segment } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { PortainerContext } from "../context-api/PortainerContext";
import { AlertContext } from "../context-api/AlertContext";
const Tags = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchAllTags, createTag, deleteTag } = useContext(PortainerContext);
  const { setAlertData } = useContext(AlertContext);
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [createdTag, setCreatedTag] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagsToBeDeleted, setTagsToBeDeleted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tagsData = await fetchAllTags();
        setTags(tagsData);
      } catch (err) {
        setError("Failed to load tags");
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [createdTag, tagsToBeDeleted]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handelCreateTag = async () => {
    try {
      const response = await createTag(name);
      if (response.data) {
        setCreatedTag(response.data);
        setAlertData({...response,message: "Tag Created Successfully."});
        setName("");
      }
    } catch (err) {
      setAlertData({...err,message: err?.message});
      console.log(err);
    }
  };

  const handleCheckboxChange = (e) => {
    setTagsToBeDeleted((prevData) => {
      const isChecked = e.target.checked;
      const tagId = parseInt(e.target.value);

      if (isChecked) {
        // Add the ID if checked and not already in the array
        return [...prevData, { id: tagId }];
      } else {
        // Remove the ID if unchecked
        return prevData.filter((item) => item.id !== tagId);
      }
    });
  };

  const handleDeleteTags = async () => {
    setLoading(true);
    try {
      tagsToBeDeleted.map(async (tag) => {
        const response = await deleteTag(tag?.id);
        if (response) {
          setAlertData({...response,message: "Tags Deleted Successfully."});
        }
      });
      setLoading(false);
      setTagsToBeDeleted([]);
    } catch (err) {
      setLoading(false);
      setAlertData({...err,message: err?.message});
      console.log(err?.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Deleting Tags...
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Typography variant="h5">Tags</Typography>
      <div className="">
        <Paper elevation={2} className="p-4 flex flex-col gap-2">
          <Typography color="textSecondary">Add a new Tag</Typography>
          <Box className="">
            <TextField
              fullWidth
              required
              type="text"
              label="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder=""
              color="secondary"
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handelCreateTag}
            className="md:w-[200px] mt-4"
            disabled={name == ""}
          >
            + Create Tag
          </Button>
        </Paper>
      </div>
      <div className="">
        <Paper elevation={2} className="p-4">
          <div className="flex justify-between items-center">
            <Typography color="textSecondary">Tags</Typography>

            {/* Search bar */}
            <div className="flex items-center space-x-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: <Search />,
                }}
                className="w-64"
              />
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteTags}
              >
                Remove
              </Button>
            </div>
          </div>

          {/* Table */}
          <TableContainer className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox color="secondary" />
                  </TableCell>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tags &&
                  tags.map((tag) => (
                    <TableRow key={tag?.ID}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="secondary"
                          name="tagId"
                          value={tag?.ID}
                          onChange={handleCheckboxChange}
                        />
                      </TableCell>
                      <TableCell>{tag?.Name}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <div className="flex justify-end mt-4">
            <span className="text-gray-500">Items per page</span>
            <select className="ml-2 border border-gray-300 rounded-md p-1">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Tags;
