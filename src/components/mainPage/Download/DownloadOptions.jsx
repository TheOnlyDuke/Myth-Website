import GooglePLay from "../../../../public/images/Download/GooglePlay.png";
import AppStore from "../../../../public/images/Download/AppStore.png";
import DirectDownload from "../../../../public/images/Download/DirectDownload.png";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function DownloadOptions() {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        width: "320px",
        marginTop: "20px",
        "& img": {
          cursor: "pointer",
        },
      }}
    >
      <Grid item xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={GooglePLay}
            width={150}
            height={50}
            alt="Google PLay Download Link"
          />
        </a>
      </Grid>
      <Grid item xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={AppStore}
            width={150}
            height={50}
            alt="App Store Download Link"
          />
        </a>
      </Grid>
      <Grid item xs={6}>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={DirectDownload}
            width={150}
            height={50}
            alt="Direct Download Link"
          />
        </a>
      </Grid>
    </Grid>
  );
}
