const express = require("express");
const { Outfit } = require("../models");

const index = async (req, res) => {
    try {
        res.json(await Outfit.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
}

const create = async (req, res) => {
    try {
        res.json(await Outfit.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        res.json(await Outfit.findById(req.params.id)).populate('clothingItems');
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        res.json(
            await Outfit.findByIdAndUpdate(
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
        res.json(await Outfit.findByIdAndDelete(req.params.id));
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