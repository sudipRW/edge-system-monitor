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
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Group, Segment } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { PortainerContext } from "../context-api/PortainerContext";

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchAllGroups, deleteGroup } = useContext(PortainerContext);
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groupsToBeDeleted, setGroupsToBeDeleted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await fetchAllGroups();
        console.log(groupsData);
        setGroups(groupsData);
      } catch (err) {
        setError("Failed to load groups");
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [groupsToBeDeleted]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    setGroupsToBeDeleted((prevData) => {
      const isChecked = e.target.checked;
      const groupId = parseInt(e.target.value);

      if (isChecked) {
        // Add the ID if checked and not already in the array
        return [...prevData, { id: groupId }];
      } else {
        // Remove the ID if unchecked
        return prevData.filter((item) => item.id !== groupId);
      }
    });
  };

  const handleDeleteGroups = async () => {
    setLoading(true);
    try {
      groupsToBeDeleted.map(async (group) => {
        const data = await deleteGroup(group?.id);
      });
      setLoading(false);
      setGroupsToBeDeleted([]);
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
          Deleting Groups...
        </Typography>
      </div>
    );
  }

  console.log(groupsToBeDeleted);
  return (
    <div className="flex flex-col gap-2 pb-4">
      <Typography variant="h5">Groups</Typography>
      <Paper elevation={2} className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Typography color="textSecondary">Groups</Typography>

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
              onClick={handleDeleteGroups}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/groups/create")}
            >
              + Add Group
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups &&
                groups.map((group) => (
                  <TableRow key={group?.Id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="secondary"
                        name="groupId"
                        value={group?.Id}
                        onChange={handleCheckboxChange}
                      />
                    </TableCell>
                    <TableCell>
                      <a
                        href={`group/${group?.Id}/info`}
                        className="text-blue-500"
                      >
                        {group?.Name}
                      </a>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Group />
                      </IconButton>
                      <span>Manage access</span>
                    </TableCell>
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
  );
};

export default Groups;
