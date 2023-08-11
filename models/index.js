const User = require("./USER");
const Task = require("./Task");
const Comment = require("./comment");
const Project = require("./Project");
const UserProject = require("./userproject");

User.hasOne(Project, {
	foreignKey: "manager_id",
});

Project.belongsTo(User, {
	foreignKey: "manager_id",
});

Project.hasMany(Task, {
	foreignKey: "project_id",
});

Task.belongsTo(Project, {
	foreignKey: "project_id",
});

Project.hasMany(Comment, {
	foreignKey: "user_id",
});

Comment.belongsTo(Project, {
	foreignKey: "user_id",
});

User.hasOne(Comment, {
	foreignKey: "project_id",
});

Comment.belongsTo(User, {
	foreignKey: "project_id",
});

User.belongsToMany(Project, {
	as: "ProjectsForUser",
	through: "UserProject",
});

Project.belongsToMany(User, {
	as: "UsersInProject",
	through: "UserProject",
});

module.exports = { User, Task, Comment, Project, UserProject };
