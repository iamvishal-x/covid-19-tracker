import { Card, CardContent, Typography } from "@mui/material";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        {/* title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* noof cases */}
        <h2 className="infoBox__cases">{cases}</h2>
        {/* total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
