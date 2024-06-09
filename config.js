const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743047464";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_06_34_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMWxqdG5KeUdDV0RpaFh1NUtqMWtzRzB4NFJ2d0FhZTVUOTcyRkcwOUpzWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWml6SG14YklSVHlXNlpYdmdMd0tDZ1wiLFxuICBcInBob25lSWRcIjogXCI1NmVhN2I5MS1iNzQyLTQ1ZWQtYmU0MS1kNjBmMjRhYjU2MDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDU1LFxuICAgICAgOTksXG4gICAgICAyMzAsXG4gICAgICA0OCxcbiAgICAgIDE4MyxcbiAgICAgIDIyLFxuICAgICAgMTksXG4gICAgICA2OCxcbiAgICAgIDIxMyxcbiAgICAgIDE0MyxcbiAgICAgIDE2MyxcbiAgICAgIDU0LFxuICAgICAgOTQsXG4gICAgICAyMDAsXG4gICAgICAyMTcsXG4gICAgICAxNCxcbiAgICAgIDI4LFxuICAgICAgODEsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA4OSxcbiAgICAgIDUyLFxuICAgICAgMjUyLFxuICAgICAgMTg3LFxuICAgICAgMjE1LFxuICAgICAgNDMsXG4gICAgICA1MyxcbiAgICAgIDIxNixcbiAgICAgIDE1OSxcbiAgICAgIDE0MixcbiAgICAgIDE3NyxcbiAgICAgIDE0NixcbiAgICAgIDEzNSxcbiAgICAgIDQ3LFxuICAgICAgNjEsXG4gICAgICAxNDYsXG4gICAgICAxNDQsXG4gICAgICAxNjksXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMllNVjVZWE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MzA0NzQ2NDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9fX1/igKJgYGBgYGBgYFxcXFzDh1JJU1BVU35+IX7Dh1LDj1p9LS0tLS0tLS1cIixcbiAgICBcImxpZFwiOiBcIjI0Mjk3OTUwMzY0ODk2NDozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSEN4cnNERU4yWmxiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZXNEgrMlVDVUFlVkhtcVd5dkx6bWtXS3pWMTkyRVgvcFV3Tm5TZmRwanM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUVLS25CNEF0L05FazFmbFhRVHBSRDNZOFQ0MVNGTHN6NlVnOVJJZEJEaXpwQ2RzdFZJNVB6bUIyVTZsNGVwaWthdUFRY0p2QUlJNUZTaXR1Y0lwQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmkySEVvY1lkTkprNXJ0RllmVFhCY1ozcVBIVVUvNDd1VXgzZE1nQXQ0enhSTVNNdy8vVm9IOEFTdEpFaVlTODhYV20vTDVjRnBHaXN5bEhFRnhXaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzMDQ3NDY0OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTE0ODQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkFxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6ZjRueU1PdisvN2JQRWdMVlkrTm4rUFFIUE9VTlNUNFF5MnF3U2dEUVBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMDE5Mzc0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
