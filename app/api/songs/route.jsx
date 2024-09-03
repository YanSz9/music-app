export async function GET(request) {
    const songs = [
        "https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/album.png?id=2&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/album.png?id=3&q=95&w=360&h=360&fit=fill",
    ];

    return new Response(JSON.stringify(songs), {
        headers: { 'Content-Type': 'application/json' },
    });
}
