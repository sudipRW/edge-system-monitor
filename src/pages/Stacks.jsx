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
} from "@mui/material";
import { Group, Segment } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { PortainerContext } from "../context-api/PortainerContext";

const Stacks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchAllStacks } = useContext(PortainerContext);
  const navigate = useNavigate();
  const [stacks, setStacks] = useState([]);
  const edgeSystemState = JSON.parse(sessionStorage.getItem("edgeSystemState"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stacksData = await fetchAllStacks(edgeSystemState?.edgeSystemId);
        console.log(stacksData);
        setStacks(stacksData);
      } catch (err) {
        setError("Failed to load stacks");
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const formatTimestamp = (unixTimestamp) => {
    if(unixTimestamp == 0){
      return "-"
    }
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col gap-2 pb-4">
      <Typography variant="h5">Stacks List</Typography>
      <Paper elevation={2} className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <Typography color="textSecondary">Stacks</Typography>

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
            <Button variant="contained" color="error">
              Remove
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/stacks/create")}
            >
              + Add Stack
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
                <TableCell>Control</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stacks &&
                stacks.map((stack) => (
                  <TableRow key={stack?.Id}>
                    <TableCell padding="checkbox">
                      <Checkbox color="secondary" />
                    </TableCell>
                    <TableCell>
                      <a
                        href={`stack/${stack?.Id}/info`}
                        className="text-blue-500"
                      >
                        {stack?.Name}
                      </a>
                    </TableCell>
                    <TableCell>{stack?.Type}</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>
                      {formatTimestamp(stack?.CreationDate) + " by " + stack?.CreatedBy}
                    </TableCell>
                    <TableCell>{formatTimestamp(stack?.UpdateDate)}</TableCell>
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

export default Stacks;
