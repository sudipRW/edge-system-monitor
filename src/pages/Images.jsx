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
import { ImageOutlined } from "../assets/icons";
import { useTheme } from "@mui/material/styles";
import { PortainerContext } from "../context-api/PortainerContext";
import { useParams } from "react-router-dom";

const ImagesTable = () => {
  const theme = useTheme();
  const { fetchAllImages } = useContext(PortainerContext);
  const [allImages, setAllImages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllImages(id);
      console.log(data);
      setAllImages(data);
    };
    fetchData();
  }, []);
  console.log(theme);

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
            <ImageOutlined color="secondary" />
          </div>
          <h2 className="text-xl font-semibold">Images</h2>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-2 text-sm"
        />
        <Button variant="contained" color="secondary" className="ml-2">
          Build a new image
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>id</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allImages &&
            allImages.map((image) => (
              <TableRow key={image.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell
                  className="cursor-pointer hover:underline"
                  sx={{ color: `${theme.palette.info.main}` }}
                >
                  {abbreviateHash(image?.Id)}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-md text-white`}
                    style={{
                      backgroundColor: `${theme.palette.secondary.dark}`,
                    }}
                  >
                    {image?.RepoTags[0]}
                  </span>
                </TableCell>
                <TableCell>{(image?.Size / 1048576).toFixed(2) + " MB"}</TableCell>
                <TableCell>{formatTimestamp(image?.Created)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function Images() {
  return (
    <div className="container mx-auto p-4">
      <ImagesTable />
    </div>
  );
}
