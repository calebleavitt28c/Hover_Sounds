const axios = require('axios')

async function getInstagram (profileName) {
  const baseUrl = "https://www.instagram.com";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;

  await axios.get(jsonDataUrl, {
    'Access-Control-Allow-Origin': '*'
  })
    .then(response => {
      
      const data = response.data.graphql.user
      if (response.statusText == 'OK') {
        const id = data.id
        const profile = data.profile_pic_url

        const picturesData = data.edge_owner_to_timeline_media.edges
        
        let pictures = []

        for (let picture of picturesData) {
          pictures.push({
            url: picture.node.display_url,
            caption: picture.node.edge_media_to_caption.edges[0].node.text
          })
        }

        return {
          id: id,
          profilePicture: profile,
          pictures: pictures
        }
      }
    })
}

module.exports = { getInstagram }