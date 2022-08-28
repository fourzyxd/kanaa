import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Waalaikumsalam`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
/*const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Github',
                        url: https://github.com/fourzyxd
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: 085748600473
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://github.com/fourzyxd",
      mediaType: 2,
      description: "https://github.com/fourzyxd", 
      title: 'Fourzy-MD',
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})
}
handler.customPrefix = /^(assalamualaikum)$/i
handler.command = new RegExp

export default handler
