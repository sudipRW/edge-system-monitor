import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PortainerContext } from "../context-api/PortainerContext";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  ComputerOutlined,
  MonitorHeart,
  TaskAlt,
  PowerSettingsNew,
  LocalOfferOutlined,
} from "../assets/icons";
import DockerImage from "../assets/docker.svg";
import { useTheme } from "@mui/styles";
const Home = () => {
  const { fetchAllEdgeSystems, _ping, fetchAllGroups, fetchAllTags } =
    useContext(PortainerContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [systems, setSystems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [groups, setGroups] = useState({});
  const [tags, setTags] = useState({});

  // Fetch environments on component mount
  useEffect(() => {
    const fetchEnvironments = async () => {
      try {
        const data = await fetchAllEdgeSystems();
        setSystems(data);
        const groupsData = await fetchAllGroups();
        const tagsData = await fetchAllTags();
        
        groupsData?.map((group) => {
          if (!groups[group?.Id]) {
            groups[group?.Id] = group?.Name
          }
        });
        setGroups(groups)

        tagsData?.map((tag) => {
          if(!tags[tag?.ID]){
            tags[tag?.ID] = tag?.Name
          }
        });
        setTags(tags)
      } catch (err) {
        setError("Failed to load environments");
      } finally {
        setLoading(false);
      }
    };

    fetchEnvironments();
  }, []);

  const handleEdgeSystemClick = async (system) => {
    setLoading(true);
    try {
      const data = await _ping(system?.Id);
      if (data === "OK") {
        setLoading(false);
        sessionStorage.setItem(
          "edgeSystemState",
          JSON.stringify({
            edgeSystemId: system?.Id,
            edgeSystemName: system?.Name,
          })
        );
        navigate(`/dashboard/${system?.Id}`);
      } else if (
        data?.message === "No Edge agent registered with the environment"
      ) {
        setLoading(false);
        navigate(`/edge-system/${system?.Id}/info`);
      } else {
        setError(data?.message);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <CircularProgress color="secondary" />
        <Typography variant="body1" color="textSecondary" sx={{ ml: 2 }}>
          Connecting to edge system...
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pb-4">
      <Typography variant="h5">
        Home
      </Typography>
      {error && <p>{error}</p>}
      <div className="environment">
        <Card className="p-4 flex flex-col gap-2">
          <div className="environments-header flex items-center gap-4">
            <ComputerOutlined sx={{ scale: 1.2 }} />
             <Typography variant="h6" color="textSecondary">Edge Systems</Typography>
          </div>
          <div className="flex flex-col gap-4">
            {systems.map((system) => (
              <Card
                className="edge-system flex border-2 rounded-md cursor-pointer"
                elevation={0}
                sx={{
                  ":hover": {
                    border: `${theme?.palette?.secondary?.["A200"]} 2px solid`,
                    backgroundColor: `${theme?.palette?.secondary?.["50"]}`,
                  },
                }}
                onClick={() => handleEdgeSystemClick(system)}
              >
                <div className="flex justify-center items-center p-2">
                  <img src={DockerImage} alt="" className="w-full" />
                </div>
                <div className="w-[90%] p-2 flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <Typography variant="h6">{system?.Name}</Typography>
                    {system.Name === "local" && (
                      <div
                        className={`flex gap-1 p-1 justify-center items-center rounded-md`}
                        style={{
                          border:
                            system?.Status === 1
                              ? `${theme?.palette?.success?.main} 2px solid`
                              : `${theme?.palette?.error?.main} 2px solid`,
                        }}
                      >
                        {system?.Status === 1 ? (
                          <TaskAlt color="success" />
                        ) : (
                          <TaskAlt color="error" />
                        )}
                        <p>{system?.Status === 1 ? "Up" : "Down"}</p>
                      </div>
                    )}
                    {system.Name !== "local" && system?.EdgeID && (
                      <div className="">
                        {system?.Heartbeat ? (
                          <div
                            className={`flex gap-1 p-1 justify-center items-center rounded-md`}
                            style={{
                              border: `${theme?.palette?.success?.main} 2px solid`,
                            }}
                          >
                            <MonitorHeart
                              color="success"
                              sx={{ width: "20px", height: "20px" }}
                            />
                            <Typography variant="body2">heartbeat</Typography>
                          </div>
                        ) : (
                          <div
                            className={`flex gap-1 p-1 justify-center items-center rounded-md`}
                            style={{
                              border: `${theme?.palette?.error?.main} 2px solid`,
                            }}
                          >
                            <MonitorHeart
                              color="error"
                              sx={{ width: "20px", height: "20px" }}
                            />
                            <Typography variant="body2">heartbeat</Typography>
                          </div>
                        )}
                      </div>
                    )}
                    {system.Name !== "local" && !system?.EdgeID && (
                      <div
                        className={`flex gap-1 p-1 justify-center items-center rounded-md`}
                        style={{
                          border: `${theme?.palette?.primary?.dark} 2px solid`,
                        }}
                      >
                        <Typography variant="body2">Not Associated</Typography>
                      </div>
                    )}
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.Time
                        ? new Date(
                            system?.Snapshots[0]?.Time * 1000
                          ).toLocaleString()
                        : "N/A"}
                    </Typography>
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.DockerVersion}
                    </Typography>
                    <Typography variant="body2">{system?.URL}</Typography>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Typography color="textSecondary" variant="body2">
                      {"Group: "}
                      {groups[system?.GroupId]}
                    </Typography>
                    <div className="flex gap-1 items-center">
                      <LocalOfferOutlined
                        color="disabled"
                        sx={{ width: "20px" }}
                      />
                      {system?.TagIds.map((tag) => (
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >{tags[tag]}</Typography>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.StackCount}
                      {" stacks"}
                    </Typography>
                    <div className="flex gap-2 items-center">
                      <Typography variant="body2">
                        {system?.Snapshots[0]?.ContainerCount}
                        {" containers"}
                      </Typography>
                      <PowerSettingsNew
                        sx={{ width: "20px" }}
                        color="success"
                      />
                      <p>{system?.Snapshots[0]?.RunningContainerCount}</p>
                      <PowerSettingsNew sx={{ width: "20px" }} color="error" />
                      <p>{system?.Snapshots[0]?.StoppedContainerCount}</p>
                    </div>
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.ImageCount}
                      {" images"}
                    </Typography>
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.VolumeCount}
                      {" volumes"}
                    </Typography>
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.TotalCPU}
                      {" CPU"}
                    </Typography>
                    <Typography variant="body2">
                      {system?.Snapshots[0]?.TotalMemory
                        ? (
                            system?.Snapshots[0]?.TotalMemory / 1073741824
                          ).toFixed(2) + " GB"
                        : "N/A"}
                      {" RAM"}
                    </Typography>
                  </div>
                  <div className=""></div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <span className="text-gray-500">Items per page</span>
            <select className="ml-2 border border-gray-300 rounded-md p-1">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
