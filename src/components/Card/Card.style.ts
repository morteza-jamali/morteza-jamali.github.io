import { css } from "glamor";

const styles = (image: string) => ({
  card: css({
    "& .book-cover": {
      backgroundImage: `url(${image})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    "& header h2": {
      fontSize: "15px",
      fontWeight: "600",
    },
  }),
  loadingShape: css({
    "& div": {
      width: "100% !important",
      height: "100% !important",
      padding: "2rem",
      "& svg": {
        width: "35%",
      },
    },
  }),
});

export default styles;
