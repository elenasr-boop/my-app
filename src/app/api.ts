const API_URL = "https://webdev-music-003b5b991590.herokuapp.com/";

export async function getTracks () {
    const res = await fetch(`${API_URL}catalog/track/all/`);
    
    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return res.json();
}