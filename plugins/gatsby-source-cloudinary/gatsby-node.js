const fetch = require('node-fetch')
const queryString = require('query-string')
const crypto = require('crypto')
const cloudinary = require('cloudinary')

/**
 * Gatsby expects sourceNodes to return a promise
 */
exports.sourceNodes = ({ boundActionCreators, createNodeId }, configOptions) => {

  const { createNode } = boundActionCreators

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  cloudinary.config(configOptions);

  // Helper function that processes a photo to match Gatsby's node structure
  const processPhoto = photo => {
    const nodeId = createNodeId(`cloudinary-photo-${photo.public_id}`)
    photo.scaled_image_url  = cloudinary.url(photo.public_id + ".jpg", {secure: true, transformation: ["txb_preview"]})
    if (photo.width < 640) {
      photo.thumb_dims = {
        w: photo.width,
        h: photo.height
      }
    } else {
      photo.thumb_dims = {
        w: 640,
        h: Math.floor((640 * photo.height ) / photo.width)
      }
    }
    const nodeContent = JSON.stringify(photo)
    const nodeContentDigest = crypto
        .createHash('md5')
        .update(nodeContent)
        .digest('hex')

    const nodeData = Object.assign({}, photo, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: `CloudinaryImage`,
          content: nodeContent,
          contentDigest: nodeContentDigest,
        },
    })

    return nodeData
  }

  return new Promise( (resolve, reject) => {
    cloudinary.v2.api.resources({
      max_results: 100,
      context: true,
      tags: true
    }, (error, res) => {
      if (error) {
        return reject('oops');
      } 
      console.log("Cloudinary rate limit remaining: " + res.rate_limit_remaining);

      res.resources.forEach(photo => {
        const nodeData = processPhoto(photo)
        createNode(nodeData)
      })
      return resolve();
    });
  })
}