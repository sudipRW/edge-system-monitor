import React, { useContext, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  Button,
  CircularProgress,
  Typography
} from "@mui/material";
import {
  PlayArrow,
  Stop,
  Delete,
  Info,
  InsertLink,
  Layers,
  Settings,
  ViewInArOutlined,
} from "../assets/icons";
import { useTheme } from "@mui/material/styles";
import { PortainerContext } from "../context-api/PortainerContext";
import { useParams } from "react-router-dom";

const ContainerTable = ({ containers }) => {
  const theme = useTheme();
  const { fetchAllContainers } = useContext(PortainerContext);
  const [allContainers, setAllContainers] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const data = await fetchAllContainers(id);
        console.log(data)
        setAllContainers(data);
      } catch (e) {
        console.error("Error fetching edge system:", e);
      } finally {
        setTimeout(() => {
          setLoading(false); // End loading after delay
        }, 500); // 1-second delay (can be adjusted)
      }
    };
    fetchData();
  }, [id, fetchAllContainers]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Loading...
        </Typography>
      </div>
    );
  }

  const formatTimestamp = (unixTimestamp) => {
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
    <TableContainer
      component={Paper}
      className="shadow-lg rounded-lg overflow-hidden"
    >
      <div className="flex items-center p-4 gap-2">
        <div className="flex items-center gap-2 flex-grow">
          <div
            className="flex justify-center items-center p-2 w-[40px] h-[40px] rounded-full"
            style={{ backgroundColor: `${theme?.palette?.secondary?.["50"]}` }}
          >
            <ViewInArOutlined color="secondary" />
          </div>
          <h2 className="text-xl font-semibold">Containers</h2>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2 text-sm"
        />
        <Button variant="contained" color="secondary" className="ml-2">
          + Add container
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Quick Actions</TableCell>
            <TableCell>Stack</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>IP Address</TableCell>
            <TableCell>Published Ports</TableCell>
            <TableCell>Ownership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allContainers &&
            allContainers.map((container) => (
              <TableRow key={container.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell
                  className="cursor-pointer hover:underline"
                  sx={{ color: `${theme.palette.info.main}` }}
                >
                  {container?.Names[0]}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-white`}
                    style={{
                      backgroundColor: `${
                        container?.State === "running"
                          ? theme.palette.success.light
                          : container?.State === "created"
                          ? theme.palette.info.light
                          : theme.palette.error.light
                      }`,
                    }}
                  >
                    {container?.State}
                  </span>
                </TableCell>
                <TableCell>
                  <Tooltip title="Info">
                    <IconButton size="small">
                      <Info fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Stats">
                    <IconButton size="small">
                      <InsertLink fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Logs">
                    <IconButton size="small">
                      <Layers fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Settings">
                    <IconButton size="small">
                      <Settings fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>{container?.Image}</TableCell>
                <TableCell>{formatTimestamp(container?.Created)}</TableCell>
                <TableCell>
                  {container?.NetworkSettings?.Networks?.bridge?.IPAddress}
                </TableCell>
                <TableCell>
                  {container?.Ports ? (
                    <a
                      href={`http://localhost:${container?.Ports[0]?.PublicPort}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: `${theme.palette.info.main}` }}
                      className="hover:underline"
                    >
                      {container?.Ports[0]?.PublicPort}
                    </a>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>administrator</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function Containers() {
  return (
    <div className="container mx-auto p-4">
      <ContainerTable />
    </div>
  );
}
