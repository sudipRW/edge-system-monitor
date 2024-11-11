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
import DockerIcon from "../assets/docker.svg";
import { AlertContext } from "../context-api/AlertContext";

const EdgeSystems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [edgeSystems, setEdgeSystems] = useState([]);
  const { fetchAllEdgeSystems, fetchAllGroups, deleteEdgeSystems } =
    useContext(PortainerContext);
  const { setAlertData } = useContext(AlertContext);
  const navigate = useNavigate();
  const [groups, setGroups] = useState({});
  const [edgeSystemsToBeDeleted, setEdgeSystemsToBeDeleted] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllEdgeSystems();
        const groupsData = await fetchAllGroups();
        groupsData?.map((group) => {
          if (!groups[group?.Id]) {
            groups[group?.Id] = group?.Name;
          }
        });
        setGroups(groups);
        setEdgeSystems(data);
      } catch (err) {
        setError("Failed to load environments");
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [edgeSystemsToBeDeleted]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setEdgeSystemsToBeDeleted((prevData) => {
      const isChecked = e.target.checked;
      const systemId = parseInt(e.target.value);

      if (isChecked) {
        // Add the ID if checked and not already in the array
        return [...prevData, { id: systemId }];
      } else {
        // Remove the ID if unchecked
        return prevData.filter((item) => item.id !== systemId);
      }
    });
  };

  const handleDeleteEdgeSystems = async () => {
    setLoading(true);
    try {
      const response = await deleteEdgeSystems(edgeSystemsToBeDeleted);
      console.log(response);
      setEdgeSystemsToBeDeleted([]);
      setLoading(false);
      setAlertData({
        ...response,
        message: "Edge Systems Deleted Successfully.",
      });
    } catch (err) {
      setLoading(false);
      setAlertData({ ...err, message: err?.message });
      console.log(err?.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Deleting Edge Systems
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pb-4">
      <Typography variant="h5">Edge Systems</Typography>
      <Paper elevation={2} className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Typography color="textSecondary">Edge Systems</Typography>

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
              onClick={handleDeleteEdgeSystems}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/edge-systems/create")}
            >
              + Add Edge System
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
                <TableCell>Type</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>Group Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {edgeSystems &&
                edgeSystems.map((system) => (
                  <TableRow key={system?.Id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="secondary"
                        value={system?.Id}
                        name="edgeId"
                        onChange={handleCheckboxChange}
                      />
                    </TableCell>
                    <TableCell>
                      <a
                        href={`edge-system/${system?.Id}/info`}
                        className="text-blue-500"
                      >
                        {system?.Name}
                      </a>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center space-x-1">
                        <img
                          src={DockerIcon}
                          alt="Docker"
                          className="w-4 h-4"
                        />
                        <span>Docker</span>
                      </span>
                    </TableCell>
                    <TableCell>{system?.URL}</TableCell>
                    <TableCell>{groups[system?.GroupId]}</TableCell>
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

export default EdgeSystems;
