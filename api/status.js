let activeServers = {};

export default function handler(req, res) {
    if (req.method === 'POST') {
        const payload = req.body;
        const serverId = payload.ServerId;
        
        activeServers[serverId] = {
            status: payload.Status,
            lastUpdated: Date.now()
        };
        
        return res.status(200).json({ success: true, url: `/?id=${serverId}` });
    } 

    if (req.method === 'GET') {
        const { id } = req.query;
        
        if (id) {
            return res.status(200).json(activeServers[id] || { error: "server off or not found" });
        }
        
        return res.status(200).json(activeServers);
    }
}
