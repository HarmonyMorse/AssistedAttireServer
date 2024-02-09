const express = require("express");

const { ClothingItem } = require("../models");

const index = async (req, res) => {
    try {
        res.json(await ClothingItem.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
}

const create = async (req, res) => {
    try {
        res.json(await ClothingItem.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        res.json(await ClothingItem.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        const updatedClothingItem =
            res.json(
                await ClothingItem.findByIdAndUpdate(
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
        res.json(await ClothingItem.findByIdAndDelete(req.params.id));
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