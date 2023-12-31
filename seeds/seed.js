const sequelize = require("../config/connection");
const queryInterface = sequelize.getQueryInterface();
const { User, Task, Comment, Project } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");
const taskData = require("./tasksData.json");
const commentData = require("./commentData.json");
const userProjectData = require("./userProjectData.json");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userData, {
		individualHooks: true,
	});

	await Project.bulkCreate(projectData);

	await Comment.bulkCreate(commentData);

	await Task.bulkCreate(taskData);

	await queryInterface.bulkInsert("UserProject", userProjectData);

	process.exit(0);
};

seedDatabase();
