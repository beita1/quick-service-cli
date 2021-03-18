const { example: userModel } = require('../model');
const Utils = require('./utils');

exports.createUser = async (ctx, next) => {
  const options = {
    name: Utils.getValueFromBody(ctx, 'name'),
    dob: Utils.getValueFromBody(ctx, 'dob'),
    address: Utils.getValueFromBody(ctx, 'address'),
    description: Utils.getValueFromBody(ctx, 'description'),
  };

  ctx.data = await userModel.insertUser(options);
  await next();
};

exports.getUser = async (ctx, next) => {
  const userId = Utils.getValueFromParams(ctx, 'userId');

  ctx.data = await userModel.findUserByUserId(userId) || {};
  await next();
};

exports.deleteUser = async (ctx, next) => {
  const userId = Utils.getValueFromParams(ctx, 'userId');

  const affectRowsCount = await userModel.deleteUserByUserId(userId);
  ctx.data = {
    affectRowsCount
  };
  await next();
};

exports.updateUser = async (ctx, next) => {
  const userId = Utils.getValueFromParams(ctx, 'userId');
  const options = {
    name: Utils.getValueFromBody(ctx, 'name'),
    dob: Utils.getValueFromBody(ctx, 'dob'),
    address: Utils.getValueFromBody(ctx, 'address'),
    description: Utils.getValueFromBody(ctx, 'description'),
  };

  const affectRowsCount = await userModel.updateUserByUserId(userId, options);
  ctx.data = {
    affectRowsCount
  };
  await next();
};
