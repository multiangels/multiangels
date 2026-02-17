export default async function handler(req, res) {
    if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET) {
        return res.status(500).json({ error: 'Configure os secrets no Vercel' });
    }

    try {
        const response = await fetch('https://id.twitch.tv/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: process.env.TWITCH_CLIENT_ID,
                client_secret: process.env.TWITCH_CLIENT_SECRET,
                grant_type: 'client_credentials'
            })
        });

        const data = await response.json();

        if (!data.access_token) {
            return res.status(502).json({ error: 'Token inválido' });
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

        return res.status(200).json({
            access_token: data.access_token,
            client_id: process.env.TWITCH_CLIENT_ID
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
