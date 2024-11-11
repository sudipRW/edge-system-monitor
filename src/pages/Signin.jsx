import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { ThemeContext } from "../context-api/ThemeContext";
import { AuthContext } from "../context-api/AuthContext";
import fueltransLogo from "../assets/Fueltrans-logo.svg";

const Signin = () => {
  const { handleAuthentication } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleAuthentication(username, password); // Call the context function
      navigate("/home"); // Redirect after successful login
    } catch (error) {
      setErrorMessage(error.message); // Set error message if authentication fails
    }
  };

  return (
    <Container className="w-screen h-screen flex justify-center items-center">
      <Card className="sm:w-[50%] p-10 flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <img src={fueltransLogo} alt="" className="w-[200px]"/>
          <Typography variant="h5">Edge System Monitor</Typography>
        </div>
        <CardContent>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className="rounded-md flex flex-col w-full"
          >
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              sx={{ margin: "1rem 0", display: "block" }}
              label="Username"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
            {/* <FormControl>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            label="Role"
            onChange={handleChange}
            required
          >
            <MenuItem value={"user"}>User</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"superadmin"}>Super Admin</MenuItem>
          </Select>
        </FormControl> */}

            <TextField
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ margin: "1rem 0", display: "block" }}
              label="Password"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            />
            {errorMessage && (
              <Alert severity="error" sx={{ marginBottom: "1rem" }}>
                {errorMessage}
              </Alert>
            )}
            <Button type="submit" variant="contained" color="secondary">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signin;
