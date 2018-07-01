const {OperationHelper} = require('apac')
const crypto = require('crypto')

exports.sourceNodes = ({ boundActionCreators, createNodeId }, configOptions) => {

  const { createNode } = boundActionCreators

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  const asins = configOptions.asins
  delete configOptions.asins

  const opHelper = new OperationHelper(configOptions);
  
  // Helper function that processes a photo to match Gatsby's node structure
  const processItem = item => {
    const nodeId = createNodeId(`amazon-product-${item.ASIN}`)
    if (typeof item.ItemAttributes.Author == "string") {
      item.Author = item.ItemAttributes.Author
    } else {
      item.Author = item.ItemAttributes.Author.join(', ')
    }

    item.Images = {
      s: {url: item.SmallImage.URL},
      m: {url: item.MediumImage.URL},
      l: {url: item.LargeImage.URL},
    }
    delete item.ImageSets;
    delete item.LargeImage;
    delete item.MediumImage;
    delete item.SmallImage;
    delete item.ItemAttributes.EANList
    delete item.ItemAttributes.ItemDimensions
    delete item.ItemAttributes.Languages
    delete item.ItemAttributes.PackageDimensions
    delete item.ItemAttributes.Author

    const nodeContent = JSON.stringify(item)
    const nodeContentDigest = crypto
        .createHash('md5')
        .update(nodeContent)
        .digest('hex')

    const nodeData = Object.assign({}, item, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: `AmazonProduct`,
          content: nodeContent,
          contentDigest: nodeContentDigest,
        },
    })

    return nodeData
  }

  return new Promise( (resolve, reject) => {
    opHelper.execute('ItemLookup', {
      'Condition': 'All',
      'IdType': 'ASIN',
      'ItemId': asins,
      'IncludeReviewsSummary': false,
      'ResponseGroup': 'Medium'
    }).then((response) => {
        //console.log("Results object: ", response.result);
        response.result.ItemLookupResponse.Items.Item.forEach(item => {
          const nodeData = processItem(item)
          createNode(nodeData)
        })
        return resolve();
    }).catch((err) => {
      return reject(err);
    });
  })
}