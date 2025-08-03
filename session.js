//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0t6Um9ZU2xkc0N2RkRLckIrem5ib3c3d3R1elZrUGtvbVUzM3F1WENGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnJveDA1SkNoY1IzakEwUWdldldud0o5YWJ5a0Z3dys0VEFhRjd1dEIxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRStjVU9ndE9rV2dWQnlxWC9UMTZSejhvV2wrUHp1VG41bkNkRmpHZ1ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ZllGamMwM0ZzdXZQTFRxSU5CdExSVFFVZmkyWldEZVlnRlNLbzJkSVdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHL0wzT1pYWG9WWDRJclFyK0tpL2p0REtJTDhQaWo0eVJXd0s5UGYxM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUvOWROa2Q3TW5PbWIrWGIySGo5Tkl6MStlMzZtSU5SQlRweFhCL0I4M2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT056MWllQVN5d0RhUHRhK2FMaTB4aS9TajQxVFhGR0xnNFI2bkt6aVJrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzRJS00wZnZheXozTUxkeE52Q21WQlVLSmdhTlpJb2M2WFluQThNbEFuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBGZklyTnZGT2JYQ0hPM2p1QXdSTWFIa1VvQ09NWEF4NXhqV2pZN1hwdUR1ZWgycTBuYTIzSW5vbnBLWFB2emplTXgwZzJieTNjTzBwZGFYYWRyMGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJnOHU4eFdDY2hobnU2aENxSCtLcTk1RUY2cjkzTVFTZXlCamg1VGVmdVFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTMzMDM1MzU2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERjZBRDhDOUMyNUIwNUZDMjhENTE2QUU3OTYwNDEyMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0MjYzODk0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYOXAxNVRDU1NWYVY3VVQzZmlDMTBnIiwicGhvbmVJZCI6Ijg2YTY4M2VkLTAyZjQtNDJkNy1hNjFlLTBhMGZhOTBhYTYzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyYzVsL1hsVnpQY0s5ektBbVVWbFQ0UklXZjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXB3NmczYlcwQ3ZISXp5VDZ3SnY1NzJ5YlFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko1Q05GTFA5IiwibWUiOnsiaWQiOiI5MTkzMzAzNTM1Njc6MjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MTYxNjA2NDg5MzA0MjoyOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083M3VKd0RFTVRpdjhRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilh1N0F5TE1lUVd4RUhQSHZ6d1JNbGNOTDZYMUppNHh4L1h3V1k5dmc3SGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRCSmNpZFNEb1dIZU5WVUpJUjFITVhjVFpRZ0YxelN2Si81V1Jzek5RYWdSOXV2WFNXSWFFWCtCV05PUy9pWnJhR0tzelJLeWtVWE1TeG5jSlJBV0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYMjNoWnpobzM5T2U5T3FOSTdzWGUxenQyYzFIZklIWW5POUczcW1pOHBMUUV4U3p1aWRzMDVCMUxMS2lSb05MZXVFNjlVUmoxdmRYTEVMYWx2cGtqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTMzMDM1MzU2NzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWN3V3TWl6SGtGc1JCeng3ODhFVEpYRFMrbDlTWXVNY2YxOEZtUGI0T3gzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQyNjM4ODksImxhc3RQcm9wSGFzaCI6IjRaUlA2UyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQU9qIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "919330353567",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["919330353567", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
