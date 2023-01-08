import LikeIcon from "@mui/icons-material/ThumbUp";
import DislikeIcon from "@mui/icons-material/ThumbDownAlt";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import getRandomChiste from "./service/axiosService";

export const Chistes = () => {
  const [chiste, setChiste] = useState(null);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    getNewChiste();
  }, []);

  const getNewChiste = async () => {
    getRandomChiste()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.value);
          setChiste(res.data.value);
        }
      })
      .catch((er) => alert(er));
  };

  const getLike = () => {
    setLike(like + 1);
  };
  const getDislike = () => {
    setDislike(dislike + 1);
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: "#29aae1",
            color: "black",
            fontWeight: "bold",
            marginRight: 10,
          },
        },
      },
    },
  });
  const theme2 = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#29aae1",
            fontWeight: "bold",
            marginRight: 10,
          },
        },
      },
    },
  });

  return (
    <div>
      <p className="styleChiste">{chiste}</p>
      <div className="btns">
        <ThemeProvider theme={theme}>
          <Button variant="contained" onClick={() => getNewChiste()}>
            New Joke
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme2}>
          <Button
            variant="outlined"
            startIcon={<LikeIcon />}
            onClick={() => getLike()}
          >
            {like}
          </Button>
          <Button
            variant="outlined"
            startIcon={<DislikeIcon />}
            onClick={() => getDislike()}
          >
            {dislike}
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
