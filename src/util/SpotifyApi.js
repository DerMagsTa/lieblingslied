
const SpotifyApi = {
  ladeLieder: function() {
    return import("./lieder.json").then(resolveValue =>{
      return resolveValue
    }).then(jsonResponse => {
      if(jsonResponse.items) {
        return jsonResponse.items
      }
    })
  }

}

export default SpotifyApi
/*
const json = {
  "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=20&market=ES",
  "items" : [ {
    "added_at" : "2017-09-10T18:41:41Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/159qqlGwzE04xyqpfAwRLo"
          },
          "href" : "https://api.spotify.com/v1/artists/159qqlGwzE04xyqpfAwRLo",
          "id" : "159qqlGwzE04xyqpfAwRLo",
          "name" : "Parkway Drive",
          "type" : "artist",
          "uri" : "spotify:artist:159qqlGwzE04xyqpfAwRLo"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3sj64vlMjeymCV05otr8FA"
        },
        "href" : "https://api.spotify.com/v1/albums/3sj64vlMjeymCV05otr8FA",
        "id" : "3sj64vlMjeymCV05otr8FA",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8ea3d5328dbfc704e13ae6e50f3d8afffe06e3b1",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/798ec5b4fa455c9d6448d68fb04d372c0de161db",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/d38843f6dda4b0741c258b483ffdb0c01beab098",
          "width" : 64
        } ],
        "name" : "Deep Blue",
        "type" : "album",
        "uri" : "spotify:album:3sj64vlMjeymCV05otr8FA"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/159qqlGwzE04xyqpfAwRLo"
        },
        "href" : "https://api.spotify.com/v1/artists/159qqlGwzE04xyqpfAwRLo",
        "id" : "159qqlGwzE04xyqpfAwRLo",
        "name" : "Parkway Drive",
        "type" : "artist",
        "uri" : "spotify:artist:159qqlGwzE04xyqpfAwRLo"
      } ],
      "disc_number" : 1,
      "duration_ms" : 201034,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USEP41014004"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0gMREA9nAh1RD7TZ6WmQA5"
      },
      "href" : "https://api.spotify.com/v1/tracks/0gMREA9nAh1RD7TZ6WmQA5",
      "id" : "0gMREA9nAh1RD7TZ6WmQA5",
      "is_playable" : true,
      "name" : "Wreckage",
      "popularity" : 45,
      "preview_url" : "https://p.scdn.co/mp3-preview/248303d9c15e54119ca8de489d1fd34cccf84ee4?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:0gMREA9nAh1RD7TZ6WmQA5"
    }
  }, {
    "added_at" : "2017-08-30T09:13:08Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0v2e0oznnTaIXKLGKHphfX"
          },
          "href" : "https://api.spotify.com/v1/artists/0v2e0oznnTaIXKLGKHphfX",
          "id" : "0v2e0oznnTaIXKLGKHphfX",
          "name" : "Polaris",
          "type" : "artist",
          "uri" : "spotify:artist:0v2e0oznnTaIXKLGKHphfX"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3hn1P5EEB4BreHBZbqlClU"
        },
        "href" : "https://api.spotify.com/v1/albums/3hn1P5EEB4BreHBZbqlClU",
        "id" : "3hn1P5EEB4BreHBZbqlClU",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/06a8098bd7c5df5c332b6092dabc3390ececf846",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/479ed60bc6a918087f9f09640028a0904174fa2a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/74fc9d8153158d6843979a2a0b0715a76dd81ca9",
          "width" : 64
        } ],
        "name" : "The Remedy",
        "type" : "album",
        "uri" : "spotify:album:3hn1P5EEB4BreHBZbqlClU"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0v2e0oznnTaIXKLGKHphfX"
        },
        "href" : "https://api.spotify.com/v1/artists/0v2e0oznnTaIXKLGKHphfX",
        "id" : "0v2e0oznnTaIXKLGKHphfX",
        "name" : "Polaris",
        "type" : "artist",
        "uri" : "spotify:artist:0v2e0oznnTaIXKLGKHphfX"
      } ],
      "disc_number" : 1,
      "duration_ms" : 243913,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DED831701325"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7zWPqFh9vSNTJwEvuMuSIn"
      },
      "href" : "https://api.spotify.com/v1/tracks/7zWPqFh9vSNTJwEvuMuSIn",
      "id" : "7zWPqFh9vSNTJwEvuMuSIn",
      "is_playable" : true,
      "linked_from" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/5PPWCjy2bzBox7YlLJ46JH"
        },
        "href" : "https://api.spotify.com/v1/tracks/5PPWCjy2bzBox7YlLJ46JH",
        "id" : "5PPWCjy2bzBox7YlLJ46JH",
        "type" : "track",
        "uri" : "spotify:track:5PPWCjy2bzBox7YlLJ46JH"
      },
      "name" : "The Remedy",
      "popularity" : 38,
      "preview_url" : "https://p.scdn.co/mp3-preview/75643ddfb474072248ca98aa20a4b1a82aa13da6?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7zWPqFh9vSNTJwEvuMuSIn"
    }
  }, {
    "added_at" : "2017-08-21T17:27:04Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/38LdIuxB548zgHoEY2AN7a"
          },
          "href" : "https://api.spotify.com/v1/artists/38LdIuxB548zgHoEY2AN7a",
          "id" : "38LdIuxB548zgHoEY2AN7a",
          "name" : "While She Sleeps",
          "type" : "artist",
          "uri" : "spotify:artist:38LdIuxB548zgHoEY2AN7a"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/30TMZxAS5atxns4X1e8LOQ"
        },
        "href" : "https://api.spotify.com/v1/albums/30TMZxAS5atxns4X1e8LOQ",
        "id" : "30TMZxAS5atxns4X1e8LOQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2367da11943604df5916b4d636f9fc2e34aca2b0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/5894287aabbb2dc9946e84c301ea5e2535a2c224",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ca7bc54b608fc42744aaf4fc26272a87fb779ac2",
          "width" : 64
        } ],
        "name" : "Brainwashed (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:30TMZxAS5atxns4X1e8LOQ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/38LdIuxB548zgHoEY2AN7a"
        },
        "href" : "https://api.spotify.com/v1/artists/38LdIuxB548zgHoEY2AN7a",
        "id" : "38LdIuxB548zgHoEY2AN7a",
        "name" : "While She Sleeps",
        "type" : "artist",
        "uri" : "spotify:artist:38LdIuxB548zgHoEY2AN7a"
      } ],
      "disc_number" : 1,
      "duration_ms" : 301173,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBARL1401421"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5MfVGtik4J3qIFyNXdufEn"
      },
      "href" : "https://api.spotify.com/v1/tracks/5MfVGtik4J3qIFyNXdufEn",
      "id" : "5MfVGtik4J3qIFyNXdufEn",
      "is_playable" : true,
      "name" : "Trophies of Violence",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/d474bee67598082d498bd2dd6c15b6996f76cf41?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:5MfVGtik4J3qIFyNXdufEn"
    }
  }, {
    "added_at" : "2017-08-18T15:25:09Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0uNj4RxFjG0iVPlZS753en"
          },
          "href" : "https://api.spotify.com/v1/artists/0uNj4RxFjG0iVPlZS753en",
          "id" : "0uNj4RxFjG0iVPlZS753en",
          "name" : "After The Burial",
          "type" : "artist",
          "uri" : "spotify:artist:0uNj4RxFjG0iVPlZS753en"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7ABqA1tuH6eonHAIBaBqHe"
        },
        "href" : "https://api.spotify.com/v1/albums/7ABqA1tuH6eonHAIBaBqHe",
        "id" : "7ABqA1tuH6eonHAIBaBqHe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f2d5ba5b1f407863c78ddba6ea9302ad1e1ed084",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/90ed06d9dd7b442002dfdcbc1ea432494234ad8d",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/74f32a3acc036a44458f8100529cacbe8b2b9ee4",
          "width" : 64
        } ],
        "name" : "Dig Deep",
        "type" : "album",
        "uri" : "spotify:album:7ABqA1tuH6eonHAIBaBqHe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0uNj4RxFjG0iVPlZS753en"
        },
        "href" : "https://api.spotify.com/v1/artists/0uNj4RxFjG0iVPlZS753en",
        "id" : "0uNj4RxFjG0iVPlZS753en",
        "name" : "After The Burial",
        "type" : "artist",
        "uri" : "spotify:artist:0uNj4RxFjG0iVPlZS753en"
      } ],
      "disc_number" : 1,
      "duration_ms" : 273194,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USYFZ1564802"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5QLH7zAdcAJLgR25gtvtoK"
      },
      "href" : "https://api.spotify.com/v1/tracks/5QLH7zAdcAJLgR25gtvtoK",
      "id" : "5QLH7zAdcAJLgR25gtvtoK",
      "is_playable" : true,
      "name" : "Lost In The Static",
      "popularity" : 59,
      "preview_url" : "https://p.scdn.co/mp3-preview/1d1fa75f1f454897bb41c4e3c20a82cd45d28061?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:5QLH7zAdcAJLgR25gtvtoK"
    }
  }, {
    "added_at" : "2017-08-14T19:50:27Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
          },
          "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
          "id" : "6bu7CtcOMWcS0BMq7snHW6",
          "name" : "Wage War",
          "type" : "artist",
          "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6mxXSTVFYKCGWtXaz6hPvP"
        },
        "href" : "https://api.spotify.com/v1/albums/6mxXSTVFYKCGWtXaz6hPvP",
        "id" : "6mxXSTVFYKCGWtXaz6hPvP",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/1e51f5e10e56245a89c3b9b17118b956e7e4b517",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3ba268808e332bf8eb92b887ff45da40c9a4000c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8ce55289dfb29769f1c6cd143bc392fd20e733a7",
          "width" : 64
        } ],
        "name" : "Blueprints",
        "type" : "album",
        "uri" : "spotify:album:6mxXSTVFYKCGWtXaz6hPvP"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
        },
        "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
        "id" : "6bu7CtcOMWcS0BMq7snHW6",
        "name" : "Wage War",
        "type" : "artist",
        "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
      } ],
      "disc_number" : 1,
      "duration_ms" : 228120,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US5261521206"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4Pj1jicRCx3kVXOOpOwyzf"
      },
      "href" : "https://api.spotify.com/v1/tracks/4Pj1jicRCx3kVXOOpOwyzf",
      "id" : "4Pj1jicRCx3kVXOOpOwyzf",
      "is_playable" : true,
      "name" : "The River",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/76997aec378dd5a7f3946ca1694f1a07c7d0de08?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:4Pj1jicRCx3kVXOOpOwyzf"
    }
  }, {
    "added_at" : "2017-08-14T19:28:52Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
          },
          "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
          "id" : "6bu7CtcOMWcS0BMq7snHW6",
          "name" : "Wage War",
          "type" : "artist",
          "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6WnGZHxuYFxu02LQltJJHs"
        },
        "href" : "https://api.spotify.com/v1/albums/6WnGZHxuYFxu02LQltJJHs",
        "id" : "6WnGZHxuYFxu02LQltJJHs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ed49c53f7991881051916e00063b82db12eebab8",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/74f2109023f5762de792d6d40893295ad971e973",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/94e329bbd10d909b70b4b4d6c01498fdbe56c25d",
          "width" : 64
        } ],
        "name" : "Deadweight",
        "type" : "album",
        "uri" : "spotify:album:6WnGZHxuYFxu02LQltJJHs"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
        },
        "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
        "id" : "6bu7CtcOMWcS0BMq7snHW6",
        "name" : "Wage War",
        "type" : "artist",
        "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
      } ],
      "disc_number" : 1,
      "duration_ms" : 124466,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US5261722545"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2CuIYwPnITyvVk6KcqUNHK"
      },
      "href" : "https://api.spotify.com/v1/tracks/2CuIYwPnITyvVk6KcqUNHK",
      "id" : "2CuIYwPnITyvVk6KcqUNHK",
      "is_playable" : true,
      "name" : "Disdain",
      "popularity" : 42,
      "preview_url" : "https://p.scdn.co/mp3-preview/3d22ca21cd3b7058a2edde60d37b937db18de15e?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:2CuIYwPnITyvVk6KcqUNHK"
    }
  }, {
    "added_at" : "2017-08-14T19:25:24Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
          },
          "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
          "id" : "6bu7CtcOMWcS0BMq7snHW6",
          "name" : "Wage War",
          "type" : "artist",
          "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6WnGZHxuYFxu02LQltJJHs"
        },
        "href" : "https://api.spotify.com/v1/albums/6WnGZHxuYFxu02LQltJJHs",
        "id" : "6WnGZHxuYFxu02LQltJJHs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ed49c53f7991881051916e00063b82db12eebab8",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/74f2109023f5762de792d6d40893295ad971e973",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/94e329bbd10d909b70b4b4d6c01498fdbe56c25d",
          "width" : 64
        } ],
        "name" : "Deadweight",
        "type" : "album",
        "uri" : "spotify:album:6WnGZHxuYFxu02LQltJJHs"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
        },
        "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
        "id" : "6bu7CtcOMWcS0BMq7snHW6",
        "name" : "Wage War",
        "type" : "artist",
        "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
      } ],
      "disc_number" : 1,
      "duration_ms" : 191320,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US5261722543"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0GtE2uGZbeunLnyXbvcbda"
      },
      "href" : "https://api.spotify.com/v1/tracks/0GtE2uGZbeunLnyXbvcbda",
      "id" : "0GtE2uGZbeunLnyXbvcbda",
      "is_playable" : true,
      "name" : "Never Enough",
      "popularity" : 43,
      "preview_url" : "https://p.scdn.co/mp3-preview/21085cd5cf9bbbef13206e75951ca49ce07ba3eb?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:0GtE2uGZbeunLnyXbvcbda"
    }
  }, {
    "added_at" : "2017-08-14T19:19:48Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
          },
          "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
          "id" : "6bu7CtcOMWcS0BMq7snHW6",
          "name" : "Wage War",
          "type" : "artist",
          "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6WnGZHxuYFxu02LQltJJHs"
        },
        "href" : "https://api.spotify.com/v1/albums/6WnGZHxuYFxu02LQltJJHs",
        "id" : "6WnGZHxuYFxu02LQltJJHs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ed49c53f7991881051916e00063b82db12eebab8",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/74f2109023f5762de792d6d40893295ad971e973",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/94e329bbd10d909b70b4b4d6c01498fdbe56c25d",
          "width" : 64
        } ],
        "name" : "Deadweight",
        "type" : "album",
        "uri" : "spotify:album:6WnGZHxuYFxu02LQltJJHs"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
        },
        "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
        "id" : "6bu7CtcOMWcS0BMq7snHW6",
        "name" : "Wage War",
        "type" : "artist",
        "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
      } ],
      "disc_number" : 1,
      "duration_ms" : 216613,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US5261722541"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2tsleFpxa0VvIqLVZaR7hQ"
      },
      "href" : "https://api.spotify.com/v1/tracks/2tsleFpxa0VvIqLVZaR7hQ",
      "id" : "2tsleFpxa0VvIqLVZaR7hQ",
      "is_playable" : true,
      "name" : "Deadweight",
      "popularity" : 45,
      "preview_url" : "https://p.scdn.co/mp3-preview/73a51e73d5d9ba6f182e0b3de5d508c463887ea4?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:2tsleFpxa0VvIqLVZaR7hQ"
    }
  }, {
    "added_at" : "2017-07-19T18:26:32Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/20reGZ0TQPGvwx5U4xx6D8"
          },
          "href" : "https://api.spotify.com/v1/artists/20reGZ0TQPGvwx5U4xx6D8",
          "id" : "20reGZ0TQPGvwx5U4xx6D8",
          "name" : "Breakdown of Sanity",
          "type" : "artist",
          "uri" : "spotify:artist:20reGZ0TQPGvwx5U4xx6D8"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1QFn5bBn6OGli9kVzyWXte"
        },
        "href" : "https://api.spotify.com/v1/albums/1QFn5bBn6OGli9kVzyWXte",
        "id" : "1QFn5bBn6OGli9kVzyWXte",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/44caea4e0e88b769e253afc2d0688fe111f07385",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f2b384cb2d60dcef9c719fc171ccc874e963ec46",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/2b89e32045643059478d13454dfeb292a2368eb6",
          "width" : 64
        } ],
        "name" : "Coexistence",
        "type" : "album",
        "uri" : "spotify:album:1QFn5bBn6OGli9kVzyWXte"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/20reGZ0TQPGvwx5U4xx6D8"
        },
        "href" : "https://api.spotify.com/v1/artists/20reGZ0TQPGvwx5U4xx6D8",
        "id" : "20reGZ0TQPGvwx5U4xx6D8",
        "name" : "Breakdown of Sanity",
        "type" : "artist",
        "uri" : "spotify:artist:20reGZ0TQPGvwx5U4xx6D8"
      } ],
      "disc_number" : 1,
      "duration_ms" : 224806,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCACP1675715"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4WzVkrAXXSZ5s3bVWNblM5"
      },
      "href" : "https://api.spotify.com/v1/tracks/4WzVkrAXXSZ5s3bVWNblM5",
      "id" : "4WzVkrAXXSZ5s3bVWNblM5",
      "is_playable" : true,
      "name" : "Dear Diary",
      "popularity" : 36,
      "preview_url" : "https://p.scdn.co/mp3-preview/c2080e52ba060e01020e904c4329e57de92646a9?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:4WzVkrAXXSZ5s3bVWNblM5"
    }
  }, {
    "added_at" : "2017-07-18T15:33:13Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/20reGZ0TQPGvwx5U4xx6D8"
          },
          "href" : "https://api.spotify.com/v1/artists/20reGZ0TQPGvwx5U4xx6D8",
          "id" : "20reGZ0TQPGvwx5U4xx6D8",
          "name" : "Breakdown of Sanity",
          "type" : "artist",
          "uri" : "spotify:artist:20reGZ0TQPGvwx5U4xx6D8"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1QFn5bBn6OGli9kVzyWXte"
        },
        "href" : "https://api.spotify.com/v1/albums/1QFn5bBn6OGli9kVzyWXte",
        "id" : "1QFn5bBn6OGli9kVzyWXte",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/44caea4e0e88b769e253afc2d0688fe111f07385",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f2b384cb2d60dcef9c719fc171ccc874e963ec46",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/2b89e32045643059478d13454dfeb292a2368eb6",
          "width" : 64
        } ],
        "name" : "Coexistence",
        "type" : "album",
        "uri" : "spotify:album:1QFn5bBn6OGli9kVzyWXte"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/20reGZ0TQPGvwx5U4xx6D8"
        },
        "href" : "https://api.spotify.com/v1/artists/20reGZ0TQPGvwx5U4xx6D8",
        "id" : "20reGZ0TQPGvwx5U4xx6D8",
        "name" : "Breakdown of Sanity",
        "type" : "artist",
        "uri" : "spotify:artist:20reGZ0TQPGvwx5U4xx6D8"
      } ],
      "disc_number" : 1,
      "duration_ms" : 188115,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCACP1675713"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3q3rjVF8vCZRGfdwy7LHk7"
      },
      "href" : "https://api.spotify.com/v1/tracks/3q3rjVF8vCZRGfdwy7LHk7",
      "id" : "3q3rjVF8vCZRGfdwy7LHk7",
      "is_playable" : true,
      "name" : "Restless",
      "popularity" : 40,
      "preview_url" : "https://p.scdn.co/mp3-preview/e3e8ce00f2b20662ac2f123d5f884cc19be1b0d4?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:3q3rjVF8vCZRGfdwy7LHk7"
    }
  }, {
    "added_at" : "2017-06-11T08:51:17Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
          },
          "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
          "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
          "name" : "Within The Ruins",
          "type" : "artist",
          "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0zT0ra3BjEICTOfq4myxGO"
        },
        "href" : "https://api.spotify.com/v1/albums/0zT0ra3BjEICTOfq4myxGO",
        "id" : "0zT0ra3BjEICTOfq4myxGO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/0f1c3a9de40b3657501726b8f980fc9e09b1652d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b6b962a7f7956c5f0581cfeff497a74aa88689b9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8466a05aed30094b2907864f1718568072157876",
          "width" : 64
        } ],
        "name" : "Phenomena",
        "type" : "album",
        "uri" : "spotify:album:0zT0ra3BjEICTOfq4myxGO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
        },
        "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
        "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
        "name" : "Within The Ruins",
        "type" : "artist",
        "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
      } ],
      "disc_number" : 1,
      "duration_ms" : 303880,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USKO11400463"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2tYG7soHsohgQs4Xof9QOB"
      },
      "href" : "https://api.spotify.com/v1/tracks/2tYG7soHsohgQs4Xof9QOB",
      "id" : "2tYG7soHsohgQs4Xof9QOB",
      "is_playable" : true,
      "name" : "Gods Amongst Men",
      "popularity" : 47,
      "preview_url" : "https://p.scdn.co/mp3-preview/7400b707506539af34ce483b9357e3a80fce178e?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:2tYG7soHsohgQs4Xof9QOB"
    }
  }, {
    "added_at" : "2017-06-10T19:12:09Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
          },
          "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
          "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
          "name" : "Within The Ruins",
          "type" : "artist",
          "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2E0OjAfhmHw6rbysw1HDCh"
        },
        "href" : "https://api.spotify.com/v1/albums/2E0OjAfhmHw6rbysw1HDCh",
        "id" : "2E0OjAfhmHw6rbysw1HDCh",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/33d306a506f9d1011e485aef5ebe5e539370e9f1",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/8ac42e0e54a21c23f5b4ff4c9248f3a129aac0f9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7dcbd4190a98c95793fafc0f424b912c3c6bba55",
          "width" : 64
        } ],
        "name" : "Halfway Human",
        "type" : "album",
        "uri" : "spotify:album:2E0OjAfhmHw6rbysw1HDCh"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
        },
        "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
        "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
        "name" : "Within The Ruins",
        "type" : "artist",
        "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
      } ],
      "disc_number" : 1,
      "duration_ms" : 266920,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USKO11601516"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7slJ9V4pQ0ncA78aFIxv18"
      },
      "href" : "https://api.spotify.com/v1/tracks/7slJ9V4pQ0ncA78aFIxv18",
      "id" : "7slJ9V4pQ0ncA78aFIxv18",
      "is_playable" : true,
      "name" : "Incomplete Harmony",
      "popularity" : 26,
      "preview_url" : "https://p.scdn.co/mp3-preview/58c3a21bd486d9d62c6a7416125ee1ee67bef802?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:7slJ9V4pQ0ncA78aFIxv18"
    }
  }, {
    "added_at" : "2017-06-10T19:04:24Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
          },
          "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
          "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
          "name" : "Within The Ruins",
          "type" : "artist",
          "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0zT0ra3BjEICTOfq4myxGO"
        },
        "href" : "https://api.spotify.com/v1/albums/0zT0ra3BjEICTOfq4myxGO",
        "id" : "0zT0ra3BjEICTOfq4myxGO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/0f1c3a9de40b3657501726b8f980fc9e09b1652d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b6b962a7f7956c5f0581cfeff497a74aa88689b9",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8466a05aed30094b2907864f1718568072157876",
          "width" : 64
        } ],
        "name" : "Phenomena",
        "type" : "album",
        "uri" : "spotify:album:0zT0ra3BjEICTOfq4myxGO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5mscNJ6lE9Kj7tWv4iCk7y"
        },
        "href" : "https://api.spotify.com/v1/artists/5mscNJ6lE9Kj7tWv4iCk7y",
        "id" : "5mscNJ6lE9Kj7tWv4iCk7y",
        "name" : "Within The Ruins",
        "type" : "artist",
        "uri" : "spotify:artist:5mscNJ6lE9Kj7tWv4iCk7y"
      } ],
      "disc_number" : 1,
      "duration_ms" : 299680,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USKO11400468"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2M0Pcg8UOQY0lY1n1uRbNL"
      },
      "href" : "https://api.spotify.com/v1/tracks/2M0Pcg8UOQY0lY1n1uRbNL",
      "id" : "2M0Pcg8UOQY0lY1n1uRbNL",
      "is_playable" : true,
      "name" : "Enigma",
      "popularity" : 42,
      "preview_url" : "https://p.scdn.co/mp3-preview/4c26a5a67c7ceb262c55b6a4093691980848e768?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:2M0Pcg8UOQY0lY1n1uRbNL"
    }
  }, {
    "added_at" : "2017-06-10T18:47:59Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
          },
          "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
          "id" : "6bu7CtcOMWcS0BMq7snHW6",
          "name" : "Wage War",
          "type" : "artist",
          "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6WnGZHxuYFxu02LQltJJHs"
        },
        "href" : "https://api.spotify.com/v1/albums/6WnGZHxuYFxu02LQltJJHs",
        "id" : "6WnGZHxuYFxu02LQltJJHs",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ed49c53f7991881051916e00063b82db12eebab8",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/74f2109023f5762de792d6d40893295ad971e973",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/94e329bbd10d909b70b4b4d6c01498fdbe56c25d",
          "width" : 64
        } ],
        "name" : "Deadweight",
        "type" : "album",
        "uri" : "spotify:album:6WnGZHxuYFxu02LQltJJHs"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6bu7CtcOMWcS0BMq7snHW6"
        },
        "href" : "https://api.spotify.com/v1/artists/6bu7CtcOMWcS0BMq7snHW6",
        "id" : "6bu7CtcOMWcS0BMq7snHW6",
        "name" : "Wage War",
        "type" : "artist",
        "uri" : "spotify:artist:6bu7CtcOMWcS0BMq7snHW6"
      } ],
      "disc_number" : 1,
      "duration_ms" : 205986,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "US5261722539"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3gnAMJx4BbbfzE5HVEMrEr"
      },
      "href" : "https://api.spotify.com/v1/tracks/3gnAMJx4BbbfzE5HVEMrEr",
      "id" : "3gnAMJx4BbbfzE5HVEMrEr",
      "is_playable" : true,
      "linked_from" : {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/2LnHf757eWdWub2heM1zaw"
        },
        "href" : "https://api.spotify.com/v1/tracks/2LnHf757eWdWub2heM1zaw",
        "id" : "2LnHf757eWdWub2heM1zaw",
        "type" : "track",
        "uri" : "spotify:track:2LnHf757eWdWub2heM1zaw"
      },
      "name" : "Stitch",
      "popularity" : 55,
      "preview_url" : "https://p.scdn.co/mp3-preview/2683530212cd83c124a7d66f418c75a9423655e8?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3gnAMJx4BbbfzE5HVEMrEr"
    }
  }, {
    "added_at" : "2017-06-09T10:06:04Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1bPBx2qbpWzEoLujeHC3G7"
          },
          "href" : "https://api.spotify.com/v1/artists/1bPBx2qbpWzEoLujeHC3G7",
          "id" : "1bPBx2qbpWzEoLujeHC3G7",
          "name" : "Upon A Burning Body",
          "type" : "artist",
          "uri" : "spotify:artist:1bPBx2qbpWzEoLujeHC3G7"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0f5IsHC3UGJWV1DtsliNEe"
        },
        "href" : "https://api.spotify.com/v1/albums/0f5IsHC3UGJWV1DtsliNEe",
        "id" : "0f5IsHC3UGJWV1DtsliNEe",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4e71220780f895f85e802358aa944cb2f2946632",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/24eae77416b203269ad45084f99c264319eb1845",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/87aece564195c14697df4031d8f75130f8958a81",
          "width" : 64
        } ],
        "name" : "Red. White. Green.",
        "type" : "album",
        "uri" : "spotify:album:0f5IsHC3UGJWV1DtsliNEe"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1bPBx2qbpWzEoLujeHC3G7"
        },
        "href" : "https://api.spotify.com/v1/artists/1bPBx2qbpWzEoLujeHC3G7",
        "id" : "1bPBx2qbpWzEoLujeHC3G7",
        "name" : "Upon A Burning Body",
        "type" : "artist",
        "uri" : "spotify:artist:1bPBx2qbpWzEoLujeHC3G7"
      } ],
      "disc_number" : 1,
      "duration_ms" : 189644,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USYFZ1220106"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3Q8JokEd2M5eZ00SfkYTT8"
      },
      "href" : "https://api.spotify.com/v1/tracks/3Q8JokEd2M5eZ00SfkYTT8",
      "id" : "3Q8JokEd2M5eZ00SfkYTT8",
      "is_playable" : true,
      "name" : "Desperado",
      "popularity" : 36,
      "preview_url" : "https://p.scdn.co/mp3-preview/51eb2dee09c1997f5f871bd808c8842d3c095277?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:3Q8JokEd2M5eZ00SfkYTT8"
    }
  }, {
    "added_at" : "2017-05-13T18:01:36Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
          },
          "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
          "id" : "6xTf7GXkLaSQIrWbHyQcMR",
          "name" : "Your Demise",
          "type" : "artist",
          "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2tKCcfJq4Ie4AfC9McdoMj"
        },
        "href" : "https://api.spotify.com/v1/albums/2tKCcfJq4Ie4AfC9McdoMj",
        "id" : "2tKCcfJq4Ie4AfC9McdoMj",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/29e76552e2d44c2042944ebb5faf79a5ef707922",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/765a50021a26658b194da1bf5383769c09868ead",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/f8aee6441dc30ee19e7b6ffdccd6d7c9c40656f8",
          "width" : 64
        } ],
        "name" : "Blood Stays on The Blade",
        "type" : "album",
        "uri" : "spotify:album:2tKCcfJq4Ie4AfC9McdoMj"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
        },
        "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
        "id" : "6xTf7GXkLaSQIrWbHyQcMR",
        "name" : "Your Demise",
        "type" : "artist",
        "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 178773,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEGS0800097"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3HPgz4gcvHU9ZbApQQcKVx"
      },
      "href" : "https://api.spotify.com/v1/tracks/3HPgz4gcvHU9ZbApQQcKVx",
      "id" : "3HPgz4gcvHU9ZbApQQcKVx",
      "is_playable" : true,
      "name" : "The Blood Stays On The Blade",
      "popularity" : 20,
      "preview_url" : "https://p.scdn.co/mp3-preview/3946641d9a2b4e059a11675156f1ee91565bc4e7?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:3HPgz4gcvHU9ZbApQQcKVx"
    }
  }, {
    "added_at" : "2017-05-13T18:01:26Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
          },
          "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
          "id" : "6xTf7GXkLaSQIrWbHyQcMR",
          "name" : "Your Demise",
          "type" : "artist",
          "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1m0RdklVFRbKIUSNxexsf4"
        },
        "href" : "https://api.spotify.com/v1/albums/1m0RdklVFRbKIUSNxexsf4",
        "id" : "1m0RdklVFRbKIUSNxexsf4",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e3b52988c4856d861ce350fc4ff6a9879f734e72",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/1d434a891fa85c82e7b7773c2dd1c30c732e45fd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70dd1c51c1dddaa0ad831732045a530d5b5ce992",
          "width" : 64
        } ],
        "name" : "Ignorance Never Dies",
        "type" : "album",
        "uri" : "spotify:album:1m0RdklVFRbKIUSNxexsf4"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
        },
        "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
        "id" : "6xTf7GXkLaSQIrWbHyQcMR",
        "name" : "Your Demise",
        "type" : "artist",
        "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 199320,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEGS0900012"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0sNLWsHf33F8v6xuYCCpA0"
      },
      "href" : "https://api.spotify.com/v1/tracks/0sNLWsHf33F8v6xuYCCpA0",
      "id" : "0sNLWsHf33F8v6xuYCCpA0",
      "is_playable" : true,
      "name" : "Great Shape",
      "popularity" : 9,
      "preview_url" : "https://p.scdn.co/mp3-preview/d5bdd6b2a9d82a91976d7803a814a6a3ae75e06e?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 12,
      "type" : "track",
      "uri" : "spotify:track:0sNLWsHf33F8v6xuYCCpA0"
    }
  }, {
    "added_at" : "2017-05-13T18:01:14Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
          },
          "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
          "id" : "6xTf7GXkLaSQIrWbHyQcMR",
          "name" : "Your Demise",
          "type" : "artist",
          "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1m0RdklVFRbKIUSNxexsf4"
        },
        "href" : "https://api.spotify.com/v1/albums/1m0RdklVFRbKIUSNxexsf4",
        "id" : "1m0RdklVFRbKIUSNxexsf4",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e3b52988c4856d861ce350fc4ff6a9879f734e72",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/1d434a891fa85c82e7b7773c2dd1c30c732e45fd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70dd1c51c1dddaa0ad831732045a530d5b5ce992",
          "width" : 64
        } ],
        "name" : "Ignorance Never Dies",
        "type" : "album",
        "uri" : "spotify:album:1m0RdklVFRbKIUSNxexsf4"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
        },
        "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
        "id" : "6xTf7GXkLaSQIrWbHyQcMR",
        "name" : "Your Demise",
        "type" : "artist",
        "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 193013,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEGS0900007"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0sFwthExoj73LlKIrFOKDQ"
      },
      "href" : "https://api.spotify.com/v1/tracks/0sFwthExoj73LlKIrFOKDQ",
      "id" : "0sFwthExoj73LlKIrFOKDQ",
      "is_playable" : true,
      "name" : "TF",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/aa199c22a7365daa212b2cb64af945e6197c6ac8?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:0sFwthExoj73LlKIrFOKDQ"
    }
  }, {
    "added_at" : "2017-05-13T18:01:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
          },
          "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
          "id" : "6xTf7GXkLaSQIrWbHyQcMR",
          "name" : "Your Demise",
          "type" : "artist",
          "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1m0RdklVFRbKIUSNxexsf4"
        },
        "href" : "https://api.spotify.com/v1/albums/1m0RdklVFRbKIUSNxexsf4",
        "id" : "1m0RdklVFRbKIUSNxexsf4",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e3b52988c4856d861ce350fc4ff6a9879f734e72",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/1d434a891fa85c82e7b7773c2dd1c30c732e45fd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70dd1c51c1dddaa0ad831732045a530d5b5ce992",
          "width" : 64
        } ],
        "name" : "Ignorance Never Dies",
        "type" : "album",
        "uri" : "spotify:album:1m0RdklVFRbKIUSNxexsf4"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
        },
        "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
        "id" : "6xTf7GXkLaSQIrWbHyQcMR",
        "name" : "Your Demise",
        "type" : "artist",
        "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 214893,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEGS0900009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0WIGlWTnXqmMJp3B2EV5SY"
      },
      "href" : "https://api.spotify.com/v1/tracks/0WIGlWTnXqmMJp3B2EV5SY",
      "id" : "0WIGlWTnXqmMJp3B2EV5SY",
      "is_playable" : true,
      "name" : "The Clocks Aren't Ticking Backwards",
      "popularity" : 16,
      "preview_url" : "https://p.scdn.co/mp3-preview/943bd04db0cc45783f5843feee54eb170c5834c5?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:0WIGlWTnXqmMJp3B2EV5SY"
    }
  }, {
    "added_at" : "2017-05-13T18:01:08Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
          },
          "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
          "id" : "6xTf7GXkLaSQIrWbHyQcMR",
          "name" : "Your Demise",
          "type" : "artist",
          "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
        } ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1m0RdklVFRbKIUSNxexsf4"
        },
        "href" : "https://api.spotify.com/v1/albums/1m0RdklVFRbKIUSNxexsf4",
        "id" : "1m0RdklVFRbKIUSNxexsf4",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e3b52988c4856d861ce350fc4ff6a9879f734e72",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/1d434a891fa85c82e7b7773c2dd1c30c732e45fd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/70dd1c51c1dddaa0ad831732045a530d5b5ce992",
          "width" : 64
        } ],
        "name" : "Ignorance Never Dies",
        "type" : "album",
        "uri" : "spotify:album:1m0RdklVFRbKIUSNxexsf4"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6xTf7GXkLaSQIrWbHyQcMR"
        },
        "href" : "https://api.spotify.com/v1/artists/6xTf7GXkLaSQIrWbHyQcMR",
        "id" : "6xTf7GXkLaSQIrWbHyQcMR",
        "name" : "Your Demise",
        "type" : "artist",
        "uri" : "spotify:artist:6xTf7GXkLaSQIrWbHyQcMR"
      } ],
      "disc_number" : 1,
      "duration_ms" : 286933,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBEGS0900010"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/56P4cgxgKimciLAA2zjcbn"
      },
      "href" : "https://api.spotify.com/v1/tracks/56P4cgxgKimciLAA2zjcbn",
      "id" : "56P4cgxgKimciLAA2zjcbn",
      "is_playable" : true,
      "name" : "Feels Like There's Something Dark Inside",
      "popularity" : 13,
      "preview_url" : "https://p.scdn.co/mp3-preview/976d3f4c08ca8d68831027d4fd1cec544dee3601?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:56P4cgxgKimciLAA2zjcbn"
    }
  } ],
  "limit" : 20,
  "next" : "https://api.spotify.com/v1/me/tracks?offset=20&limit=20&market=ES",
  "offset" : 0,
  "previous" : null,
  "total" : 278
}
*/
