const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_38_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCOHRia0R1Vk9DVjdUL3RuNUF4bXJEZktVRjA3ZDk2Y3NRWXI0NHFieDU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTY2NDQzNDY0RkE0MTFERDU1QTU2QjA1RjdCODMyQjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzUzMDgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1N0FBODg2OTI0OTMyODUzMUY3MUZCOEU4NTIyNEEzNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNTMwODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT3NQYmExeGtUTDZzM0I4MEQ1a2VhQVwiLFxuICBcInBob25lSWRcIjogXCIzYzY2NDJjZi02NjhjLTQ4OWYtYTU2MC1jZTZmMDAxOTBjZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgNDcsXG4gICAgICA4LFxuICAgICAgMTY4LFxuICAgICAgMjA3LFxuICAgICAgOTQsXG4gICAgICA3MyxcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgMTcxLFxuICAgICAgMTUsXG4gICAgICA3LFxuICAgICAgMTk1LFxuICAgICAgMjI4LFxuICAgICAgNDYsXG4gICAgICA1NCxcbiAgICAgIDE5NixcbiAgICAgIDQ0LFxuICAgICAgMTI5LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDI1NSxcbiAgICAgIDE4MCxcbiAgICAgIDAsXG4gICAgICA4MCxcbiAgICAgIDEyOCxcbiAgICAgIDE5NCxcbiAgICAgIDE0OSxcbiAgICAgIDYxLFxuICAgICAgMTg5LFxuICAgICAgNzMsXG4gICAgICAxNTksXG4gICAgICAyMTgsXG4gICAgICA1MyxcbiAgICAgIDIyNSxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDE4MSxcbiAgICAgIDEzNCxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJISjQ3OVo3WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxMDAzMDcxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBQkRcIixcbiAgICBcImxpZFwiOiBcIjI0NDUyNTY5MTg3MTI1Nzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQS3JyY0JFUGFHNTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU0FMZzVVZ3IyOExZbkdzNXhEWGp3NkRacW9GSzBsVVRDRkZsemUwK1dCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5UUtxVVVTd01jTTRid3NVSTF2QUFFYjZESHFjdjVGUXVueDFiRjFseW94bWZnd3hDNmg3T0NLOXZjR2ovbGZDVHJMNndydnp2QVBCQWcybm5EajVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRSEx4MzhKckR2Sm53SlBoa3Z0c3hWRUkwUEI3NFpnc2VoYmtqM3FJcmIxY1dQdVdITzhTcStwekI0ZmhoWEY3cG4wUU5NQmpIank5WDNDbGNZUXhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzEwMDMwNzE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzUzMDgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTFYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYa2dlcTlMejFtdzBsSkloTmg4eVZxNVM2bGVOZlVnWW9MQm5zNGl5K3ZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4NDU0MjA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzUzMDgxOTcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
