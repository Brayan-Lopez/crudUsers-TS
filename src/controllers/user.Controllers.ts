import { Request, Response } from "express";
import User from "../models/User";

const createUser = async (req:Request, res:Response) => {
  const {username, password} = req.body;
  try {
    const user = await User.create({username, password});
    res.status(201).json(user);
  }catch (error) {
    res.status(500).json({message: 'Error creating user'})
  }
};

const getAllUsers =async (req:Request, res:Response) => {
  try {
    const users = await User.findAll();
    res.status(201).json(users);
  }catch (error) {
    res.status(500).json({message: 'Error get all users'})
  }
};

const getOneUser = async (req:Request, res:Response) => {
  const {id} = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(201).json(user);
    }else {
      res.status(404).json({message: 'User does not exist'})
    }
    
  }catch (error) {
    res.status(500).json({message: 'User does not exist'})
  }
};

const updateUser = async (req:Request, res:Response) =>{
  const {id} = req.params;
  const {username, password} = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ username, password });
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User does not exist' });
    }
  }catch (error) {
    res.status(500).json({ error: 'User does not exist' });
  }
}

const deleteUser = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'deleted user' });
    } else {
      res.status(404).json({ error: 'User does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: 'User does not exist' });
  }   
}

export {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
};