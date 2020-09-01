client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get(""); // id server
let c = g.channels.get("");// id channel
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
}, 1);
} else {
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});
