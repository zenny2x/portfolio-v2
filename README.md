# Portfolio-V2
This is a second new and improved version of my last portfolio, which will be updated depending on how im feeling

## Discord Profile
We use react-use-lanyard which uses a lanyard websocket in order to obtain the data of our discord account

## Techstack so far
- Tailwind CSS
- Shadcn
- React + Vite(I use vite because I dont need any SEO for my portfolio whereas NextJS is kinda confusing to me since it adds a bunch of features ro react)
`

## Data Structure Paths
- username: `status.discord_user.username`
- displayName: `status.discord_user.display_name`
- id: `status.discord_user.id`
- avatar: `status.discord_user.avatar`
- banner: `data.user.banner`
- tag: `status.discord_user.primary_guild.tag`
- badge: `status.discord_user.primary_guild.badge`
- clanID: `status.discord_user.primary_guild.identity_guild_id`
- icons: `data.badges`
- status: `status.discord_status`
- spotify: `status.spotify`
- activities: `status.activities`

### Example WebSocket Response
```json
{
  "kv": {},
  "discord_user": {
    "avatar": "a1b2c3d4e5f6g7h8i9j0",
    "avatar_decoration_data": null,
    "bot": false,
    "collectibles": null,
    "discriminator": "0",
    "display_name": "John Doe",
    "display_name_styles": {
      "colors": [16711680],
      "effect_id": 1,
      "font_id": 3
    },
    "global_name": "John Doe",
    "id": "123456789012345678",
    "primary_guild": {
      "badge": "abc123def456ghi789",
      "identity_enabled": true,
      "identity_guild_id": "987654321098765432",
      "tag": "CLAN"
    },
    "public_flags": 0,
    "username": "johndoe"
  },
  "activities": [
    {
      "assets": {
        "large_image": "spotify:ab67616d0000b273example",
        "large_text": "Album Name"
      },
      "created_at": 1769627742122,
      "details": "Song Title",
      "flags": 48,
      "id": "spotify:1",
      "name": "Spotify",
      "party": {
        "id": "spotify:123456789012345678"
      },
      "session_id": "examplesessionid123",
      "state": "Artist Name",
      "sync_id": "exampletrackid123",
      "timestamps": {
        "end": 1769627874631,
        "start": 1769627741885
      },
      "type": 2
    }
  ],
  "discord_status": "online",
  "active_on_discord_web": false,
  "active_on_discord_desktop": true,
  "active_on_discord_mobile": false,
  "active_on_discord_embedded": false,
  "listening_to_spotify": true,
  "spotify": {
    "album": "Album Name",
    "album_art_url": "https://i.scdn.co/image/ab67616d0000b273example",
    "artist": "Artist Name",
    "song": "Song Title",
    "timestamps": {
      "end": 1769627874631,
      "start": 1769627741885
    },
    "track_id": "exampletrackid123"
  }
}
```