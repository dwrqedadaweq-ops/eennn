function refreshUI(data) {
    const ids = ['s1', 's2', 's3', 's4'];
    const keys = ['Terrain', 'Lighting', 'Storage', 'Players'];

    keys.forEach((key, index) => {
        const el = document.getElementById(ids[index]);
        const status = data[key];
        
        el.textContent = status ? "OK" : "FAIL";
        el.className = status ? "good" : "bad";
    });
}

fetch('/api/status')
    .then(res => res.json())
    .then(data => refreshUI(data));
