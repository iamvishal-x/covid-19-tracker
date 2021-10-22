import { Card, CardContent, Typography } from "@mui/material";
import "./InfoBox.css";
const InfoBox = ({ title, cases, active, total, ...props }) => {
  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* noof cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
