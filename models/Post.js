const mongoose = require ('mongoose');
const postSchema = new mongoose.Schema({
title:String,
comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
author:String,
content:String,
date:{type:Date, default:Date.now}
});

const post = mongoose.model('post', postSchema );
module.exports = post;
