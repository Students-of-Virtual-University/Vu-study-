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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_56_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsTk5YUUdiUGs2NmtzdUVOYTJiQW1VY0ZvQ2Z6OXQ3NzNvQ3RSN3lsOG5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNDQkJDRDQ0QjE2RUNFQTE0NDJEODlBMzM2NTNGODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzUwNTc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNzY3MDBFMTgwMjBERENDNkU0M0U5Q0E1MTdBMUFFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNTA1NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTZVOTUxUXdRU3FYUW9YNWMxMjNBQVwiLFxuICBcInBob25lSWRcIjogXCIyOWQ2ZWUwOS04ZWI3LTRlZDQtOWJlNC0wNTMxOTc3NzRhZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTQxLFxuICAgICAgMTM1LFxuICAgICAgMTIzLFxuICAgICAgNjQsXG4gICAgICAxNDMsXG4gICAgICAyMzYsXG4gICAgICAyMjQsXG4gICAgICA1OCxcbiAgICAgIDI0NyxcbiAgICAgIDExNixcbiAgICAgIDI3LFxuICAgICAgNDksXG4gICAgICAzNCxcbiAgICAgIDEyMCxcbiAgICAgIDE4NixcbiAgICAgIDg3LFxuICAgICAgMjU1LFxuICAgICAgMTgxLFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMTU3LFxuICAgICAgMjI0LFxuICAgICAgMTksXG4gICAgICAyMTUsXG4gICAgICAyMjgsXG4gICAgICAyOCxcbiAgICAgIDg4LFxuICAgICAgMjUzLFxuICAgICAgODYsXG4gICAgICAxMjQsXG4gICAgICAxNDAsXG4gICAgICAxMTksXG4gICAgICAxMTQsXG4gICAgICAxNCxcbiAgICAgIDI0NyxcbiAgICAgIDI5LFxuICAgICAgMjQ4LFxuICAgICAgMjQxLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1M2S0ZCMVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTAwMzA3MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUJEXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ1MjU2OTE4NzEyNTc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTEtycmNCRUtuejVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNBTGc1VWdyMjhMWW5HczV4RFhqdzZEWnFvRkswbFVUQ0ZGbHplMCtXQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3A5SVg3NDBEcnRaT2xsaENEaTRNbnBmUFAxMGFGMlp3OW5qdDNKcEZ6dVpxaXpGbUJELzl5amNLajFzb2x6c2JIeUVRUU53V1NDc3NPeElpeXJkQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRmF4czZHZTZxeTBEUzY3bVJqUk45RWc1Wi9mdmFnODNGMnkweUQybDlyTUhqMm9PL25UNGlmTzBRV3U4a2RDRmJ6Wm55OE9IVWtmQWM1TGZKWEsxaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxMDAzMDcxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM1MDU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJMVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkxULmpzb24iOiAie1wia2V5RGF0YVwiOlwic0NGQUJVTG1JNEJZOFNuZDhtMThsVnpITHNjU210U1RqSzladTBoWis2az1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODQ1NDIwNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTM1MDU3NDAyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
