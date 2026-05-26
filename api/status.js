let activeServers = {};

export default function handler(req, res) {
    // SECURITY HEADERS: This fixes the "Network Error"
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const payload = req.body;
        activeServers[payload.ServerId] = {
            status: payload.Status,
            lastUpdated: new Date().toLocaleTimeString()
        };
        return res.status(200).json({ success: true });
    } 

    if (req.method === 'GET') {
        const { id } = req.query;
        if (id) {
            return res.status(200).json(activeServers[id] || { error: "Server Offline / No Data Received" });
        }
        return res.status(200).json(activeServers);
    }
}
