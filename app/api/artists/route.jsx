export async function GET(request) {
    const artists = [
        "https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=2&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=3&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=4&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=5&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=6&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=7&q=95&w=360&h=360&fit=fill",
        "https://via.assets.so/movie.png?id=8&q=95&w=360&h=360&fit=fill",
        
    ];

    return new Response(JSON.stringify(artists), {
        headers: { 'Content-Type': 'application/json' },
    });
}
