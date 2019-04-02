async function tweets(parent, args, context, info) {

    // GET timeline using twitter API
    const tweetList = await 

    return tweetList;
}

module.exports = {
    tweets
}