import React, { useState, useEffect, useContext } from "react";
import { Typography, Paper, Box, TextField, Button } from "@mui/material";
import { PortainerContext } from "../context-api/PortainerContext";

const AddGroup = () => {
  const { createGroup } = useContext(PortainerContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateGroup = async () => {
    try {
      const data = await createGroup(formData);
      if (data) {
        setFormData({
          name: "",
          description: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(formData);
  return (
    <div className="pb-4 flex flex-col gap-2">
      <Typography variant="h5">Create group</Typography>
      <Paper elevation={2} className="p-4 flex flex-col gap-4">
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
        <Box className="">
          <TextField
            fullWidth
            type="text"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder={""}
            color="secondary"
          />
        </Box>
        <Button
          color="secondary"
          variant="contained"
          className="md:w-[200px] mt-4"
          disabled={formData.name == ""}
          onClick={handleCreateGroup}
        >
          Create the Group
        </Button>
      </Paper>
    </div>
  );
};

export default AddGroup;
