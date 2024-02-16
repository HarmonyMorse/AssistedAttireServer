const express = require('express');
const { WishlistItem } = require('../models');

const index = async (req, res) => {
    try {
        res.json(await WishlistItem.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
}

const create = async (req, res) => {
    try {
        res.json(await WishlistItem.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        res.json(await WishlistItem.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        res.json(
            await WishlistItem.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )
        );
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        res.json(await WishlistItem.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy,
}