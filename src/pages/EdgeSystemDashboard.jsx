import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/styles";
import { Card, Typography, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SpeedOutlined } from "../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  LayersOutlined,
  ViewInArOutlined,
  LanOutlined,
  TextSnippetOutlined,
  ImageOutlined,
} from "../assets/icons";
import { PortainerContext } from "../context-api/PortainerContext";

const GridComponentItems = [
  {
    text: "Stacks",
    icon: <LayersOutlined color="secondary" />,
    path: `stacks`,
  },
  {
    text: "Containers",
    icon: <ViewInArOutlined color="secondary" />,
    path: `containers`,
  },
  {
    text: "Networks",
    icon: <LanOutlined color="secondary" />,
    path: `networks`,
  },
  {
    text: "Volumes",
    icon: <TextSnippetOutlined color="secondary" />,
    path: `volumes`,
  },
  {
    text: "Images",
    icon: <ImageOutlined color="secondary" />,
    path: `images`,
  },
];

const GridComponent = ({ item, theme, edgeSystem }) => {
  const navigate = useNavigate();
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        className="p-2 flex gap-4 border-2 items-center cursor-pointer"
        elevation={0}
        sx={{
          ":hover": {
            border: `${theme?.palette?.secondary?.["A200"]} 2px solid`,
            backgroundColor: `${theme?.palette?.secondary?.["50"]}`,
          },
        }}
        onClick={() => navigate(`/dashboard/${edgeSystem?.Id}/${item.path}`)}
      >
        <div
          className="flex justify-center items-center p-2 w-[40px] h-[40px] rounded-full"
          style={{ backgroundColor: `${theme?.palette?.secondary?.["50"]}` }}
        >
          {item?.icon}
        </div>
        <div className="flex flex-col">
          {item?.text === "Stacks" && (
            <Typography variant="h6">
              {edgeSystem?.Snapshots?.[0]?.StackCount}
            </Typography>
          )}
          {item?.text === "Containers" && (
            <Typography variant="h6">
              {edgeSystem?.Snapshots?.[0]?.ContainerCount}
            </Typography>
          )}
          {item?.text === "Networks" && (
            <Typography variant="h6">
              {edgeSystem?.Snapshots?.[0]?.DockerSnapshotRaw?.Networks?.length}
            </Typography>
          )}
          {item?.text === "Volumes" && (
            <Typography variant="h6">
              {edgeSystem?.Snapshots?.[0]?.VolumeCount}
            </Typography>
          )}
          {item?.text === "Images" && (
            <Typography variant="h6">
              {edgeSystem?.Snapshots?.[0]?.ImageCount}
            </Typography>
          )}
          <Typography variant="h6">{item?.text}</Typography>
        </div>
      </Card>
    </Grid>
  );
};

const EdgeSystemDashboard = () => {
  const theme = useTheme();
  const { id } = useParams();
  const { fetchEdgeSystem } = useContext(PortainerContext);
  const [edgeSystem, setEdgeSystem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const data = await fetchEdgeSystem(id);
        console.log(data)
        setEdgeSystem(data);
      } catch (e) {
        console.error("Error fetching edge system:", e);
      } finally {
        setTimeout(() => {
          setLoading(false); // End loading after delay
        }, 100); // 1-second delay (can be adjusted)
      }
    };

    fetchData();
  }, [id, fetchEdgeSystem]);

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

  if (!edgeSystem) {
    return <div className="text-center">Failed to fetch edge system</div>;
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Typography variant="h6" color="textSecondary">
        Dashboard
      </Typography>
      <Card className="p-6" elevation={1}>
        <div className="edge-system-info flex gap-2 items-center border-b-2 p-2">
          <div
            className="flex justify-center items-center w-[40px] h-[40px] rounded-full"
            style={{ backgroundColor: `${theme?.palette?.secondary?.["50"]}` }}
          >
            <SpeedOutlined
              sx={{ color: `${theme?.palette?.secondary?.["A200"]}}` }}
            />
          </div>
          <Typography variant="body1">Edge System Info</Typography>
        </div>
        <div className="flex items-center border-b-2 p-2">
          <Typography variant="body2 w-[30%]">Edge System</Typography>
          <div className="flex gap-2">
            <Typography variant="body2">{edgeSystem?.Name} </Typography>
            <Typography variant="body2">
              cpu: {edgeSystem?.Snapshots?.[0]?.TotalCPU}{" "}
            </Typography>
            <Typography variant="body2">
              ram:{" "}
              {edgeSystem?.Snapshots?.[0]?.TotalMemory
                ? (edgeSystem?.Snapshots?.[0]?.TotalMemory / 1073741824).toFixed(
                    2
                  ) + " GB"
                : "N/A"}
            </Typography>
            <Typography variant="body2">
              Standalone: {edgeSystem?.Snapshots?.[0]?.DockerVersion}{" "}
            </Typography>
          </div>
        </div>
        <div className="flex items-center border-b-2 p-2">
          <Typography variant="body2 w-[30%]">URL </Typography>
          <Typography variant="body2">{edgeSystem?.URL}</Typography>
        </div>
        <div className="flex items-center border-b-2 p-2">
          <Typography variant="body2 w-[30%]">GPU </Typography>
          <Typography variant="body2">none</Typography>
        </div>
        <div className="flex items-center p-2">
          <Typography variant="body2 w-[30%]">Tags </Typography>
          <Typography variant="body2">-</Typography>
        </div>
      </Card>
      <Grid container spacing={2}>
        {GridComponentItems.map((item,i) => (
          <GridComponent key={i} item={item} theme={theme} edgeSystem={edgeSystem} />
        ))}
      </Grid>
    </div>
  );
};

export default EdgeSystemDashboard;
