import checkConfig from "../../../lib/checkConfig";
const { Database } = require("quickmongo");
const db = new Database(process.env.DB_LINK);

export default function handle(req: any, res: any) {
  if (!db.connection) {
    db.on("ready", () => {
      console.log("Database connected");
    });
  } //30% chance in 100% chance this fix actually works
  if (!checkConfig())
    return res.status(500).json({
      error: 500,
      description: "JSBoard is currently not configured",
      configured: false,
    });
  return res.status(200).json({
    configured: true,
    users: ["TestAccount:0", "Blocks:1", "Quick:2"],
  });
}
