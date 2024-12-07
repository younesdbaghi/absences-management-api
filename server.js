const express = require("express");
const absenceRoutes = require("./routes/absenceRoutes");

const app = express();
app.use(express.json());

app.use("/absences", absenceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});