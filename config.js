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
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_26_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhVU5JeEhqTkJlU1NhUnNVRlV3bHd2VTEvMEY3R2tJNElxOEJpeEhPYlVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTNFRjg4MjU1Qjk2ODk2NTAzMDg5NTU4NzM2OEM2OUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzM3OTU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNDc2MEMyNDFGNjg3MzRCMzYyREIyNjIwQjIyOEI3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMzc5NTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaDdhelZsUzFSLUNEUVQ4MmdobEZ4Z1wiLFxuICBcInBob25lSWRcIjogXCIwZDdiOWE4OC1jM2FlLTRhYWUtYWFlYS04ZGQ5ZDkzNWY2ZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNTQsXG4gICAgICAxNjYsXG4gICAgICA5NixcbiAgICAgIDE4NixcbiAgICAgIDE0LFxuICAgICAgOTksXG4gICAgICAxMDYsXG4gICAgICAxMjcsXG4gICAgICAyNDksXG4gICAgICAxOTQsXG4gICAgICAxODQsXG4gICAgICAzNixcbiAgICAgIDIxNSxcbiAgICAgIDI0NixcbiAgICAgIDE4NixcbiAgICAgIDg2LFxuICAgICAgNSxcbiAgICAgIDM3LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAzMyxcbiAgICAgIDI0MixcbiAgICAgIDE1OCxcbiAgICAgIDIwNyxcbiAgICAgIDEwOCxcbiAgICAgIDEzNixcbiAgICAgIDMsXG4gICAgICAxNjksXG4gICAgICAxOTUsXG4gICAgICAxNTksXG4gICAgICAxMzAsXG4gICAgICA5NyxcbiAgICAgIDUxLFxuICAgICAgMjYsXG4gICAgICAxOTAsXG4gICAgICAxNTksXG4gICAgICAyNTMsXG4gICAgICAyNDksXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUFSVlE5RkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTAwMzA3MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUJEXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ1MjU2OTE4NzEyNTc6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSEtycmNCRU9LUTVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNBTGc1VWdyMjhMWW5HczV4RFhqdzZEWnFvRkswbFVUQ0ZGbHplMCtXQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicytzaEZQSVJRYy9NQW53RllkZXlIQTB0U0NIYS9iUXFTNTlRV1cyajlDeTFRTG9NdW9yVDNGUGtwZHQ1cm9xYm1BU1kwbFJjZUJoOUd6b2JadEsyQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTFzdGowNFp6OFJDdmNMNDRlMU1VMHlobStCZ0VkUms4NXNzMTdsZ1ZrRVFqOHMrVGxXSjduUm9OTGVYWGNjcU1NNThyOWpSMnRwY3VtSEEzUVRZaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxMDAzMDcxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMzNzk1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJMUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkxSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWGZTdXdBZWY2TEVOWG1oUFZmL1VtWmlMZUsrZFFJOEJ4SWZrOEp3NHRrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODQ1NDIwNjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMzNzk1ODUxM1wifSIKfQ=="  // PUT your SESSION_ID 


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
