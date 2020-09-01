client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get(""); // 724410154551869577
let c = g.channels.get("");// 750044748873465866
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});
