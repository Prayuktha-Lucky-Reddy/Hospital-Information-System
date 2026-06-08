const oracledb = require('oracledb');
async function test() {
  try {
    const conn = await oracledb.getConnection({
      user: "HOSP",
      password: "password",
      connectString: "127.0.0.1:1521/FREEPDB1"
    });
    console.log("Connection Success!");
    await conn.close();
  } catch (err) {
    console.error("Connection Failed:", err.message);
  }
}
test();