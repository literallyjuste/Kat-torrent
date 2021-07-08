const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrentParser');

const torrent = torrentParser.open('gayanimegirls.torrent');

tracker.getPeers(torrent, peers => {
    console.log('list of peers:', peers);
});