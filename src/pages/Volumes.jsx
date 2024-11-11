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
} from "@mui/material";
import { TextSnippetOutlined } from "../assets/icons";
import { useTheme } from "@mui/material/styles";
import { PortainerContext } from "../context-api/PortainerContext";
import { useParams } from "react-router-dom";

const VolumesTable = () => {
  const theme = useTheme();
  const { fetchAllVolumes } = useContext(PortainerContext);
  const [allVolumes, setAllVolumes] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllVolumes(id);
      console.log(data?.Volumes);
      setAllVolumes(data?.Volumes);
    };
    fetchData();
  }, []);
  console.log(theme);

  const formatISODateString = (isoDateString) => {
    const date = new Date(isoDateString);

    // Get each date component and pad as needed
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    // Format into 'YYYY-MM-DD HH:MM:SS'
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
  const abbreviateHash = (hash) => {
    const prefix = hash.slice(0, 43); // sha256: + first 36 characters
    return `${prefix}...`;
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
            <TextSnippetOutlined color="secondary" />
          </div>
          <h2 className="text-xl font-semibold">volumes</h2>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2 text-sm"
        />
        <Button variant="contained" color="secondary" className="ml-2">
          Add volume
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Stack</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Mount Point</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Ownership</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allVolumes &&
            allVolumes.map((volume) => (
              <TableRow key={volume.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell
                  className="cursor-pointer hover:underline"
                  sx={{ color: `${theme.palette.info.main}` }}
                >
                  {abbreviateHash(volume?.Name)}
                </TableCell>
                <TableCell>{volume?.Driver}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{abbreviateHash(volume?.Mountpoint)}</TableCell>
                <TableCell>{formatISODateString(volume?.CreatedAt)}</TableCell>
                <TableCell>administrator</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function Volumes() {
  return (
    <div className="container mx-auto p-4">
      <VolumesTable />
    </div>
  );
}
