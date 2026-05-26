let gameStatus = {
    Terrain: false,
    Lighting: false,
    Storage: false,
    Players: false
};

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Roblox sends data here
        gameStatus = req.body;
        return res.status(200).json({ message: "Updated" });
    } else {
        // Website reads data from here
        return res.status(200).json(gameStatus);
    }
}
